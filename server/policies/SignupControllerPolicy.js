const Joi = require('@hapi/joi')

module.exports = {
  signup (req, res, next) {
    //schema to set input field validation
    const schema = {
      first_name: Joi.string(),
      last_name: Joi.string(),
      username: Joi.string().alphanum(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(/^[a-zA-Z0-9]{8,32}$/)
      )
    }
    const {error, value} = Joi.validate(req.body, schema)
    //check if email and password has error
    if (error) {
      switch (error.details[0].context.key) {
        case 'first_name':
        //if first_name not valid error will display
            res.status(400).send({
              err: `<br>Must provide first name`
            })
            break
        //if last_name not valid error will display
        case 'last_name':
            res.status(400).send({
              err: `<br>Must provide last name`
            })
            break   
        //if username not valid error will display
        case 'username':
            res.status(400).send({
              err: `<br>Must provide a username`
            })
            break
        //if email not valid error will display
        case 'email':
            res.status(400).send({
              err: `<br>You must provide a valid email address.`
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
              err: `<br>Signup Information not valid.`
            })
      }
    } else {
      next()
    }
  }
}