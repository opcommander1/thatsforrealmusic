let con = require('../modules/config')

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
      con.query("SELECT email FROM Signup WHERE email = ?", [req.body.email], (err, result, fields) => {
         console.log(result)
         if (result.length > 0) {
          res.status(400).send({
            err: 'This email account is already in use.'
          })
        } else {
          con.query('INSERT INTO Signup (first_name, last_name, email, username, password) VALUES (?)', [data],
         (err, fields) => { 
          if(err) throw error
          console.log("1 record added")
          res.send(JSON.stringify(data))
         })
        }
      })
     } catch (error) {
      if (error) throw error
     }

    //   try {
    //     con.query("SELECT email FROM Signup WHERE email = ?", [req.body.email], (err, result, fields) => {
    //       console.log(result)
    //       if (result){
    //         res.send({
    //           error: 'This email account is already in used'
    //         })
    //       }
    //     })
    //     con.query('INSERT INTO Signup (first_name, last_name, email, username, password) VALUES (?)', [data],
    //      function(err, fields){ 
    //       //  res.status(400).send({
    //       //   err: 'This email account is already in use.'
    //       //  })
    //       console.log("1 record added")
    //       res.send(JSON.stringify(data))
    //      })
    //   } catch (err) {
    //     res.status(400).send({
    //       error: 'This email account is already in use.'
    //     })
    //   }
    // }
  }
}
// })