const express = require('express');
const helmet = require('helmet');
const ProjectsRouter = rqeuire('../projects/projects-router.js');
const server = express();
server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectsRouter);

module.exports = server;

