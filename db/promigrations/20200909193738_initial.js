exports.up = function (knex) {
  return knex.schema
    .createTable("prompts", function (table) {
      table.increments("id").primary();
      table.string("prompt");
      table.string("genre");
    })
    .createTable("stories", function (table) {
      table.increments("id").primary();
      table.string("title");
      table.specificType("contributions", "text ARRAY");
      table.specificType("contributors", "integer ARRAY");
      table.integer("prompt");
      table.timestamps(true, true);
      table.boolean("is_complete").defaultTo(0);
    })
    .createTable("authors", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("password");
      table.string("bio");

      table.timestamps(true, true);
    })
    .raw("ALTER TABLE prompts ALTER COLUMN prompt TYPE VARCHAR(350)");
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("stories")
    .dropTable("prompts")
    .dropTable("authors")
    .dropTable("story_authors");
};