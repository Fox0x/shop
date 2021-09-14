const Router = require('express').Router
const authController = require('../controllers/auth-controller.js')
const authMiddleware = require('../middlewares/auth-middleware.js')

const router = new Router()

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/activate/:link', authController.activate)
router.get('/refresh', authController.refresh)
// router.get('/users', authMiddleware, authController.getAllUsers)

module.exports = router;