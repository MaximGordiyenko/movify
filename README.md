# Movify

#### Run commands from the root of project:
_Runs the frontend in the development mode_.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
> npm run client

_Runs the sever in the development mode_.<br />
Pass data to [http://localhost:8000](http://localhost:8000) to view it in the console.
> npm run nodemon server

### Setup backend
- [bcryptjs](https://www.npmjs.com/package/bcryptjs): used to hash passwords before we store them in our database
- [body-parser](https://www.npmjs.com/package/body-parser): used to parse incoming request bodies in a middleware

### Code explanation:
1. Allow use predefine path if don't pass path to child from parent component.
```javascript
<Route element={<ProtectedRoute isAllowed={!!user}/>}>
  <Route path="/movies" element={<Movies/>}/>
</Route>
```

2. Programmatically pass path to child but if not child use path by default.
```javascript
<Route
  path="/notes"
  element={
    <ProtectedRoute
      redirectPath="/login"
      isAllowed={!!user && user.permissions.includes('analyze' && user.roles.includes('admin'))}
    >
      <CreateNotes/>
    </ProtectedRoute>
  }
/>
```

## Learn More

You can learn more in the [CreateNote React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Useful links:
How to style README.md file [GitHub](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Run server and client at the same time [Concurrently](https://medium.com/technology-hits/how-to-run-react-front-end-express-back-end-concurrently-22b9922e5df7)

How to use react-router-dom to make private route [React Router 6: Private Route](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669).

How to make server route [Express route](https://medium.com/swlh/node-js-router-and-routes-a4a3cfced5c4).