'use strict'
const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

/**
 * @swagger
 * /api/category:
 *  get:
 *    description: Use to request all category
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    Category.find({}).then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/category/{id}:
 *  get:
 *    description: Use to request a category
 *    parameters:
 *       - name: id
 *         description: Particular Category Object's ID (Automatically assigned by MongoDB)
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', (req, res) => {
    Category.findOne({  _id: req.params.id }).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/category:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Category
*/
router.post('/', (req, res) => {
    Category.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/category/{id}:
 *   put:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular Category Object's ID (Automatically assigned by MongoDB)
 *         in: path	 
 *         required: true
 *         type: string
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Category
*/
router.put('/:id', (req, res) => {
    Category.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;