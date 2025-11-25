📚 Modern MERN Stack Book Inventory

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing a simple book inventory. Includes a modern dashboard UI, image uploads, and complete CRUD functionality.

📝 Table of Contents

    Overview
    
    Features
    
    Tech Stack
    
    Prerequisites
    
    Installation and Setup

Scripts

🌟 Overview

This MERN application lets you manage a complete Book Inventory System with a clean and modern UI. It supports full CRUD operations, responsive views, and image uploads handled on the backend.

✨ Features

✔️ Full CRUD Operations: Create, view, edit, and delete books

✔️ Image Uploads: Upload book cover images using Multer

✔️ Modern UI: Dashboard-style interface built with React + Tailwind CSS

✔️ Two View Modes:

Table View (small image thumbnails)

Card View (large cover display)

✔️ CORS Enabled for secure backend–frontend communication

🛠️ Tech Stack
Backend

Node.js

Express

MongoDB + Mongoose

Multer (file uploads)

CORS

Frontend

React (Vite)

Tailwind CSS

React Router DOM

Axios

React Icons

✅ Prerequisites

Make sure you have installed:

Node.js (v18+ recommended)

MongoDB (local or remote Atlas cluster)

⚙️ Installation and Setup

Follow these steps to run the project locally.

1. Database Setup

Create a config.js file inside the backend directory and add:

// config.js
export const PORT = 5555;
export const mongoDBURL = 'YOUR_MONGODB_CONNECTION_STRING_HERE';

2. Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create the uploads folder for image storage:

mkdir uploads

3. Frontend Setup

Navigate to the frontend folder:

cd frontend


Install frontend dependencies:

npm install

4. Running the Application
Location	Command	Purpose
/backend	npm start	Starts Express API on http://localhost:5555

/frontend	npm run dev	Runs React app on http://localhost:5173
🚀 Scripts
Backend (/backend/package.json)
Script	Description
start	Starts the Node.js server
Frontend (/frontend/package.json)
Script	Description
dev	Runs React app with hot reload
build	Builds the production-ready frontend

