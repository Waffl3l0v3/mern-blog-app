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
   Run the following command from the root directory to install all dependencies for the project:
   ```bash
   npm run install-all
   ```

### Available Scripts

From the root directory, you can run:
- `npm run install-all` - Installs root, client, and server dependencies.
- `npm run build` - Builds the full project for production.
- `npm start` - Starts both frontend and backend concurrently for local development.
- `npm run build-client` - Builds only the React frontend.
- `npm run start-client` - Starts only the React frontend dev server.
- `npm run start-server` - Starts only the Express backend dev server.

### Running the Application (Development)

To start both the Express backend server and the Vite React frontend concurrently, simply run this command in the root folder:

```bash
npm start
```

The application will be accessible at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

*Note: The React frontend uses a Vite proxy (`client/vite.config.js`) to automatically route `/api/*` requests to the backend at port 5000 during development.*

### Production Deployment

When deploying to a production environment (e.g., Azure VMs, AWS EC2, DigitalOcean):

1. **Build the Frontend**: `cd client && npm run build`
2. **Start the Backend**: `cd server && pm2 start server.js`
3. **Architecture**: It is recommended to use **Nginx** as a reverse proxy. Configure Nginx to:
   - Serve the static files from `client/dist` for requests to `/`
   - Proxy requests for `/api/` to your backend server's private IP/port.
   
Because the frontend uses relative API paths (`/api/posts`), you **do not** need to configure `VITE_API_URL` when using this reverse-proxy architecture.
