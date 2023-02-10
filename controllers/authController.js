const {User} = require('../models')
const passport = require('../lib/passport')

module.exports = {
    registerForm: (req, res) => {
        res.render('register')
    },
    register: (req, res, next) => {
        User.register(req.body).then(() => {
            res.redirect('/login')
        }).catch(err => {
            next(err)
        })
    },
    loginForm: (req, res) => {
        console.log('login form')
        res.render('login')
    },
    login: (req, res) => {
        return passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })
    }
}