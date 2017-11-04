'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Student = require('../model/Student');
const router = express.Router();

router.route('/:id')
    .put((req, res) => {

        const _id = req.params.id;

        Student.findOneAndUpdate({ _id }, 
            req.body, { new: true },
            (err, student) => {
                if(err) {
                    res.status(400).json(err);
                }

                res.json(student);
            });
    });

    module.exports = router;