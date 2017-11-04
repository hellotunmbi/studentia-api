'use strict'

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

const mongodbUri = 'mongodb://student:password@ds143245.mlab.com:43245/studentia-mongo';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);

const dbOptions = { useMongoClient: true };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const students = require('./data');


/* GET LIST OF ALL STUDENTS INFO  */
app.use('/api/students', require('./api/students/routes/post_student'));
app.use('/api/students', require('./api/students/routes/get_students'));
app.use('/api/students', require('./api/students/routes/get_student'));
app.use('/api/students', require('./api/students/routes/delete_student'));
app.use('/api/students', require('./api/students/routes/put_student'));

app.get('/', (request, response) => {
    response.json({ message: 'You successfully connected.'})
});

app.get('/api', (request, response) => {
    response.json({ message: 'Welcome to API Home.'})
});



/* CONFIGURE HOSTNAME AND PORT  */
const hostname = "localhost";
const port = 3001;

app.listen(port, hostname, () => {

    mongoose.connect(mongooseUri, dbOptions, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`Server started on http://${hostname}:${port}`);
    })
});
