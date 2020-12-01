'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require('swagger-jsdoc')
const project = require('./routes/project');
const department = require('./routes/department');
const category = require('./routes/category');
const technology = require('./routes/technology');
const coc = require('./routes/coc');
const team = require('./routes/team');
const version = require('./routes/version');
const projectTech = require('./routes/projectTech');
const upload = require('./routes/upload');
const consolidate = require('./routes/consolidate');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = require('bluebird');
const mongoUri = 'mongodb://localhost:27017/hackit-atp';
mongoose.connect(mongoUri,{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: '1.0.0',
        title: 'ATP API End points',
        description: 'ATP API Documentation',
        contact: {
          name: 'JS_NINJAS Team'
        },
      }
    },
    apis: ['./routes/*.js'],
};
  
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/project', project);
app.use('/api/department', department);
app.use('/api/category', category);
app.use('/api/technology', technology);
app.use('/api/coc', coc);
app.use('/api/team', team);
app.use('/api/version', version);
app.use('/api/projectTech', projectTech);
app.use('/api/upload', upload);
app.use('/api/consolidate', consolidate);

app.use('/',(req,res)=>{
    res.send('ATP API Server is Up and Running...');
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});