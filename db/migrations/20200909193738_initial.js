
exports.up = function(knex) {
  return knex.schema
    .createTable('stories', function(table) {
      table.increments('id').primary()
      table.string('title')
      table.string('story')
      table.string('prompt')
      table.timestamps(true, true)
    })
    .createTable('prompts', function(table) {
      table.increments('id').primary()
      table.string('prompt')
      table.string('genre')      
    })
    .createTable('authors', function(table) {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.timestamps(true, true)
    })
    .createTable('story_authors', function(table) {
      table.foreign('story_id')
      table.foreign('author_id')
      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('stories')
    .dropTable('prompts')
    .dropTable('authors')
    .dropTable('story_authors')
};

