const jwt = require('jsonwebtoken')
function authenticate(req, res, next) {
  try {
    // console.log(req.headers)
    let decoded = jwt.verify(req.headers.token, process.env.SECRET)
    console.log(decoded)
    req.auth = decoded
    next()
  } catch {
    res.status(401).json({message: 'Harus authenticated user'})
  }
}

module.exports = authenticate