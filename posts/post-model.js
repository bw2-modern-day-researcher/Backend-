

const db = require('../dbConfig')

module.exports = {
    getPost,
    add,
    getBy,
    getById,
    remove
};

function getPost() {
    return db('post');
}


function getById(id) {
    return db('post').where({ id }).first()
}


function getBy(filter) {
    return db('post').where(filter).first()
}


function add(post) {
    return db('post')
    .insert(post)
    .then(ids => {
        return getById(ids[0])
    })
}


function remove(id) {
    return db('post')
      .where('id', id)
      .del();
  }
