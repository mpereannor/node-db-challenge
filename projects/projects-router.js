const express = require('express');
const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => { 
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
module.exports = router;
