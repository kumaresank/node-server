'use strict'
const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer  = require('multer');
const async = require('async');
const request = require('request');
const upload = multer({ dest: 'uploads/' });

/**
 * @swagger
 * /api/upload:
 *   post:
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: configFile
 *         description: Upload the config file
 *         in: formData
 *         type: file
 *       - name: url
 *         description: Remote URI of the config file
 *         in: formData
 *         type: string
 *     responses:
 *       200:
 *        description: A successful response
*/
router.post('/', upload.single('configFile'), (req, res) => {
    if(req.file) {
        const file = req.file;
        fs.readFile(file.path,'utf8',(err,data)=>{
            if (err) {
                res.send(error);
              }
            const jsonData = JSON.parse(data);
            const dependencies = jsonData.dependencies;
            const functionArray = Object.keys(dependencies).map((opt) => { 
                return (callback) => getApi(opt, callback); 
            });
            let getApi = function (opt, callback) {
                request(`https://api.npms.io/v2/package/${opt}`, (err, response, body) => {
                    const rsp = JSON.parse(body);
                    const custom = { 
                            pkg:opt,
                            licence: rsp.collected.metadata.license,
                            link: rsp.collected.metadata.links.homepage,
                            version:dependencies[opt]
                    };
                    callback(err, custom);
                });
            };
            async.parallel(
                functionArray, (err, results) => {
                    if (err) {
                        console.error('Error: ', err);
                    } else {
                        res.json(results);
                    }
                }
            );
        });
    } else if(req.body.url) {
        request.get(req.body.url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const jsonData = JSON.parse(body);
            const dependencies = jsonData.dependencies;
            const functionArray = Object.keys(dependencies).map((opt) => { 
                return (callback) => getApi(opt, callback); 
            });
            let getApi = function (opt, callback) {
                request(`https://api.npms.io/v2/package/${opt}`, (err, response, body) => {
                    const rsp = JSON.parse(body);
                    const custom = { 
                            pkg:opt,
                            licence: rsp.collected.metadata.license,
                            link: rsp.collected.metadata.links.homepage,
                            version:dependencies[opt]
                    };
                    callback(err, custom);
                });
            };
            async.parallel(
                functionArray, (err, results) => {
                    if (err) {
                        console.error('Error: ', err);
                    } else {
                        res.json(results);
                    }
                }
            );
        }
});
    }
});

module.exports = router;