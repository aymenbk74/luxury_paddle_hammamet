# Paddle Backend

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Set Up MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster (free tier available)
4. Get your connection string
5. Create a `.env` file in the backend folder:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/paddleboard?retryWrites=true&w=majority
PORT=5000
```

**Option B: Local MongoDB**
1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Create `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/paddleboard
PORT=5000
```

### 3. Run the Backend
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 4. API Endpoints

**Reviews:**
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/average-rating` - Get average rating and count
- `POST /api/reviews` - Create a new review

**Booked Slots:**
- `GET /api/booked-slots/:date` - Get booked slots for a date
- `POST /api/booked-slots/:date/:time` - Toggle a time slot
- `GET /api/booked-slots` - Get all booked slots

### 5. Frontend Setup
The React app is already configured to connect to `http://localhost:5000`
