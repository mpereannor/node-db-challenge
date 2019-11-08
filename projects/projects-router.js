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

    Projects.addResources()
    .insert(resourceData)
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
        res.json(project);
    })
    .catch(error => { 
        res.status(500).json(
            'failed to get resoures ' + 
            error.message
        )
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