const Joi = require('@hapi/joi')

module.exports = {
  signup (req, res, next) {
    const schema = {
      first_name: Joi.string().alphanum(),
      last_name: Joi.string(),
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(/^[a-zA-Z0-9]{8,32}$/)
      )
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            err: `<br>You must provide a valid email address.`
          })
          break
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
            res.status(400).send({
              err: `<br>Signup Information not valid.`
            })
      }
    } else {
      next()
    }
  }
}