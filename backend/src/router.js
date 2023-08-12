const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddlewares = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddlewares.validateTitle,tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', 
  tasksMiddlewares.validateTitle,
  tasksMiddlewares.validateStatus,
  tasksController.updateTask
);

module.exports = router;