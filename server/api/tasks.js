const router = require('express').Router();
const { Task } = require('../db/index');

//matches GET requests to '/api/tasks/' to view ALL TASKS
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (error) {
    next(error);
  }
});

//matches GET requests to '/api/tasks/:taskId' to view a SINGLE TASK
router.get('/:taskId', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId);
    res.send(task);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
