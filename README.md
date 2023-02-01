# mern-submit-form
MERN submit form where you can type data in an input and submit them from localhost:3000 on the Frontend to a MongoDB database and the server on localhost:27017
<h1><a href="https://mernsubmitform.github.io/">The website</a></h1><h2>This is here just for the look on the visual side, it will throw errors, because code is configured to localhosts</h2>

The app is built using MongoDB, Express.js, React.js, and Node.js (MERN stack).
In the "models" folder, there is a file named "SubmitForm.js" which contains the Mongoose schema for the submit form data. The schema includes fields for the user's name, email, enquiry, and date.
In the "routes" folder, there is a file named "submitForm.js" which contains the Express routes for the app. The file exports two routes: one for getting all submit form data and one for saving new submit form data.
The GET route is used to retrieve all the submit form data from the MongoDB database. It uses the Mongoose "find()" method to query the database and return all the documents in the "submitForm" collection.
The POST route is used to save new submit form data to the MongoDB database. It uses the Mongoose "save()" method to insert the new data as a document in the "submitForm" collection.
In the "client" folder, there is a React.js app which allows user to submit form data. It sends a post request to the server with the form data as the request body.
The server listens to the post request, and save the form data to the MongoDB and returns a success message.
The client then displays the success message to the user.
The app uses axios library for making HTTP requests.
The app uses Mongoose, a MongoDB object modelling tool, to interact with the MongoDB database.
The app uses morgan, a HTTP request logger middleware for node.js, for logging the HTTP requests.
The app uses "cors" middleware for handling cross-origin resource sharing.
The app uses "body-parser" middleware for parsing incoming request bodies in a middleware before your handlers, available under the req.body property.
The app uses "path" module, a built-in Node.js module, for handling file paths.
The app uses "webpack" to bundle all the client side code.
The app uses "node-sass" and "sass-loader" for handling sass files.
The app uses "react-scripts" for creating a react app.
The client folder contains a "package.json" file, which lists all the dependencies for the React app(didn't upload this to github, can send ZIP of the entire proj folder).
The server folder contains a "package.json" file, which lists all the dependencies for the server-side app(didn't upload this to github, can send ZIP of the entire proj folder).
To run the app, first start the MongoDB server, then start the Node.js server, and finally start the React app.
<br/>
In simple words -> submit something into localhosht:3000, data will be send to the localhost:27017/api
<h2>To run this on your local machine just change this mongo db info in server.js to your own database information:</h2>
// <username> and <password> have to be changed to an actual mongodb username and password, I won't give my own out so people
// don't just have acess to my database to go and change things there, but you can simply create your own mongodb database->
// -> put your own link in here, and ur own username and password + u gotta change the url on line 16
const MONGODB_URI = 'mongodb+srv://<username>:<password>@mern-submit-form-db.dvctpxi.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/jakubhalik-mern-submit-form-db'
<h2>And run all of these obviously:</h2>
npm install sass-loader<br/>
npm install node-sass<br/>
npm install axios<br/>
npm install express<br/>
npm install mongoose<br/>
npm install morgan<br/>
npm install path<br/>
npm install webpack

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
