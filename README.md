# Theme-Creator
A project to make theme songs based on a person's personality

## Project Structure

This project consists of two main components:

- **Frontend**: React application (in `/frontend`)
- **Backend**: FastAPI server (in `/backend`)

## Quick Start

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the server:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## API Documentation

Once the backend server is running, you can access:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Available Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint
- `GET /api/theme` - Theme generation endpoint (placeholder)

## Technology Stack

### Backend
- FastAPI - Modern Python web framework
- Uvicorn - ASGI server
- Pydantic - Data validation

### Frontend
- React - UI library
- Vite - Build tool
- Modern JavaScript (ES6+)

## Development

Both the frontend and backend support hot-reloading during development. Make changes to the code and see them reflected immediately.

## Future Enhancements

- User personality assessment
- AI-powered theme song generation
- Audio playback
- Theme customization options

