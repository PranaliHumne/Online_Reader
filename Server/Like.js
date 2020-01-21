const db = require('./db')
const express = require('express')
const utils = require('./utils')

const router = express.Router()

router.get('/',(request,response) =>{
    const connection = db.connect()
    const statement = `select * from likes`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))

    })

})

router.post('/likes/:id',(request,response) =>{
    const {id} = request.params
    const connection = db.connect()
   // const statement = `select l.like_count,l.book_id,b.book_id from likes l inner join books b on l.book_id = ${id} AND b.book_id = ${id};`

   const statement = `select likes.*,books.book_id from likes, books where books.book_id = ${id} and likes.book_id = ${id}`

    connection.query(statement,(error,likes) =>{
        if(likes.length == 1){
           const statement = `update likes,books set like_count = like_count + 1 where likes.book_id = ${id}` 
           connection.query(statement,(error,likes) =>{
                connection.end()
                console.log(error);
                response.send(utils.createResult(error,likes)) })
           }
        else
        {
            const statement = `select * from books where book_id = ${id}`
            console.log(statement)
            connection.query(statement,(error,data) =>{
                if(data.length == 1)
                {
                    const statement = `insert into likes(book_id,like_count) values(${id},1)`
                    connection.query(statement,(error,data) =>{
                        connection.end()
                        console.log(error)
                        response.send(utils.createResult(error,data))
                    })
                }else{
                    console.log('das')
                    connection.end()
                    response.send(utils.createResult('book does not exits',null))
                }

            })

        }
    })

})

module.exports = router

