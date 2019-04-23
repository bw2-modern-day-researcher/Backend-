

const db = require('../dbConfig')

module.exports = {
    getPost,
    add,
    getBy,
    getByUsername,
    remove
};

function getPost() {
    return db('post');
}


function getByUsername(username) {
    return db('post').where({ username })
}

function getById(id) {
    return db('post').where({ id })
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
