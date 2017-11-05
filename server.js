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

const Student = require('./api/students/model/Student');

/** *********************************************************** */

app.get('/', (request, response) => {
    response.status(200).json({ message: 'You successfully connected.'})
});

/** *********************************************************** */

app.get('/api', (request, response) => {
    response.status(200).json({ message: 'Welcome to API Home.'})
});

/** *********************************************************** */

/** GET ALL STUDENTS INFO */
app.use('/api/students', require('./api/students/routes/get_students'));

/** *********************************************************** */

/** POST SINGLE STUDENT INFO */
app.post('/api/student', (req, res) => {
    
    const student = new Student(req.body);

    student.save((err, student) => {
        if(err) {
            res.status(400).json(err);
        }

        res.status(200).json(student);

    });
});

/** *********************************************************** */

// app.use('/api/students', require('./api/students/routes/get_student'));

/** *********************************************************** */

// /** GET SINGLE STUDENT INFO */
app.get('/api/student/:id', (req, res) => {
    
    const _id = req.params.id;
    
    Student.findOne({ _id }, (err, student) => {
        if(err) {
            res.status(400).json(err);
        }

        if(!student) {
            res.status(404).json({ message: 'No student found'});
        }

        res.status(200).json(student);
    });

});

/** *********************************************************** */

/** DELETE SINGLE STUDENT */
app.delete('/api/student/:id' , (req, res) => {

    const _id = req.params.id;

    Student.findOneAndRemove({ _id }, (err, student) => {

        if(err) {
            res.status(400).json(err);
        }

        if(!student) {
            res.status(404).json({ message: 'Student record not found'});
        }

        res.status(200).json({ message: `Student ${student.id} has been deleted` });
    });

});

/** *********************************************************** */

/**  EDIT A STUDENT */

app.put('/api/student/:id', (req, res) => {

    const _id = req.params.id;
    
    Student.findOneAndUpdate({ _id }, 
        req.body, { new: true },
        (err, student) => {
            if(err) {
                res.status(400).json(err);
            }

            res.status(200).json(student);
    });

});

/** *********************************************************** */

/* CONFIGURE HOSTNAME AND PORT  */
const hostname = "localhost";
const port = 3001;

app.listen(port || 5000, hostname, () => {

    mongoose.connect(mongooseUri, dbOptions, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`Server started on http://${hostname}:${port}`);
    })
});
