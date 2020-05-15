const Projects = require('../data/dbConfig.js');

module.exports={
    getResources,
    addResource,
    findResourceById,
    addProject,
    getProjects,
    findProjectById,
    addTask,
    findTasks
}

function findResourceById(id){
    return Projects('resources')
            .where({id})
            .first();
}
function findProjectById(id){
    return Projects('projects')
            .where({id})
            .first();
}
function findTasks(id){
    return Projects('tasks as t')
        .where('project_id', id)
        .join('projects as p', 'p.id', '=', 't.project_id')
        .select('p.project_name', 'p.project_description', 't.task_description', 't.task_notes', 't.task_complete')
}
function addResource(resource){
    return Projects('resources')
            .insert(resource, 'id')
            .then(id => {
                return findResourceById(id[0])
            })
}
function getResources(){
    return Projects('resources')
}
function addProject(project){
    return Projects('projects')
            .insert(project, 'id')
            .then(id => {
                return findProjectById(id[0])
            })
}
function getProjects(){
    return Projects('projects')
}
function addTask(taskData, id){
    const newTask={project_id: id, task_description: taskData.task_description, task_notes: taskData.task_notes, task_complete: taskData.task_complete}
    return Projects('tasks')
            .insert(newTask, 'id')
            .then(taskid => {
                return findTasks(id)
            })
            .catch(error => {
                console.log(error)
            })
        }
