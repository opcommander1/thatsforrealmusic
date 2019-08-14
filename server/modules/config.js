let mysql = require('mysql')

let con = mysql.createConnection({
  host: 'mysql.op1commander.com',
  user: 'op1commander',
  password: 'fleetofficer50',
  database: 'forrealmusic',
})

con.connect((err) => {
  if(err){
    throw err
  }
  console.log('Connected');
});
module.exports = con