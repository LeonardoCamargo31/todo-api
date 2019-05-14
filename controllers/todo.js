const todo = require('../models/todo')

const index = async (connection, req, res) => {
    const result = await todo.findAll(connection)
    return res.send({ result })
}

const create = async (connection, req, res) => {
    const { description } = req.body
    const result = await todo.create(connection, { description })
    return res.send({ result })
}

const update = async (connection, req, res) => {
    let { status } = req.body

    status = status == '1' ? 0 : 1

    const result = await todo.update(connection, req.params.id, { status })
    return res.send({ result })
}

const remove = async (connection, req, res) => {
    const result = await todo.remove(connection, req.params.id)
    return res.send({ result })
}

module.exports = {
    index,
    create,
    update,
    remove
}