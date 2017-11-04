'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Student = require('../model/Student');
const router = express.Router();

router.route('/:id')
    .delete((req, res) => {
        
        const _id = req.params.id;
        Student.findOneAndRemove({ _id }, (err, student) => {

            if(err) {
                res.status(400).json(err);
            }

            if(!student) {
                res.status(404).json({ message: 'Student record not found'});
            }

            res.json({ message: `Student ${student.id} has been deleted` });
        });
    });

module.exports = router;