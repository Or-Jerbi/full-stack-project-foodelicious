# FooDelicious - Recipes Web App

This Recipe Web App is a full-stack application built using the MERN (MongoDB, Express, React, Node.js) stack, developed as part of QueenB’s summer project. It enables users to explore, upload, and manage their own recipes in a personalized and secure environment.

Key features of the app include secure user authentication (sign up and login), a user-specific recipe library, a content upload page, search and filtering options, and profile management, allowing users to edit or delete their profile and view only their own recipes. An intuitive home recipe display simplifies navigation and recipe browsing for a seamless user experience.

The app was developed by a team working collaboratively on Trello and using Git for version control. The project provided valuable hands-on experience in full-stack development and agile teamwork.

<!-- 
## Features
1. Library Items Presentation
   - Display Content:
      - Library View: Displays a grid of recipe items with thumbnails, titles, and brief descriptions for easy browsing.
      - Item View: Users can view detailed information about a recipe by selecting an item.
   - Responsive Design: The layout adjusts automatically to fit different screen sizes, ensuring accessibility on desktop, tablet, and mobile.
   - Navigation: A logo button on all pages allows users to quickly navigate back to the Home Page.
2. User Authentication & Secure Login
   - Registration: Users can create accounts by providing an email, password, and optional profile details.
   - Login: Existing users can log in using their email and password, with secure error handling for incorrect credentials.
   - Additional Features: Includes password recovery and account verification to ensure a secure login experience.
3. Content Upload Interface
Upload Content: Users can upload recipes, including images, with a progress bar to show upload status.
Metadata Input: Users must provide important details such as title, description, tags, and categories for the recipe. Input validation ensures metadata is complete and file types are correct.
Feedback: Success or error messages are shown to inform the user about the status of their upload.
4. Search Functionality
Search Input: Users can search for specific recipes by entering keywords related to the content.
Search Results: Displays matching recipes with thumbnails and brief descriptions.
Optimization: Autocomplete and search suggestions are included to enhance the user search experience.
5. Filtering & Sorting Options
Filters: Users can filter recipes by type, tags, date, and other criteria to quickly find relevant content.
Sorting: Recipes can be sorted by different options such as newest or most popular.
Dynamic Updates: Results are updated dynamically as users apply filters or sorting criteria.
6. Content Management Dashboard
View Content: Users can view all of their uploaded recipes in a list or grid format.
Edit Content: Metadata for recipes can be edited to update information.
Delete Content: Users can delete recipes, with confirmation prompts to avoid accidental deletion.
-->

## Table of Contents

- [Installation](#installation)
   - [Prerequisites](#prerequisites) 
   - [Clone the Repository](#clone-the-repository)
   - [Server Setup](#server-setup)
   - [Client Setup](#client-setup)
   - [Setting Up Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en) (version 20.x or higher)
- npm (version 10.x or higher)
- MongoDB - Atlas 

### Clone the Repository
To get started with this project, you need to clone the repository to your local machine. 

### Server Setup
1. Navigate to the server directory:

```bash
cd server
```

2. Install server dependencies:

```bash
npm install
```

### Client Setup
1. Navigate to the client directory:

```bash
cd ../client
```

2. Install client dependencies:

```bash
npm install
```

### Environment Variables

Environment variables are used to configure your application without hardcoding sensitive information into your code. For this project, you need to set up the following environment variables in a `.env` file located both in the `server` directory and `client` directory:

#### Setup Server `.env` file
The server `.env` file should contain the following environment variables:
1. **MONGO_URI**: This variable contains the connection string for your MongoDB database. It tells your server where to find the database and how to connect to it. You will get this connection string from MongoDB Atlas when you set up your database.

2. **PORT**: This variable defines the port on which your Express server will run. By default, this is set to `5000`, but you can change it to any available port number.

**How to Set Up Your `.env` Server File**

1. **Create a `.env` File**:
   - Navigate to the `server` directory:
```bash
cd server
```
   - Create a file named `.env` if it does not already exist.

2. **Add the Environment Variables**:
   - Open the `.env` file in a text editor.
   - Add the following lines, replacing placeholders with your actual values:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/libraryDB?retryWrites=true&w=majority
CLIENT_URL=http://localhost:3000
PORT=5000
```
   - Replace `MONGO_URI` to be your created Atlas DB connaction string
   - You can change `5000` to any port number you prefer.
   - Make sure `CLIENT_URL` is set to your client current port.

#### Setup Client .env file
The client .env file should contain the following environment variables:

1. **REACT_APP_API_URL**: This variable contains the URL of your backend API. It tells your client where to send requests to interact with the server. By default, this should be set to http://localhost:5000/api, but you should change it to match your server's actual URL if different.

**How to Set Up Your .env Client File**

1. **Create a `.env` File**:
   - Navigate to the `client` directory:
```bash
cd client
```
   - Create a file named `.env` if it does not already exist.

2. **Add the Environment Variables**:
   - Open the .env file in a text editor.
   - Add the following line, replacing the placeholder with your actual server URL:
```env
REACT_APP_API_URL=http://localhost:5000/api
```
Replace http://localhost:5000/api with the URL of your backend server if it is running on a different host or port.

## Usage

This section explains how to use the application once it’s set up and running. Follow these steps to interact with both the client and server components of the application.

### Running the Server

1. **Navigate to the Server Directory**:
   - Open a terminal and change to the `server` directory:
```bash
cd server
```

2. **Start the Server**:
   - Start the Express server in development mode:
```bash
npm run dev
```
   - By default, the server will run on `http://localhost:5000`. You can change the port by modifying the `PORT` variable in your `.env` file.

3. Verify Server Operation:
   - Open a browser or API client (like [Postman](https://www.postman.com/)) to test your API endpoints.

### Running the Client

1. **Navigate to the Client Directory**:
   - Open a new terminal window or tab and change to the `client` directory:
```bash
cd client
```

2. **Start the Client**:
   - Start the React development server:
```bash
npm start
```
   - By default, the client will be accessible at `http://localhost:3000`.

3. **View the Application**:
   - Open a web browser and navigate to `http://localhost:3000` to view the application. The client communicates with the backend server to fetch and display data.

### Stopping the Servers

- **Stop the Express Server**:
  - In the terminal where the server is running, press `Ctrl + C` to stop the server.

- **Stop the React Client**:
  - In the terminal where the client is running, press `Ctrl + C` to stop the client.

### Troubleshooting

- **Server Issues**:
  - Check the terminal for error messages and ensure your `.env` file is correctly configured.
  - Verify that MongoDB Atlas is running and accessible.

- **Client Issues**:
  - Ensure that the React development server is running and that you have no conflicting applications using port 3000.
  - Check the browser console for errors if the client is not displaying correctly.

By following these steps, you should be able to run and interact with both the client and server components of the application effectively. If you encounter issues, refer to the troubleshooting tips or consult the documentation for more detailed guidance.

## Project Structure

- `client/`: Contains the React frontend application.
- `server/`: Contains the Express backend application, including API routes and database models.

```bash
│
├── client/                 # React client
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── styles/
│       ├── App.js
│       ├── index.js
│       └── package.json    # Client dependencies
│
├── server/                 # Node.js server
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env                # Environment variables
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
│
├── README.md
└── package.json            # Root package.json for repo management
```

### Explanation

#### Client Directory
- client/: Contains the React frontend application.
   - public/: Static files like index.html, images, and other assets that need to be served directly.
   - src/: Contains the source code for the React application.
      - components/: Reusable UI components such as buttons, forms, and other elements.
      - pages/: Page components that represent different routes in the application.
      - services/: Services for making API calls and handling business logic.
      - styles/: CSS and styling files for the application.
      - App.js: The main React component that sets up routing and renders the application.
      - index.js: The entry point for the React application, responsible for rendering the App component into the DOM.
      - package.json: Lists the client-side dependencies and scripts for managing the React application.
      
#### Server Directory
- server/: Contains the Node.js backend application.
   - controllers/: Contains the logic for handling API requests and responses.
   - models/: Mongoose models that define the data schema for MongoDB.
   - routes/: Defines the API endpoints and maps them to controller functions.
   - .env: Stores environment variables like database connection strings and server port.
   - server.js: The main server file that sets up Express, connects to the database, and starts the server.
   - package.json: Lists the server-side dependencies and scripts for managing the Node.js application.
   
#### Additional Files
- README.md: Provides documentation for the project, including setup instructions, usage, and other relevant information.
