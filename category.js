'use strict'
const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/', (req, res) => {
    Category.find({}).then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.get('/:id', (req, res) => {
    Category.findOne({  _id: req.params.id }).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.post('/', (req, res) => {
    Category.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.put('/:id', (req, res) => {
    Category.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;