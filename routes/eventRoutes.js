const express = require('express');
const controller = require('../controllers/eventController');
const fileUpload = require('../middleware/fileUpload');
const eventRouter = express.Router();

//GET /events: send all events to the user
eventRouter.get('/', controller.index);

//GET /events/new: send html form for creating a new event
eventRouter.get('/new', controller.new);

// POST /events: create a new event
eventRouter.post('/', controller.create);

//GET /events/:id: send details of event identified by id
eventRouter.get('/:id', controller.show);

//GET /events/:id/edit: send html form for editing event identified by id
eventRouter.get('/:id/edit', controller.edit);

//PUT /events/:id: update the event id after editing 
eventRouter.put('/:id', controller.update);

//DELETE /events/:id: delete the event identified by id
eventRouter.delete('/:id', controller.delete);

module.exports = eventRouter;