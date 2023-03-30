const router = require('express').Router();
const { Project } = require('../db/index');

//matches GET requests to '/api/projects/' to view ALL PROJECTS
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (error) {
    next(error);
  }
});

//matches GET requests to '/api/projects/:projectId' to view a SINGLE PROJECT
router.get('/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    res.send(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
