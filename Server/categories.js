const db = require('./db')
const express = require('express')
const utils = require('./utils')

const router = express.Router()

router.post('/',(request,response) =>{
    const{category_title} = request.body
    const connection = db.connect()
    const statement = `select * from categories where category_title = '${category_title}'`
    connection.query(statement,(error,data) =>{
        console.log(error)
        console.log(data)
        if(data.length == 0)
        {
            const statement = `insert into categories(category_title) values('${category_title}')`
            connection.query(statement,(error,data) =>{
                connection.end()
                response.send(utils.createResult(error,data))
            
            })
        }else{
        connection.end()
        response.send(utils.createResult('Category  already exits',null))
        }
    })
})

router.get('/',(request,response) =>{
    const connection = db.connect()
    const statement = `select * from categories`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
    })

})

router.delete('/:id',(request,response) =>{
    const{id} = request.params
    const connection = db.connect()

    const statement = `delete from categories where category_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})

router.get('/details/:id',(request,response) =>{
    const{id} = request.params
    const connection = db.connect()

    const statement = `select * from categories where category_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })

})

router.put('/:id',(request,response) =>{
    const{id} = request.params
    const{category_title} = request.body
    const connection = db.connect()
    const statement = `update categories set category_title = '${category_title}' where category_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
        console.log(error)
    })
})

module.exports = router