# Flavorite - ReactJS Project Assignment

Flavorite is a Single Page Application (SPA) built with ReactJS for the SoftUni React Course. It allows users to discover, share, and discuss their favorite cooking recipes.

## 🚀 Features

### Public Part (Accessible to everyone)
* **Home Page**: Welcome screen.
* **Catalog**: Browse all shared recipes.
* **Details**: View ingredients, instructions, and comments for specific recipes.
* **Authentication**: Login and Register functionality.

### Private Part (Available for Registered Users)
* **Create Recipe**: Share your own culinary masterpieces.
* **Edit/Delete**: Manage your own content.
* **Comments**: Discuss recipes with other users.
* **Route Guards**: Protected routes for secure navigation.

## 🛠 Technologies Used

* **ReactJS**: Functional Components, Hooks (useState, useEffect, useContext, useNavigate).
* **React Router DOM**: Client-side routing.
* **Context API**: Global Authentication State.
* **SoftUni Practice Server**: REST API Backend.

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/sibelyazadzhieva/react_js_project.git](https://github.com/sibelyazadzhieva/react_js_project.git)
    ```

2.  **Install dependencies**
    ```bash
    cd react_js_project
    npm install
    ```

3.  **Start the Backend Server**
    * Download the SoftUni Practice Server.
    * Run inside the server folder:
    ```bash
    node server.js
    ```

4.  **Start the Application**
    ```bash
    npm run dev
    ```

5.  Open `http://localhost:5173` in your browser.

## 🏗 Architecture

The project follows a standard React folder structure:

* `/src/components` - React components separated by feature (Home, Login, Create, etc.).
* `/src/contexts` - Global state management (AuthContext).
* `/src/services` - API service layers for fetching data from the backend.
* `/src/utils` - Helper functions (Guards).

## 🛡 Security

* **Route Guards**: Prevents guests from accessing private pages and vice-versa.
* **Owner Validation**: Edit/Delete buttons are visible only to the creator of the content.
* **Data Validation**: Forms include validation to ensure correct data input.