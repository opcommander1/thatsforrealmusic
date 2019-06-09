const Joi = require('@hapi/joi')

module.exports = {
  updatepassword (req, res, next) {
    const schema = {
      username: Joi.string(),
      password: Joi.string().regex(
        new RegExp(/^[a-zA-Z0-9]{8,32}$/)
      )
    }
    const {error, value} = Joi.validate({username: req.body.username, password: req.body.password}, schema)

    if (error) {
      //if password not valid, error will display 
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            err: `username cannot be empty`
          })
          break
          //if password not valid, error will display 
        case 'password':
          res.status(400).send({
            err: `<br>The password failed to match the following rules.
            <br>
            1. It must contain Only the following characters: lower case, upper case or numeric.
            <br>
            2. It must contain at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
          default:
            //any other errors
            res.status(400).send({
              err: `<br>Password Information not valid.`
            })
      }
    } else {
      next()
    }
  }
}