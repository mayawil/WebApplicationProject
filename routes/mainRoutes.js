const express = require('express');
const controller = require('../controllers/mainController');

const mainRouter = express.Router();

//GET /contact: send the contact page
mainRouter.get('/contact', controller.contact);

//GET /about: send the about page
mainRouter.get('/about', controller.about);

//GET /error: send the error page
mainRouter.get('/error', controller.error);


module.exports = mainRouter;