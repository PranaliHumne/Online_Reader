const db = require('./db')
const express = require('express')
const utils = require('./utils')

const router = express.Router()

router.get('/:id',(request,response) =>{
    const {id} = request.params
    const connection = db.connect()
    const statement = `select * from likes where book_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))

    })

})

router.post('/likes/:id',(request,response) =>{
    const {id} = request.params
    const connection = db.connect()
   // const statement = `select l.like_count,l.book_id,b.book_id from likes l inner join books b on l.book_id = ${id} AND b.book_id = ${id};`
    var like
   const statement = `select like_count from likes where book_id = ${id}`
   console.log(statement)
    connection.query(statement,(error,likes) =>{
        if(error=null){
            like = likes[0].like_count + 1
            const updateStatement = `update likes set like_count=${like} where book_id=${id}`
            console.log(like)
            connection.query(updateStatement,(error,likes) =>{
                console.log(updateStatement)
                connection.end
                response.send(likes)
            })
        }
        else {
            const insertStatement = `insert into likes values(${id},1)`
            connection.query(insertStatement,(error,likes) =>{
                console.log(insertStatement)
                connection.end
                response.send(likes)
            })
        }
        
   })

 
  
})
        
module.exports = router

