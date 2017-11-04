'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Student = require('../model/Student');
const router = express.Router();


router.route('/:id')
    .get((req, res) => {

        const _id = req.params.id;

        Student.findOne({ _id }, (err, student) => {
            if(err) {
                res.status(400).json(err);
            }

            else if(!student) {
                res.status(404).json({ message: 'No student found'});
            }

            res.json(student);
        });
    });


module.exports = router;