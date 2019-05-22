const express = require('express');
let con = require('./modules/config')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors())

require('./routes/signup')(app)

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