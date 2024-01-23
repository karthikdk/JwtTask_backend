const express=require('express')
const cors=require('cors')
const configureDb = require('./configure/db')
const app=express()

app.use(cors())
app.use(express.json())

configureDb()

const port=3399

app.listen(port, () => {
    console.log("server connected on port", port)
})