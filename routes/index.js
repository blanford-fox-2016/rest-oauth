var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.Users
var controller = require('../controller/controller')
var oauth2 = require('../bin/www')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/token', oauth2.controller.token);


// generate token
router.post('/api/auth', controller.checkLogin)

//read all data
router.get('/api/users', controller.readAllData)

//read one data
router.get('/api/users/:id', controller.readOneData)

//add new user
router.post('/api/users', controller.addData)

//update user
router.put('/api/users/:id', controller.updateData)

router.delete('/api/users/:id', controller.deleteData)



module.exports = router;
