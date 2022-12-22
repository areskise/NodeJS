const express = require('express');

const controllers = require('../controllers/user');
const { validateLogin, validateSignup } = require('../middlewares/validate');

const router = express.Router();

router.get('/users', controllers.getAllData);

router.get('/users/:id', controllers.getDetailData);

router.post('/users/signin', validateLogin, controllers.postSignIn);

router.post('/users/signup', validateSignup, controllers.postSignUp);

router.post('/users/logout', controllers.postLogOut);

module.exports = router;