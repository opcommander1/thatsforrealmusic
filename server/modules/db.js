let host = 'us-cdbr-iron-east-02.cleardb.net'
let user = 'be0d3552fd5dc7'
let password = '1699e848'
let database = 'heroku_83a0630020d897f'

//database option
module.exports = {
db: {
  host,
  user,
  password,
  database,
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}