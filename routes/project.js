'use strict'
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

/**
 * @swagger
 * /api/project:
 *  get:
 *    description: Use to request all project
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    Project.find({}).populate('techs').then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/project/{id}:
 *  get:
 *    description: Use to request a project
 *    parameters:
 *       - name: id
 *         description: Particular project Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', (req, res) => {
    Project.findOne({  _id: req.params.id }).populate('techs').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});


/**
 * @swagger
 * definitions:
 *   Stack:
 *     properties:
 *       name:
 *         type: string
 *       technology:
 *         type: string
 *       version:
 *         type: string
*/

/**
 * @swagger
 * /api/project:
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
 *         type: string
 *       - name: startDate
 *         in: formData
 *         required: true
 *         type: string
 *       - name: team
 *         description: Particular Team Object's ID
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: techs
 *         description: Array of Technology Stack
 *         in: body
 *         required: true
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             $ref: '#/definitions/Stack'
 *     responses:
 *       200:
 *         description: technology
*/
router.post('/', (req, res) => {
    Project.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/project/{id}:
 *   put:
 *     description: Use to update a project
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular project Object's ID
 *         in: path	 
 *         required: true
 *         type: string
 *       - name: name
 *         in: formData
 *         type: string
 *       - name: description
 *         in: formData
 *         type: string
 *       - name: icon
 *         in: formData
 *         type: string
 *       - name: startDate
 *         in: formData
 *         type: string
 *       - name: team
 *         description: Particular Team Object's ID
 *         in: formData
 *         type: string 
 *       - name: techs
 *         description: Array of Technology Stack
 *         in: body
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             $ref: '#/definitions/Stack'
 *     responses:
 *       200:
 *         description: A successful response
*/
router.put('/:id', (req, res) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

/**
 * @swagger
 * /api/project/{id}:
 *  delete:
 *    description: Use to delete a project
 *    parameters:
 *       - name: id
 *         description: Particular project Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', (req, res) => {
    Project.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;