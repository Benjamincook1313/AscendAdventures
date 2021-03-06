require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
const Ctrl = require('./Controllers/Ctrl')
const AuthCtrl = require('./Controllers/AuthCtrl')

const{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db is Connected')
  app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT}`))
})

app.use(express.json())
// app.use( express.static( `${__dirname}/../build` ) )
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookies: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

app.post()
app.get()
app.put()
app.delete()