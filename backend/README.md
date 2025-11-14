# Theme Creator Backend (Java Spring Boot)

A REST API backend for the Theme Creator application, built with Java Spring Boot.

## Prerequisites

- Java 17 or higher
- Maven 3.6+

## Installation

Install dependencies using Maven:
```bash
cd backend
mvn clean install
```

## Running the Server

Start the development server:
```bash
mvn spring-boot:run
```

The API will be available at http://localhost:8000

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint
- `GET /api/theme` - Theme generation endpoint (placeholder)

## CORS Configuration

The API is configured to accept requests from:
- http://localhost:3000 (React dev server)

## Technology Stack

- Java 17
- Spring Boot 3.2.0
- Maven
