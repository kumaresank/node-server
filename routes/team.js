'use strict'
const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

/**
 * @swagger
 * /api/team:
 *  get:
 *    description: Use to request all team
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    Team.find({}).populate('coc').then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.get('/:id', (req, res) => {
    Team.findOne({  _id: req.params.id }).populate('coc').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.post('/', (req, res) => {
    Team.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.put('/:id', (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

router.delete('/:id', (req, res) => {
    Team.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;