const db = require('./db')
const express = require('express')
const utils = require('./utils')

const router = express.Router()

router.get('/',(request,response) =>{
    const connection = db.connect()
    const statement = `select * from comments`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.post('/',(request,reponse) =>{
    const{User_id,book_id,content} = request.body
    const connection = db.connect()
    const statement = `insert into comments(User_id,book_id,content) values('${User_id}','${book_id}','${content}')`
    connection.query(statement,(error,data) =>{
        connection.end()
        reponse.send(utils.createResult(error,data))
    })
})

router.delete('/:id',(request,response)=>{
    const{id} = request.params
    const connection = db.connect()
    const statement = `delete from  comments where comment_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})

module.exports = router