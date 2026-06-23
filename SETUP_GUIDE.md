# Database & Backend Setup Guide

## Quick Start

### 1. Install MongoDB Locally (Windows)

**Option A: Using Chocolatey (easiest)**
```powershell
choco install mongodb-community
```

**Option B: Manual Installation**
1. Download from https://www.mongodb.com/try/download/community
2. Run the installer
3. Choose "Install as a Service" during setup
4. Start MongoDB service:
   ```powershell
   net start MongoDB
   ```

### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Verify Backend is Running

Open your browser and go to: `http://localhost:5000/api/health`

You should see: `{"status": "Backend is running"}`

### 4. Update Frontend

Make sure your frontend is running:
```bash
# In the root directory (not in backend)
npm run dev
```

Your app will be at `http://localhost:5173` (or similar)

## Alternative: MongoDB Atlas (Cloud - No Local Installation)

If you prefer not to install MongoDB locally:

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a free cluster
4. Get your connection string
5. Update `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/paddleboard?retryWrites=true&w=majority
   ```
6. Run `npm run dev` in the backend folder

## Troubleshooting

**Backend won't connect to MongoDB:**
- Make sure MongoDB service is running: `net start MongoDB`
- Check connection string in `.env`
- Try connecting with MongoDB Compass to verify the connection

**Frontend can't reach backend:**
- Ensure backend is running on port 5000
- Check for CORS errors in browser console
- Verify `http://localhost:5000` is accessible

**Reviews/Slots not syncing:**
- Refresh the page
- Check browser console for errors
- Ensure both frontend and backend are running
