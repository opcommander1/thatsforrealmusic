let host = 'mysql.op1commander.com'
let user = 'op1commander'
let password = 'fleetofficer50'
let database = 'forrealmusic'

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