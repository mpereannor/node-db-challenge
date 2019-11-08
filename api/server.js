const express = require ('express');

const helmet = require('helmet');

const ProjectRouter = require('../projects/projects-router');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/resources', ProjectRouter)


module.exports = server;