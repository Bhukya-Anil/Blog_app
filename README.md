# MERN Blog Project

Welcome to the MERN Blog Project! This project is built using the MERN stack (MongoDB, Express, React, and Node.js) and aims to provide a basic foundation for creating and managing blog posts.

## Features

- **User Authentication**: Users can register and log in to create, edit, and delete their own blog posts.
- **Create and Edit Posts**: Authenticated users can create new blog posts and edit their existing posts.
- **Read Posts**: Visitors can view all blog posts, including the title and content.
- **Delete Posts**: Authenticated users can delete their own posts. [Feature to be added]
- **Responsive Design**: The project includes responsive design to ensure a seamless experience across various devices.

## Getting Started

To run the MERN Blog Project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/Bhukya-Anil/Blog_app.git

   ```

2. Install backend dependencies:

   ```bash
    cd api
    npm install

   ```

3. Install frontend dependencies:

   ```bash
   cd ../client
   npm install

   ```

4. Start the backend server:(run using nodemon if nodemon is installed else npm)

   ```bash
   cd ../api
   nodemon index.js

   ```

5. Start the frontend development server:
   ```bash
   cd ../client
   npm run start
   ```

6.Open your web browser and visit http://localhost:3000 to see the app in action!

## Technologies Used

- **MongoDB**: Database for storing blog post data.
- **Express**: Backend framework for handling routes and API requests.
- **React**: Frontend library for building user interfaces.
- **Node.js**: Runtime environment for running the backend server.
- **Authentication**: Implement authentication using JWT and bcrypt.

## Project Structure

- **api**: Contains the Express server and API routes.
- **client**: Contains the React frontend components.
- **models**: Defines MongoDB schemas using Mongoose.
- **public**: Contains static assets for the client.
- **src**: Contains React components and application logic.
- **uploads**: Contains images that are posted in the Blog. Create uploads folder before running project if it doesn't exist in api/ path.
