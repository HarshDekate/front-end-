# Frontend Project

## Description

This project is a React application built using [create-react-app](https://create-react-app.dev/). It leverages [Tailwind CSS](https://tailwindcss.com/) for styling and is developed in JavaScript.

## Pre-requisites

Before you start, ensure you have the following installed:

- [Git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Running in Development Environment

To run the application locally in a development environment, follow these steps:

1. Navigate to your application directory:
   ```sh
   cd YOUR_APPLICATION
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## .env File

The `.env` file contains various environment variables that you can configure. Ensure this file is set up correctly to manage configurations like API keys, environment settings, and more.

## Folder Structure

The project is organized as follows:

```
.
├── package.json
├── postcss.config.js
├── public
│   ├── assets
│   │   └── images           # All project images
│   ├── favicon.ico
│   ├── index.html           # Page template
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── fonts            # Project fonts
│   ├── components           # UI and common components
│   ├── constants            # Project constants, e.g., string constants
│   ├── hooks                # Helpful hooks
│   ├── index.jsx            # JavaScript entry point
│   ├── pages                # All route pages
│   ├── Routes.jsx           # Routing configuration
│   ├── styles
│   │   ├── index.css        # Other global styles
│   │   └── tailwind.css     # Default Tailwind modules
│   └── util
│       └── index.jsx        # Helpful utilities
└── tailwind.config.js       # Entire theme config, colors, fonts, etc.
```

### Important Files

For the project to build correctly, the following files must exist with exact filenames:

- `public/index.html` - The page template.
- `src/index.jsx` - The JavaScript entry point.

You can create subdirectories inside the `src` directory to organize your code.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. This is useful for running tests continuously as you make changes to your code.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

### `npm run eject`

**Note: This is a one-way operation. Once you eject, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project, copying all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in `package.json`. You will have full control over these files and can customize them as you like.

## Installing a Dependency

To install a new dependency, you can use npm:

```sh
npm install --save <dependency-name>
```

For example, to install React Router:

```sh
npm install --save react-router
```

Alternatively, you can use yarn:

```sh
yarn add react-router
```

## Additional Information

For more details about the create-react-app project, visit the [create-react-app documentation](https://create-react-app.dev/docs/getting-started/).

For more information about Tailwind CSS and how to use it, visit the [Tailwind CSS documentation](https://tailwindcss.com/docs).

---

If you encounter any issues or need further assistance, feel free to reach out for help. Happy coding!