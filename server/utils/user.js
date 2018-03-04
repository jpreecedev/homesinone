const bcrypt = require('bcrypt-nodejs')

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next()

  res.redirect('/')
}

const generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

const validPassword = (suppliedPassword, storedPassword) => {
  return bcrypt.compareSync(suppliedPassword, storedPassword)
}

module.exports = {
  isLoggedIn,
  generateHash,
  validPassword
}
