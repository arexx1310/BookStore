# 🚀 Project: Modern MERN Stack Book Inventory

---

## 📝 Table of Contents

1.  [Overview](#overview)
2.  [Features](#features)
3.  [Tech Stack](#tech-stack)
4.  [Prerequisites](#prerequisites)
5.  [Installation and Setup](#installation-and-setup)
6.  [Scripts](#scripts)

---

## 🌟 Overview

This is a **MERN Stack** (MongoDB, Express, React, Node.js) application designed to manage a simple book inventory. It features a modern, responsive dashboard UI built with **Tailwind CSS**, providing full CRUD (Create, Read, Update, Delete) functionality, including file handling for book covers.

---

## ✨ Features

* **Full CRUD Operations:** Easily create, view details, edit, and delete book entries.
* **Image Upload:** Users can upload a **book cover image** using a dedicated file input. This is handled and stored locally on the server using **Multer**.
* **Image Viewing:** Clicking on the book cover on the details page opens the full-resolution uploaded image in a new tab.
* **Modern UI:** A clean, dashboard-style interface built using **React** and **Tailwind CSS**.
* **Two View Modes:** Toggle between a responsive **Table View** (with small image thumbnails) and a **Card View** (showing larger covers).
* **CORS Configuration:** Securely configured to allow interaction between the Node.js backend and the React frontend.

---

## 🛠️ Tech Stack

### Backend
* **Framework:** Node.js, Express
* **Database:** MongoDB (via Mongoose ODM)
* **File Handling:** Multer (for `multipart/form-data` image uploads)
* **Security:** CORS

### Frontend
* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **HTTP Client:** Axios
* **Icons:** React Icons

---

## ✅ Prerequisites

Before starting, ensure you have the following installed:

* **Node.js & npm/Yarn** (v18 or higher recommended)
* **MongoDB Instance:** A local MongoDB server running or a connection string to a remote Atlas cluster.

---

## ⚙️ Installation and Setup

Follow these steps to get the project running locally.

### 1. Database Configuration

1.  Create a file named **`config.js`** in your **`backend`** directory.
2.  Add your MongoDB connection string and server port:

    ```javascript
    // backend/config.js
    export const PORT = 5555;
    export const mongoDBURL = 'YOUR_MONGODB_CONNECTION_STRING_HERE';
    ```

### 2. Backend Setup (`/backend`)

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies (including `multer`):
    ```bash
    npm install
    ```
3.  Manually create the directory where uploaded files will be stored:
    ```bash
    mkdir uploads
    ```

### 3. Frontend Setup (`/frontend`)

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

---

## ➡️ Scripts

### Backend (`/backend/package.json`)

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `start` | `node index.js` | Runs the Express API on **`http://localhost:5555`**. |

### Frontend (`/frontend/package.json`)

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `vite` | Runs the React application in development mode on **`http://localhost:5173`**. |
| `build` | `vite build` | Creates a production build of the frontend files. |
