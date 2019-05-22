module.exports = {
  signup (req, res) {
        res.send({
          message: `Hello ${req.body.username}! You have signup`
        })
      }
    }
    