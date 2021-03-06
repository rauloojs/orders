# Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder structure

### index.js

Entry point for this app.

### store

Creates store and connects middlewares.

### actions

Contains actions creators for both orders and user parts.

### reducers

Contains reducers for both orders and user parts.

### constants

Contains constants with namespaces for both orders and user parts.

### services

Contains services used accross the whole project (api, ordersSocket, userService)

### containers

Contains only stateful components.

### components

Contains only stateless components. And pages components.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Dependencies

- **react**
- **axios** for http requests
- **bootstrap + reactstrap** for UI
- **date-fns** for human readable dates
- **react-router-dom + history** to manage browser history and set up routes
- **react-icons** for font awesome icons
- **redux + react-redux + redux-thunk + redux-logger** for state management
- **react-redux-toastr** for notifications
- **eslint + prettier + lint-staged + husky** for code quality
