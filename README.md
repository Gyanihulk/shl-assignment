# Assignment for Edivorn

## Description

This project is an assignment for Edivorn.

## Features

### Backend

### Get Projects Stack

- **Endpoint:** `/`
- **Method:** POST
- **Request Body:**
  - Content-Type: application/json
  - JSON data with the following fields:
    - `Backend` (string, required): The backend technology.
    - `Title` (string, optional): The title of the technology stack.
    - `Technologies` (object, optional):
      - `Frontend` (string): The frontend technology.
      - `Backend` (string): The backend technology.
      - `Databases` (string): The databases used.
      - `Infrastructure` (string): The infrastructure details.
      - `Availability` (string): Availability information.

## Installation

### Backend 
Express application hosted on aws lamda

1. Create a `.env` file in the backend folder from.env.example.
2. Add the MongoDB connection URL in the `.env` file.
3. Run the following command to start the backend server locally:


### Frontend
1. Run "npm install or yarn" to install dependencies
2. Create a `.env` file in the backend folder from.env.example.
3. To test the frontend locally, run the following command: yarn dev or npm run dev


This will start the frontend server and make the application available at `http://localhost:3000`.

Please note that the instructions provided assume that you have Node.js and Yarn installed on your machine. Adjust the commands accordingly if you are using a different package manager or setup.

