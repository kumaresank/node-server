'use strict'
const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.get('/', (req, res) => {
    Department.find({}).then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.get('/:id', (req, res) => {
    Department.findOne({  _id: req.params.id }).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.post('/', (req, res) => {
    Department.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.put('/:id', (req, res) => {
    Department.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;