const {Router} = require('express')
const loginController = require('../controllers/user/login.controller')
const app = Router();

app.post('/login',loginController.login)

module.exports = app