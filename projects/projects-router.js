const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();




// retrieve a list of tasks (GET /api/projects/:id/tasks)

router.post('/resources', (req, res) => {
    // add resources (POST /api/resources)
    const resource = req.body
    Projects.addResource(resource)
        .then(info => {
            res.status(201).json({
                data: info
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error adding resource",
                error
            })
        })
})
router.get('/resources', (req, res) => {
    // retrieve a list of resources (GET /api/resources)
    Projects.getResources()
        .then(resources => {
            res.status(200).json({
                data: resources
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error Retrieving Resources",
                error
            })
        })
})
router.post('/projects', (req, res) => {
    // add projects (POST /api/projects)
    const project = req.body
    Projects.addProject(project)
        .then(info => {
            res.status(201).json({
                data: info
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error adding project",
                error
            })
        })
})
router.get('/projects', (req, res) => {
    // retrieve a list of projects (GET /api/projects)
    Projects.getProjects()
        .then(projects => {
            res.status(200).json({
                data:projects
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "error retrieving projects",
                error
            })
        })
})

router.post('/projects/:id/tasks', (req, res) => {
    // add a task (POST /api/projects/:id/tasks)
    const taskData = req.body
    const proId = req.params.id
    Projects.findProjectById(proId)
        .then(project => {
            if(project){
                Projects.addTask(taskData, proId)
                .then(task => {
                    res.status(201).json(task)
                })
            }else{
                res.status(500).json({
                    errorMessage: "Could not add post"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Could not add tasks",
                error
            })
        })
})

router.get('/projects/:id/tasks', (req, res) => {
    const proId = req.params.id
    Projects.findTasks(proId)
        .then(tasks => {
            res.status(200).json({
                data: tasks
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: 'error retrieveing tasks',
                error
            })
        })
})

router.delete('/projects/:id/tasks/:task_id')

router.delete('/projects/:id', (req, res) => {
    Projects.removeProject(req.params.id)
        .then(project => {
            res.status(200).json({
                status: "deleted successfully",
                deleted: project
            })
        })
})

router.delete('/resources/:id', (req, res) => {
    Projects.removeResource(req.params.id)
        .then(resource => {
            res.status(200).json({
                status: "deleted successfully",
                deleted: resource
            })
        })
})
router.get('/projects/:id', (req, res)=> {
    Projects.getFullProject(req.params.id)
        .then(project => {
            res.status(200).json({
                project
            })
        })
})

module.exports = router;