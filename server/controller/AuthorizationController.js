let con = require('../modules/config')
let bcrypt = require('bcrypt')
let passport = require('passport')
const jwt = require('jsonwebtoken')
let db = require('../modules/db')
let LocalStrategy = require("passport-local")
const saltRounds = 10;

//Set token 
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
      let queryResult = {
        email: null,
        username: null
      }

     try {
       //check user email in the database and return result
      con.query("SELECT email, username FROM Signup WHERE email = ?OR username = ?", [data[2], data[3]], (err, result, fields) => {
         //console.log(result.length)
         //check to see if result not null
         if (result[0]) {
          queryResult.email = result[0].email 
          queryResult.username = result[0].username
         } 
         //check to if email is unique
         if (queryResult.email === data[2] && queryResult != null) {
          res.status(400).send({
            err: 'This email account is already in use.'
          })
          //check to if username is unique
        } else if (queryResult.username === data[3] && queryResult != null) {
          res.status(400).send({
            err: 'This username is already taken, please choose another'
          })
        } else {
          //encrypt user password and store user hash password
          //in database
          bcrypt.hash(data[4], saltRounds, function(err, hash){
            con.query('INSERT INTO Signup (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)', [data[0], data[1], data[2], data[3], hash],
          (err, fields) => { 
            if(err) throw err

            con.query('SELECT LAST_INSERT_ID() as user_id', function(err, results, fields){
              if (err) throw err

              const user_id = results[0];

              // console.log(results[0])
              req.login(user_id, function(err){
                console.log('Successful')
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
    let queryResult = {
      username: null,
      password: null
    }

    try {
      //check username in the database and return result
      con.query("SELECT id, username, password FROM Signup WHERE username = ?", [loginData[0]], (err, result, fields) => { 
        // console.log(result)
        //check to see if there is results 
        if(result[0]) {
          queryResult.username = result[0].username
          queryResult.password = result[0].password
        }
        //see if result not null
        if(queryResult.username === null) {
          res.status(403).send({
            err: 'Username is incorrect'
          })
          //see if password field not null
        } else if (queryResult.password === null) {
            res.status(403).send({
              err: 'Password is incorrect'
            })
            //add compare password against hash password in the database and send info as a object
        } else if (loginData[1].length > 0){
          bcrypt.compare(loginData[1], result[0].password, function(err, results) {
            if(results == true){
              const userJson = (JSON.stringify(result[0]))
              // console.log(userJson)
            res.send({
              user: {
                id: result[0].id,
                username: req.body.username,
                password: req.body.password
              },
              //assign user a token
            token: jwtSignUser(userJson)
          })
            } else {
              //if password don't match
              res.status(403).send({
                err: 'Password is incorrect'
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

  async updatepassword(req, res){
    let updatedata = [
      req.body.username,
      req.body.password
    ]

    try {
      //search to see if username is in the database
      con.query("SELECT id, username, password FROM Signup WHERE username = ?", [updatedata[0]], (err, result, field) => {
        // console.log(result)
        //check if result are return
        if(result.length <= 0 || "undefined" == result.length){
            res.status(403).send({
            err: 'Username is incorrect'
          })
          //Update user password, add hash before updating the database
        } else if (result.length > 0){
          bcrypt.hash(updatedata[1], saltRounds, function(err, hash){
            con.query("UPDATE Signup SET password = ? WHERE id = ?", [hash, result[0].id], function(err, result){
              if (err) throw err
              res.send({
                msg: "Success"
              })
            })
          })
        }
      })
    } catch (error) {
      //check any error occur
      res.status(500).send({
        err: 'An error has occured trying to update password'
      })
    }
  },
  
}
// })