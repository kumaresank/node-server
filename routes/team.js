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

/**
 * @swagger
 * /api/team/{id}:
 *  get:
 *    description: Use to request a team
 *    parameters:
 *       - name: id
 *         description: Particular team Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', (req, res) => {
    Team.findOne({  _id: req.params.id }).populate('coc').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/team/coc/{id}:
 *  get:
 *    description: Use to request team's
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
router.get('/coc/:id', (req, res) => {
    Team.find({  coc: req.params.id }).populate('coc').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/team:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: members
 *         description: Array of user short ID
 *         in: body
 *         required: true
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *       - name: coc
 *         description: Particular CoC Object's ID
 *         in: formData
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: technology
*/
router.post('/', (req, res) => {
    Team.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/team/{id}:
 *   put:
 *     description: Use to update a team
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular team Object's ID
 *         in: path	 
 *         required: true
 *         type: string
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: members
 *         description: Array of user short ID
 *         in: body
 *         required: true
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *       - name: coc
 *         description: Particular CoC Object's ID
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A successful response
*/
router.put('/:id', (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

/**
 * @swagger
 * /api/team/{id}:
 *  delete:
 *    description: Use to delete a team
 *    parameters:
 *       - name: id
 *         description: Particular team Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', (req, res) => {
    Team.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;