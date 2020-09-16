
exports.up = function(knex) {
  return knex.schema
    .createTable("prompts", function (table) {
      table.increments("id").primary();
      table.string("prompt");
      table.string("genre");
    })
    .createTable("stories", function (table) {
      table.increments("id").primary();
      table.string("title");
      table.string("story");
      table.integer("prompt");
      table.foreign("prompt").references("prompts.id");
      table.timestamps(true, true);
    })
    .createTable("authors", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("password");
      table.timestamps(true, true);
    })
    .createTable("story_authors", function (table) {
      table.integer("story_id");
      table.foreign("story_id").references("stories.id");
      table.integer("author_id");
      table.foreign("author_id").references("authors.id");
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('story_authors')
    .dropTable('prompts')
    .dropTable('authors')
    .dropTable('stories')
};

