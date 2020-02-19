const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')
const multer = require('multer')
const upload = multer({ dest: 'profilePhoto/'})


const router = express.Router()

router.put('/editProfile/:id',upload.single('thumbnail'),(request,response) =>{
    const{id} = request.params
    const{User_name,email,full_name} = request.body
        console.log(request.body)
        const thumbnail = request.file.filename
        const connection = db.connect()
    const statement = `update users set User_name = '${User_name}', email = '${email}',full_name = '${full_name}',thumbnail = '${thumbnail}' where User_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})        


module.exports = router