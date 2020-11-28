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

/**
 * @swagger
 * /api/projectTech/{id}:
 *  get:
 *    description: Use to request a Stack
 *    parameters:
 *       - name: id
 *         description: Particular Stack Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', (req, res) => {
    StackTech.findOne({  _id: req.params.id }).populate('technology').populate('version').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/projectTech:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: technology
 *         description: Particular Technology Object's ID
 *         in: formData
 *         required: true
 *         type: string
 *       - name: version
 *         description: Particular Version Object's ID
 *         in: formData
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: technology
*/
router.post('/', (req, res) => {
    StackTech.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/projectTech/{id}:
 *   put:
 *     description: Use to update a Stack
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
 *       - name: technology
 *         description: Particular Technology Object's ID
 *         in: formData
 *         required: true
 *         type: string
 *       - name: version
 *         description: Particular Version Object's ID
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: coc
*/
router.put('/:id', (req, res) => {
    StackTech.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

/**
 * @swagger
 * /api/projectTech/{id}:
 *  delete:
 *    description: Use to delete a Stack
 *    parameters:
 *       - name: id
 *         description: Particular Stack Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', (req, res) => {
    StackTech.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;