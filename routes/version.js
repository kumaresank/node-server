'use strict'
const express = require('express');
const router = express.Router();
const Version = require('../models/Version');

/**
 * @swagger
 * /api/version:
 *  get:
 *    description: Use to request all version
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    Version.find({}).populate('technology').then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.get('/:id', (req, res) => {
    Version.findOne({  _id: req.params.id }).populate('technology').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.post('/', (req, res) => {
    Version.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.put('/:id', (req, res) => {
    Version.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

router.delete('/:id', (req, res) => {
    Version.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;