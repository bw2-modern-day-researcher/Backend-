
exports.up = function(knex, Promise) {
    return knex.schema.createTable('post', tbl => {
        tbl.increments()
        tbl.string("title", 128).notNullable()
        tbl.json("category").notNullable()
        tbl.string("link", 128).notNullable()
        tbl.string("imgURL", 128)
        tbl.string("description", 128)
        tbl.string("username", 128)
        tbl.boolean("seen").notNullable()
        tbl.boolean("public").notNullable()
    })
  
  
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('post')
  };

