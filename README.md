# PR Event Registration Portal

A simple full-stack web application built for a college PR team to manage event registrations.

## 🚀 Features
- **Modern Landing Page**: Clean, responsive UI with event details.
- **Registration Form**: Student-friendly form with data validation.
- **Admin Dashboard**: View all registered students and total count.
- **Tech Stack**: MongoDB, Express.js, React, Node.js (MERN).

## 🛠️ Tech Stack
- **Frontend**: React (Vite), Tailwind CSS (CDN), Lucide-React, Axios, React Router.
- **Backend**: Node.js, Express.js, Mongoose, CORS, Dotenv.
- **Database**: MongoDB.

## 📂 Project Structure
```
PR/
├── backend/
│   ├── models/
│   │   └── Registration.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── RegistrationForm.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   └── Admin.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    └── package.json
```

## ⚙️ Local Setup

### 1. Prerequisites
- Node.js installed.
- MongoDB running locally or a MongoDB Atlas URI.

### 2. Backend Setup
1. Navigate to the `backend` folder.
2. Create a `.env` file and add your `MONGODB_URI`.
3. Run `npm install`.
4. Start the server: `node server.js`.

### 3. Frontend Setup
1. Navigate to the `frontend` folder.
2. Run `npm install`.
3. Start the development server: `npm run dev`.

## 🚀 Deployment
- **Backend**: Deploy on **Render** (Connect your GitHub repo, set build command to `npm install`, and start command to `node server.js`).
- **Frontend**: Deploy on **Vercel** (Connect repo, set build command to `npm run build`, and output directory to `dist`).
