'use strict'
const express = require('express');
const router = express.Router();
const StackTech = require('../models/StackTech');

/**
 * @swagger
 * /api/projectTech:
 *  get:
 *    description: Use to request all project techlogoies
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    StackTech.find({}).populate('technology').populate('version').then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.get('/:id', (req, res) => {
    StackTech.findOne({  _id: req.params.id }).populate('technology').populate('version').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.post('/', (req, res) => {
    StackTech.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.put('/:id', (req, res) => {
    StackTech.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

router.delete('/:id', (req, res) => {
    StackTech.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;