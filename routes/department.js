'use strict'
const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

/**
 * @swagger
 * /api/department:
 *  get:
 *    description: Use to request all department
 *    responses:
 *      '200':
 *        description: A successful response
 */
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

router.delete('/:id', (req, res) => {
    Department.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;