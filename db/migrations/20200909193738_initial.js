
exports.up = function(knex) {
  return knex.schema
    .createTable('stories', function(table) {
      table.increments('id').primary()
      // table.string('title')
      // // table.array('story')
      // table.string('prompt')

      table.timestamps(true, true)
    })
    .createTable('prompts', function(table) {
      table.increments('id').primary()
      // table.string('note')
      // table.integer('paper_id').unsigned()
      // table.foreign('paper_id')
      // .references('papers.id')

      table.timestamps(true, true)
    })
    .createTable('authors', function(table) {
      table.increments('id').primary()
      table.timestamps(true, true)
    })
    .createTable('written_by', function(table) {
      table.increments('id').primary()
      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('footnotes')
    .dropTable('papers')
};

