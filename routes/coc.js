'use strict'
const express = require('express');
const router = express.Router();
const CoC = require('../models/CoC');

/**
 * @swagger
 * /api/coc:
 *  get:
 *    description: Use to request all coc
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    CoC.find({}).populate('department').then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/coc:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: department
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Category
*/
router.get('/:id', (req, res) => {
    CoC.findOne({  _id: req.params.id }).populate('department').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.post('/', (req, res) => {
    CoC.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

router.put('/:id', (req, res) => {
    CoC.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

router.delete('/:id', (req, res) => {
    CoC.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;