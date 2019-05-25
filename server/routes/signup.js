const AuthorizationController = require('../controller/AuthorizationController')
const SignupControllerPolicy = require('../policies/SignupControllerPolicy')

module.exports = (app) => {
  app.post('/signup', SignupControllerPolicy.signup, 
  AuthorizationController.signup)

  app.post('/login', AuthorizationController.login)
}