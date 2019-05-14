const findAll = async (connection) => {
    return await connection('todo').select('*')
}

const findById= async (connection, id) => {
    const todoItem = await connection('todo').select('*').where('id', id)
    return todoItem.length > 0 ? todoItem[0] : {}
}

const create = async (connection, data) => {
    return await connection('todo').insert({
        description: data.description
    })
}

const update = async (connection,id, data) => {
    return await connection('todo').update({
        status: data.status
    })
    .where('id', id)
}

const remove = async (connection, id) => {
    return await connection('todo').where('id', id).del()
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}