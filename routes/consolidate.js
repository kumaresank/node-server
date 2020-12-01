'use strict'
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

/**
 * @swagger
 * /api/consolidate/team/{id}:
 *  get:
 *    description: Use to request technology's by team ID
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
router.get('/team/:id', (req, res) => {
    Project.find({  team: req.params.id }).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});


module.exports = router;