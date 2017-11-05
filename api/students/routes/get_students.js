'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Student = require('../model/Student');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        
        Student.find({}, (err, student) => {
            if (err) {
                res.status(400).json(err);
            }

            res.json(student);
        })
    });


module.exports = router;