## Description
This is a simple React.js application with a login page and a user table. The user table fetches data from a dummy API (https://randomuser.me/documentation#multiple).

## Features
1. *Login Page:* Allows users to log in with dummy credentials.
2. *User Table:* Displays a list of users from the dummy API.
3. *Persistent Login State:* Remembers the login state, and users won't be redirected to the login page if already logged in.
4. *Restricted Access:* If not logged in, the user list is not accessible.
5. *User Search:* Enables users to search for other users by name.

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run npm install to install dependencies.
4. Run npm run dev to start the development server.

## Usage
1. Open the application in a web browser.
2. Navigate to the login page.
3. Log in with the provided dummy credentials.
4. Explore the user table and use the search feature.

## Note
This is a basic template, and additional features such as authentication, error handling, and improved styling should be implemented for a production-ready application.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

