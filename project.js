'use strict'
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', (req, res) => {
    Project.find({}).populate('technologies').then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.get('/:id', (req, res) => {
    Project.findOne({  _id: req.params.id }).populate('technologies').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.post('/', (req, res) => {
    Project.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.put('/:id', (req, res) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;