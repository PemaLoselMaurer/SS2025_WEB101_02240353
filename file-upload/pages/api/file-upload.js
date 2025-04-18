import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './uploads';
    form.keepExtensions = true;

    form.on('progress', (bytesReceived, bytesExpected) => {
      const progress = Math.round((bytesReceived / bytesExpected) * 100);
      console.log(`Upload progress: ${progress}%`);
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const file = files.file;
      const newPath = `./uploads/${file.originalFilename}`;
      fs.rename(file.filepath, newPath, (renameErr) => {
        if (renameErr) {
          console.error('Error saving file:', renameErr);
          return res.status(500).json({ error: 'File save failed' });
        }

        res.status(200).json({ message: 'File uploaded successfully', filename: file.originalFilename });
      });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
