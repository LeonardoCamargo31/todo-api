const express=require('express')
const cors = require('cors')
const bodyParser=require('body-parser')
const app = express()
const port = process.env.PORT || 3001

const bdLocalhost = {
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: '',
    database: 'todo'
}

const dbProduction = {
    host: 'den1.mysql6.gear.host',
    user: 'todolistapi',
    password: 'Mc727v_8R?Jq',
    database: 'todolistapi'
    
}

const knex = require('knex')({
    //passamos um obj de configuração ao knex
    client: 'mysql2',
    connection: dbProduction
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const todo = require('./routes/todo')



app.use('/todo', todo(knex))


app.listen(port,()=>{
    console.log('Server running in port ' + port)
})