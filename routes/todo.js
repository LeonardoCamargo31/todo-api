const express = require('express')
const todoController = require('../controllers/todo')


const todoRouter = (connection) =>{
    const router= express.Router()

    router.get('/',todoController.index.bind(null,connection))

    router.post('/',todoController.create.bind(null,connection))

    router.put('/:id',todoController.update.bind(null,connection))

    router.delete('/:id',todoController.remove.bind(null,connection))

    return router
}

module.exports = todoRouter