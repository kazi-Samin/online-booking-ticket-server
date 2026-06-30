# TicketCore Server

## Purpose
This is the backend server for the TicketCore Online Ticket Booking Platform. It manages database interactions, provides API endpoints for the frontend, and securely handles operations utilizing MongoDB.

## Live URL
Backend is running connected to the frontend at: [https://online-ticket-booking-platform-gamma.vercel.app/](https://online-ticket-booking-platform-gamma.vercel.app/)

## Key Features
- **RESTful API:** Clean API endpoints for handling tickets, users, and bookings.
- **MongoDB Integration:** Robust data modeling and storage via native MongoDB driver.
- **CORS Configured:** Fully open CORS to allow requests from the Vercel-hosted client.
- **Environment Driven:** Secure environment variables for database URIs and Stripe Secrets.

## NPM Packages Used
- express
- cors
- mongodb
- dotenv
- nodemon

## Installation & Setup
1. Clone the repository.
2. Run npm install.
3. Run npm run start to start the server.


## Environment Variables
- MONGO_DB_URI
- BETTER_AUTH_SECRET
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET

