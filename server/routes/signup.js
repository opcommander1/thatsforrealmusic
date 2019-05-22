const SignupController = require('../controller/SignupController')

module.exports = (app) => {
  app.post('/signup', SignupController.signup)
}