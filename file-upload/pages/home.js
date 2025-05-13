import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

export default function Home() {
  const { control, handleSubmit, register, formState: { errors } } = useForm();
  const [filePreview, setFilePreview] = useState(null);

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Basic Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block mb-1 font-medium">Upload File:</label>
          <Controller
            name="file"
            control={control}
            rules={{
              required: 'File is required',
              validate: {
                fileSize: (files) => !files?.[0] || files[0].size <= 5 * 1024 * 1024 || 'File size must be less than 5MB',
                fileType: (files) => !files?.[0] || ['image/jpeg', 'image/png', 'application/pdf'].includes(files[0].type) || 'Invalid file type'
              }
            }}
            render={({ field: { onChange } }) => (
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  onChange(e.target.files);
                  if (file) {
                    setFilePreview(URL.createObjectURL(file));
                  }
                }}
                className="w-full p-2 border rounded"
              />
            )}
          />
          {errors.file && <p className="text-red-500 mt-1">{errors.file.message}</p>}
        </div>

        {filePreview && (
          <div className="mb-4">
            <h3 className="font-medium mb-1">Preview:</h3>
            <img src={filePreview} alt="Preview" className="max-w-full h-auto rounded" />
          </div>
        )}

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
