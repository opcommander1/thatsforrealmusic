let con = require('../modules/config')
let bcrypt = require('bcrypt')
let passport = require('passport')
const jwt = require('jsonwebtoken')
let db = require('../modules/db')
let LocalStrategy = require("passport-local")
const saltRounds = 10;

function jwtSignUser(user) {
  return jwt.sign({data: user}, db.authentication.jwtSecret, {
    expiresIn: "1h"
  })
}

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

            con.query('SELECT LAST_INSERT_ID() as user_id', function(err, results, fields){
              if (err) throw err

              const user_id = results[0];

              console.log(results[0])
              req.login(user_id, function(err){
                console.log('Successful log in')
              })
            })
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
      con.query("SELECT id, username, password FROM Signup WHERE username = ?", [loginData[0]], (err, result, fields) => { 
        // console.log(result)
        if(result.length <= 0) {
          res.status(403).send({
            err: 'Username is incorrect'
          })
        } else {
          bcrypt.compare(loginData[1], result[0].password, function(err, results) {
            if(results == true){
              const userJson = (JSON.stringify(result[0]))
              console.log(userJson)
            res.send({
              user: {
                id: result[0].id,
                username: req.body.username,
                password: req.body.password
              },
            token: jwtSignUser(userJson)
          })
            // } else {
            //   console.log('Passwords')
            } else {
              res.status(403).send({
                err: 'Password incorrect'
              })
            }
          })
        }
      })
    } catch (err) {
      res.status(500).send({
        err: 'An error has occured trying to login'
      })
    }
  },
  async home (req, res){
    console.log(req.user)
    console.log(req.isAuthenticated())
  }
}
// })