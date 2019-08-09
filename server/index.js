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
let session = require('express-session')
let passport = require('passport')
let MySQLStore = require('express-mysql-session')(session);

//Datbase options
var options = (db)

//Store option, store sessions and create db schema
let sessionStore = new MySQLStore(options)

//integrate session, in order to keep track of each user session with cookies
app.use(session({
  secret: 'fkekoskelo',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }
}))

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username)
    console.log(password)
    return done(null, 'false')
  }
));

//intializing passport for user athenication for session
app.use(passport.initialize());
app.use(passport.session());

//require routes shortcut
require('./routes/signup')(app)

// Handle production
if(process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA refer to any route
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//Server setup
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at ${port}`));

// con.query("SELECT * FROM Signup", function (err, result, fields){
//   console.log(result);
// })

// var sql = "INSERT INTO Signup (first_name, last_name, email, username, password) VALUES ('Shereal', 'McNeal', 'smcneal@hotmail.com', 'smcneal', 'fleet')";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("record added")
// })