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
 * /api/coc/{id}:
 *  get:
 *    description: Use to request a coc
 *    parameters:
 *       - name: id
 *         description: Particular coc Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', (req, res) => {
    CoC.findOne({  _id: req.params.id }).populate('department').then((response)=>{
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
 *         description: Particular Department Object's ID
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Category
*/
router.post('/', (req, res) => {
    CoC.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/coc/{id}:
 *   put:
 *     description: Use to update a coc
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular coc Object's ID
 *         in: path	 
 *         required: true
 *         type: string
 *       - name: name
 *         in: formData
 *         type: string
 *       - name: department
 *         description: Particular Department Object's ID
 *         in: formData
 *         type: string
 *     responses:
 *       200:
 *         description: coc
*/
router.put('/:id', (req, res) => {
    CoC.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

/**
 * @swagger
 * /api/coc/{id}:
 *  delete:
 *    description: Use to delete a coc
 *    parameters:
 *       - name: id
 *         description: Particular coc Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', (req, res) => {
    CoC.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;