
require('dotenv').config()

const express = require('express')

const app = express()

const massive = require('massive')

const session = require('express-session')

const authCtrl = require('./controllers/authController')

const { SESSION_SECRET, CONNECTION_STRING, PORT } = process.env

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(PORT, ()=> console.log(`server is up and running on ${PORT}`))
})

