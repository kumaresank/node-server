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

/**
 * @swagger
 * /api/technology/{id}:
 *  get:
 *    description: Use to request a technology
 *    parameters:
 *       - name: id
 *         description: Particular technology Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', (req, res) => {
    Technology.findOne({  _id: req.params.id }).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/technology:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: icon
 *         in: formData
 *         required: true
 *         type: string
 *       - name: url
 *         in: formData
 *         required: true
 *         type: string
 *       - name: licence
 *         in: formData
 *         required: true
 *         type: string
 *       - name: category
 *         description: Particular Category Object's ID
 *         in: formData
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: technology
*/
router.post('/', (req, res) => {
    Technology.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/technology/{id}:
 *   put:
 *     description: Use to update a technology
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular technology Object's ID
 *         in: path	 
 *         required: true
 *         type: string
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: icon
 *         in: formData
 *         required: true
 *         type: string
 *       - name: url
 *         in: formData
 *         required: true
 *         type: string
 *       - name: licence
 *         in: formData
 *         required: true
 *         type: string
 *       - name: category
 *         description: Particular Category Object's ID
 *         in: formData
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: coc
*/
router.put('/:id', (req, res) => {
    Technology.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

/**
 * @swagger
 * /api/technology/{id}:
 *  delete:
 *    description: Use to delete a technology
 *    parameters:
 *       - name: id
 *         description: Particular technology Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', (req, res) => {
    Technology.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;