const shortlistController = require('../controllers').shortlist
const authController = require('../controllers').auth

const createRoutes = (app, passport) => {
  const isAuthenticated = passport.authenticate('jwt', { session: false })

  app.get('/api/shortlists', isAuthenticated, shortlistController.list)
  app.post('/api/shortlist', isAuthenticated, shortlistController.create)

  app.post('/logout', authController.logout)
  app.post('/signup', authController.signup)
  app.post('/login', authController.login)

  app.post('/token', (req, res, next) => {
    authController.generateToken(req, res, next, passport)
  })
}

module.exports = createRoutes
