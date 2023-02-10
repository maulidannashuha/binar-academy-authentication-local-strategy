const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
const PORT = 3000

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use(session({
    secret: 'Buat ini jadi rahasia',
    resave: false,
    saveUninitialized: false
}))

const passport = require('./lib/passport')
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

const router = require('./router')
app.use(router)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})