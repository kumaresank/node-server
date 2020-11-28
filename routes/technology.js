'use strict'
const express = require('express');
const router = express.Router();
const Technology = require('../models/Technology');

/**
 * @swagger
 * /api/technology:
 *  get:
 *    description: Use to request all technology
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    Technology.find({}).populate('category').then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.get('/:id', (req, res) => {
    Technology.findOne({  _id: req.params.id }).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.post('/', (req, res) => {
    Technology.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.put('/:id', (req, res) => {
    Technology.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;