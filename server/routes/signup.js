const SignupController = require('../controller/SignupController')
const SignupControllerPolicy = require('../policies/SignupControllerPolicy')

module.exports = (app) => {
  app.post('/signup', SignupControllerPolicy.signup, 
  SignupController.signup)
}