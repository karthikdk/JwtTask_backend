require('dotenv').config()
const express=require('express')
const cors=require('cors')
const configureDb = require('./configure/db')
const userController = require('./app/controllers/user-controller')
const app=express()

app.use(cors())
app.use(express.json())

configureDb()

const port=3399


//user APIs
app.post('/api/users/register',userController.register)
app.post('/api/users/login',userController.login)
app.post('/api/users/account',userController.show)

app.listen(port, () => {
    console.log("server connected on port", port)
})