const express = require('express')
let con = require('./modules/config')
let db = require('./modules/db')
const bodyParser = require('body-parser')
const cors = require('cors')
let LocalStrategy = require("passport-local")



//integrate express engine, cors and bodyparser and authentication 
const app = express()
app.use(bodyParser.json())
app.use(cors())
let passport = require('passport')


passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username)
    console.log(password)
    return done(null, 'false')
  }
));

//intializing passport for user athenication
app.use(passport.initialize());


//require routes shortcut
require('./routes/signup')(app)

//Server setup
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at ${port}`));

