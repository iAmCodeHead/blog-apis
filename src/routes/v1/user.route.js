const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validators/user.validate');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
    // .route('/')
    .get('/:userId', validate(userValidation.getUser), userController.getUser)
    .post('/create', validate(userValidation.createUser), userController.createUser)
    // .post('/login', validate(userValidation.signinUser), userController.signinUser)

module.exports = router;
