# Practical 1 – TikTok Clone using Next.js

This project is a simplified clone of TikTok built using Next.js, Tailwind CSS, and React Hook Form. It includes a sidebar navigation, video feed layout, and login/signup functionality.

---

### 1. Install Dependencies
bash
npm install

### 2. Run the Development Serverbash
npm run dev

---

## Project Setup

### Initial Setup
Created using:
bash
npx create-next-app@latest


Configured with:
- TypeScript: No
- ESLint: Yes
- Tailwind CSS: Yes
- src/ Directory: Yes
- App Router: Yes

### Folder Structure

src/
├── app/
│   ├── explore/
│   ├── following/
│   ├── live/
│   ├── login/
│   ├── profile/
│   ├── signup/
│   └── upload/
├── components/
│   ├── layout/
│   └── ui/
├── lib/
└── styles/

---

## Layout and Components

### Main Layout
- MainLayout.jsx in components/layout/
- Contains sidebar navigation and page wrapper
- Used globally in app/layout.js

### Pages
- /: Home with video feed
- /explore: Explore page
- /following: Following page
- /live: Live page
- /upload: Upload videos
- /profile: User profile
- /login and /signup: Auth pages

### Components
- VideoCard.jsx: Represents a single video
- VideoFeed.jsx: Layout for multiple videos

---

## Forms & Validation

### Login / Signup with React Hook Form
Installed via:
bash
npm install react-hook-form

Features:
- Email and password validation
- Confirm password validation
- Checkbox agreement (signup)

Validation includes:
- required
- pattern
- minLength
- validate

---