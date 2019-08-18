let mysql = require('mysql')

let conPool = mysql.createPool({
  connectionLimit: 10,
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'be0d3552fd5dc7',
  password: '1699e848',
  database: 'heroku_83a0630020d897f',
  // mysql://be0d3552fd5dc7:1699e848@us-cdbr-iron-east-02.cleardb.net/heroku_83a0630020d897f?reconnect=true
})

conPool.getConnection((err, connection) => {
  if(err) {
    throw err
  } else {
    connection.release()
    console.log('Connected')
  }
})

// conPool.connect((err) => {
//   if(err){
//     throw err
//   }
//   console.log('Connected');
// });
module.exports = conPool