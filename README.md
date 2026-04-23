# Nebula Notes - MERN Stack Blog Application

A beautifully designed, minimal, and fully functional blog application built with the MERN stack (MongoDB, Express.js, React, Node.js). 

## Features
- **Modern UI**: A premium, dynamic aesthetic built with Vanilla CSS, featuring glassmorphism, subtle animations, and an eye-catching dark theme.
- **Full CRUD Support**: Create, Read, Edit, and Delete blog posts seamlessly.
- **Single Command Startup**: Simplified startup process allowing you to spin up the backend and frontend simultaneously with a single command.

## Tech Stack
- **Frontend**: React (via Vite), React Router, Lucide Icons, Vanilla CSS
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB Atlas

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js (v18 or higher recommended)
- A MongoDB Atlas connection string (or local MongoDB instance)

### Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Waffl3l0v3/mern-blog-app.git
   cd mern-blog-app
   ```

2. **Configure Environment Variables**:
   In the `server/` directory, there is a `.env` file. You must add your actual MongoDB Atlas connection string to the `MONGO_URI` variable:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.thpbswo.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0
   PORT=5000
   ```

3. **Install Dependencies**:
   Run the following command in the **root** folder (`mern-blog-app`) to install all necessary dependencies for both the frontend and backend:
   ```bash
   npm run build
   ```

### Running the Application

To start both the Express backend server and the Vite React frontend concurrently, simply run this command in the root folder:

```bash
npm start
```

The application will be accessible at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`
