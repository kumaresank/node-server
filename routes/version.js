'use strict'
const express = require('express');
const router = express.Router();
const Version = require('../models/Version');

/**
 * @swagger
 * /api/version:
 *  get:
 *    description: Use to request all version
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    Version.find({}).populate('technology').then((response)=>{
       res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/version/{id}:
 *  get:
 *    description: Use to request a version
 *    parameters:
 *       - name: id
 *         description: Particular Version Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', (req, res) => {
    Version.findOne({  _id: req.params.id }).populate('technology').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/version/technology/{id}:
 *  get:
 *    description: Use to request version's
 *    parameters:
 *       - name: id
 *         description: Particular Technology Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/technology/:id', (req, res) => {
    Version.find({  technology: req.params.id }).populate('technology').then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/version:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: versionNo
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: type
 *         in: formData
 *         required: true
 *         type: string
 *       - name: technology
 *         description: Particular Technology Object's ID
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: technology
*/
router.post('/', (req, res) => {
    Version.create(req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/version/{id}:
 *   put:
 *     description: Use to update a Stack
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular version Object's ID
 *         in: path	 
 *         required: true
 *         type: string
 *       - name: versionNo
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: type
 *         in: formData
 *         required: true
 *         type: string
 *       - name: technology
 *         description: Particular Technology Object's ID
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: coc
*/
router.put('/:id', (req, res) => {
    Version.findOneAndUpdate({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

/**
 * @swagger
 * /api/version/{id}:
 *  delete:
 *    description: Use to delete a version
 *    parameters:
 *       - name: id
 *         description: Particular version Object's ID
 *         in: path
 *         required: true
 *         type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', (req, res) => {
    Version.deleteOne({ _id: req.params.id }, req.body).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });
});

module.exports = router;