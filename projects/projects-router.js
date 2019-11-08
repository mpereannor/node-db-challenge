const express = require('express');
const Projects = require('./projects-model');

const routerResource = express.Router();
const routerProject = express.Router();
const routerTask = express.Router();

//resource endpoints

routerResource.get('/', (req, res) => { 
    Projects.getResources()
    .then(resource => { 
        res.json(resource);
    })
    .catch(error => { 
        res.status(500).json(
            'failed to get resoures ' + 
            error.message
        )
    })
})

routerResource.post('/', (req, res) => {
    const resourceData = req.body;

    Projects.addResources(resourceData)
    .then(newResourceEntry => { 
        res.status(201).json(newResourceEntry);
    })
    .catch( error => { 
        res.status(500).json('failed to add resource' + error.message)
    })
})


//project endpoints

routerProject.get('/', (req, res) => { 
    Projects.getProjects()
    .then(project => {

      /*Your promise should resolve to an array of task/project objects. Map over the array and apply the ‘if completed === 0... false, etc etc’ logic on the completed property of each object 
    */
     projectR = project.map(com => {
         com.complete === 0
         ?
         com.complete = false
         :
         com.complete = true
     }) 
        res.json(projectR);
        // res.json(project);

    })
    .catch(error => { 
        res.status(500).json(
            'failed to get projects ' + 
            error.message
        )
    })
})

routerProject.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.addProjects(projectData)
    .then(newProjectEntry => { 
        res.status(201).json(newProjectEntry);
    })
    .catch( error => { 
        res.status(500).json('failed to add projects' + error.message)
    })
})

//tasks endpoints

routerTask.get('/', (req, res) => { 
    Projects.getTasks()
    .then(task => { 
        res.json(task);
    })
    .catch(error => { 
        res.status(500).json(
            'failed to get resoures ' + 
            error.message
        )
    })
})

//module.exports = router;
module.exports = { 
    routerResource, 
    routerProject,
    routerTask,

};