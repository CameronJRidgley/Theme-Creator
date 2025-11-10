from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Theme Creator API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Theme Creator API"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/api/theme")
async def get_theme():
    return {
        "theme": "placeholder",
        "message": "Theme generation endpoint - coming soon"
    }
