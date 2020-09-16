
exports.up = function(knex) {
  // return knex.schema
  //   .dropTable('story_authors')
};

exports.down = function(knex) {
  // return knex.schema
  //   .createTable("story_authors", function (table) {
  //     // table.integer("story_id");
  //     // table.foreign("story_id").references("stories.id");
  //     // table.integer("author_id");
  //     // table.foreign("author_id").references("authors.id");
  //     // table.timestamps(true, true);
  //   })
  return knex.schema
    .createTable('prompts', function(table) {})
    .createTable('authors', function(table) {})
    .createTable('stories', function(table) {})
};
