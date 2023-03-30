const router = require('express').Router();
const { User } = require('../db/index');

//matches GET requests to '/api/users/' to VIEW ALL USERS
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

//matches GET requests to '/api/users/:userId' to VIEW A SINGLE USER
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
