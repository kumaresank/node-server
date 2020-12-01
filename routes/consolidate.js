'use strict'
const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const router = express.Router();
const Project = require('../models/Project');
const Team = require('../models/Team');
const CoC = require('../models/CoC');

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
    Project.find({  team: req.params.id })
    .populate('team')
    .populate(
        { 
            path: 'team',
            populate: {
              path: 'coc',
              model: 'CoCs',
              populate: {
                path: 'department',
                model: 'Departments'
            }
            }
        }
    )
    .populate({path: 'techs.technology'})
    .populate({path: 'techs.version'})
    .then((response)=>{
        res.json(response);
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/consolidate/coc/{id}:
 *  get:
 *    description: Use to request technology's by coc ID
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
    Team.find({  coc: req.params.id }).then((team)=>{
        const teams = _.map(team, '_id');
        Project.find({}).where('team').in(teams)
        .populate('team')
        .populate(
            { 
                path: 'team',
                populate: {
                path: 'coc',
                model: 'CoCs',
                populate: {
                    path: 'department',
                    model: 'Departments'
                }
                }
            }
        )
        .populate({path: 'techs.technology'})
        .populate({path: 'techs.version'})
        .then((response)=>{
            res.json(response);
        }).catch((err)=>{
            res.send(err);
        });
    }).catch((error)=>{
        res.send(error);
    });    
});

/**
 * @swagger
 * /api/consolidate/department/{id}:
 *  get:
 *    description: Use to request technology's by department ID
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
router.get('/department/:id', (req, res) => {
    CoC.find({}).then((coc)=>{
        const cocs = _.map(coc, '_id');
        Team.find({}).where('coc').in(cocs).then((team)=>{
            const teams = _.map(team, '_id');
            Project.find({}).where('team').in(teams)
            .populate('team')
            .populate(
                { 
                    path: 'team',
                    populate: {
                    path: 'coc',
                    model: 'CoCs',
                    populate: {
                        path: 'department',
                        model: 'Departments'
                    }
                    }
                }
            )
            .populate({path: 'techs.technology'})
            .populate({path: 'techs.version'})
            .then((response)=>{
                res.json(response);
            }).catch((error)=>{
                res.send(error);
            });
        }).catch((err)=>{
            res.send(err);
        });
     }).catch((er)=>{
         res.send(er);
     });    
});


module.exports = router;