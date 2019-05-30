const AuthorizationController = require('../controller/AuthorizationController')
const SignupControllerPolicy = require('../policies/SignupControllerPolicy')
let passport = require('passport')

module.exports = (app) => {
  app.post('/signup', SignupControllerPolicy.signup, 
  AuthorizationController.signup)

  app.post('/login', AuthorizationController.login)
  app.get('/home', AuthorizationController.home) 
}