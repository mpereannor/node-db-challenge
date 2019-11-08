const express = require ('express');

const helmet = require('helmet');

//const ProjectRouter = require('../projects/projects-router');
const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/projects', ProjectRouter)
server.get('/', (req, res) => {
    res.send(`<h2 spring challenge</h2>`)
})

module.exports = server;