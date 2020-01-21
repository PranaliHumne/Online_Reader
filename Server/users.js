const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/',(request,response)=>{
    const connection = db.connect()
    const statement = `select * from users`
    connection.query(statement,(error,data)=>{
        connection.end()
        const users = []
        for(let index = 0; index < data.length; index++)
        {
            const user = data[index]
            users.push({
                User_id: user['User_id'],
                User_name: user['User_name'],
                email: user['email'],
                full_name : user['full_name']
            })
        }
        response.send(utils.createResult(error,users))
    })
})

router.post('/register',(request,response)=>{
    const{full_name,User_name,email,password} = request.body 
    const encryptedPassword = ''+cryptoJs.MD5(password)
    const connection = db.connect()

    const statement = `select * from users where email = '${email}'`
    connection.query(statement,(error,users)=>{
        if(users.length == 0){
            const statement = `insert into users(full_name,User_name,email,password) values('${full_name}','${User_name}','${email}','${encryptedPassword}')`
            connection.query(statement,(error,data)=>{
                connection.end()
                console.log(error);
                response.send(utils.createResult(error,data))
            })
        }
        else{
            console.log(error);
            connection.end()
            response.send(utils.createResult('email exits, please use another email',null))
        }
    })
})

router.post('/login',(request,response)=>{
    const{User_name,password} = request.body
    const encryptedPassword = cryptoJs.MD5(password)
    const connection = db.connect()
    console.log(request.body)
    const statement = `select * from users where User_name = '${User_name}' and password = '${encryptedPassword}'`
    connection.query(statement,(error,users)=>{
        connection.end()
        console.log(statement)
        console.log(error)
        if(users.length == 0)
        {
            response.send(utils.createResult('user does not exits'))
        }
        else{
            const user = users[0]
            const info ={
                User_name:user['User_name'],
                email: user['email'],
                User_id: user['User_id']
            }
            response.send(utils.createResult(null,info))
        }
    })
})

router.delete('/:id',(request,response) =>{
    const {id} = request.params
    const connection = db.connect()
    const statement = `delete from users where User_id = ${id}`
    connection.query(statement,(error,data) =>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


module.exports = router