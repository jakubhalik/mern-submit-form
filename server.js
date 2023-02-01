const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 27017;

const routes = require('./routes/api');

// <username> and <password> have to be changed to an actual mongodb username and password, I won't give my own out so people
// don't just have acess to my database to go and change things there, but you can simply create your own mongodb database->
// -> put your own link in here, and ur own username and password + u gotta change the url on line 16
const MONGODB_URI = 'mongodb+srv://<username>:<password>@mern-submit-form-db.dvctpxi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/jakubhalik-mern-submit-form-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));