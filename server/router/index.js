const Router = require('express').Router
const UserController = require('../controller/userController')
const {body} = require('express-validator')
const middlewaresAuth = require('../middlewares/middlewaresAuth')

const router = new Router()

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)
router.get('/users', middlewaresAuth, UserController.getUsers)

module.exports = router