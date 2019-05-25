let con = require('../modules/config')
let bcrypt = require('bcrypt')
const saltRounds = 10;

// con.connect((err) => {
  module.exports = {
    async signup (req, res) {
      let data = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.username,
        req.body.password
      ]

     try {
      con.query("SELECT email FROM Signup WHERE email = ?", [data[2]], (err, result, fields) => {
         console.log(result)
         if (result.length > 0) {
          res.status(400).send({
            err: 'This email account is already in use.'
          })
        } else {
          bcrypt.hash(data[4], saltRounds, function(err, hash){
            con.query('INSERT INTO Signup (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)', [data[0], data[1], data[2], data[3], hash],
          (err, fields) => { 
            if(err) throw error
            console.log("1 record added")
            res.send(JSON.stringify(data))
         })
        })
        }
      })
     } catch (error) {
      if (error) throw error
     }
  },
  async login (req, res) {
    let loginData = [
      req.body.username,
      req.body.password
    ]

    try {
      await con.query("SELECT username, password FROM Signup WHERE username = ? AND password = ?", [loginData[0], loginData[1]], (err, result, fields) => { 
        console.log(result)
        if(result.length == 0) {
          res.status(403).send({
            err: 'The login information was incorrect'
          })
        } else {
          res.send(JSON.stringify(result))
        }
      })
    } catch (err) {
      res.status(500).send({
        err: 'An error has occured trying to login'
      })
    }
  }
}
// })