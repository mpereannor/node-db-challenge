const express = require ('express');

const helmet = require('helmet');

const Router = require('../projects/projects-router');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/resources', Router.routerResource);
server.use('/api/projects', Router.routerProject);
server.use('/api/tasks', Router.routerTask);

module.exports = server;