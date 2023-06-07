# ProjectTrackr

This repository contains the code for the ProjectTrackr, a web application with various functionalities for managing projects. It consists of a client-side folder and a backend folder.
## Live Demo

A live demo of the web application can be accessed at [https://techproject-fw190480.vercel.app](https://techproject-fw190480.vercel.app)

## Folder Structure

Email:demo@gmail.com
Password:demo123

The repository is organized as follows:

- `client/`: Contains the client-side code for the website.
- `backend/`: Contains the server-side code and database implementation.

## Client

The `client/` folder contains the frontend code responsible for the user interface and interactions. It includes reactJs with vite template.

### Getting Started

To set up the client-side of the application, follow these steps:

1. Install any dependencies by running `npm install`.
2. Modify the configuration files, if necessary, to match your environment.
3. Use a web server to host the client files and ensure proper functioning.

## Backend

The `backend/` folder contains the server-side code responsible for handling requests, managing the database, and providing APIs for the client.

### Technologies Used

- Programming Language: [JavaScript]
- Framework: [ExpressJs]
- Database: [MongoDB]

### Getting Started

To set up the backend of the application, follow these steps:

1. Install any necessary dependencies by running `npm install`.
2. Configure the database connection in the appropriate configuration files.
3. Start the server using the command `npm run dev` or `node index.js`.

### API Documentation

#### Auth API

- **POST /login**
  - Description: Handles user login.
  - Controller: `loginController.login`

#### Project APIs

- **POST /project**
  - Description: Creates a new project.
  - Controller: `projectController.createProject`

- **GET /project**
  - Description: Retrieves project details.
  - Controller: `projectController.getProject`

- **PUT /update-status/:id**
  - Description: Updates project status by ID.
  - Controller: `projectController.updateStatus`

- **GET /count-document**
  - Description: Retrieves document count.
  - Controller: `projectController.countDocuments`

- **GET /department-status**
  - Description: Retrieves department-wise project status data.
  - Controller: `projectController.departmentStatusData`

- **GET /search**
  - Description: Searches projects based on filter text.
  - Controller: `projectController.searchProject`

- **GET /sort**
  - Description: Sorts the project list based on selected column.
  - Controller: `projectController.sortProject`


## Contributing

Contributions to the project are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.





