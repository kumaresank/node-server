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

/**
 * @swagger
 * /api/department/{id}:
 *  get:
 *    description: Use to request a department
 *    parameters:
 *       - name: id
 *         description: Particular department Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', (req, res) => {
    Department.findOne({  _id: req.params.id }).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/department:
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
 *     responses:
 *       200:
 *         description: Category
*/
router.post('/', (req, res) => {
    Department.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/department/{id}:
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
 *       - name: description
 *         in: formData
 *         type: string
 *     responses:
 *       200:
 *         description: coc
*/
router.put('/:id', (req, res) => {
    Department.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

/**
 * @swagger
 * /api/department/{id}:
 *  delete:
 *    description: Use to delete a department
 *    parameters:
 *       - name: id
 *         description: Particular department Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', (req, res) => {
    Department.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;