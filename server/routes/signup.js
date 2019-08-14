const AuthorizationController = require('../controller/AuthorizationController')
const SignupControllerPolicy = require('../policies/SignupControllerPolicy')
const PasswordResetPolicy = require('../policies/PasswordResetPolicy')


module.exports = (app) => {
  app.post('/signup', SignupControllerPolicy.signup, 
  AuthorizationController.signup)
  app.post('/login', AuthorizationController.login)
  app.put('/passwordreset', PasswordResetPolicy.updatepassword,   AuthorizationController.updatepassword)
}