const router = require('express').Router();
const authController = require('./controllers/authController');
const homeController = require('./controllers/homeController');

router.get('/', homeController.index);
router.get('/register', authController.registerForm);
router.post('/register', authController.register);

router.get('/login', authController.loginForm)
router.post('/login', authController.login)

module.exports = router