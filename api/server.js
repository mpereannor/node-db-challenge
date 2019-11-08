const express = require ('express');

const helmet = require('helmet');

const ProjectRouter = require('../projects/projects-router');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/resources', ProjectRouter.routerResource);
server.use('/api/projects', ProjectRouter.routerProject);
server.use('/api/tasks', ProjectRouter.routerTask);



module.exports = server;