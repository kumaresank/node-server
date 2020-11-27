'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const project = require('./routes/project');
const department = require('./routes/department');
const category = require('./routes/category');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = require('bluebird');
const mongoUri = 'mongodb://localhost:27017/hackit-atp';
mongoose.connect(mongoUri,{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/',(req,res)=>{
    res.send('ATP API Server is Up and Running...');
});
app.use('/api/project', project);
app.use('/api/department', department);
app.use('/api/category', category);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});