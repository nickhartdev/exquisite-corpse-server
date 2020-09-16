exports.up = function (knex) {
  return knex.schema
    .createTable("prompts", function (table) {
      table.increments("id").primary();
      table.string("prompt");
      table.string("genre");
    })
    .raw("ALTER TABLE prompts ALTER COLUMN prompt TYPE VARCHAR(350)")
    .createTable("stories", function (table) {
      table.increments("id").primary();
      table.string("title");
      table.specificType("contributions", "text ARRAY");
      table.specificType("contributors", "integer ARRAY");
      table.integer("prompt");
      table.boolean("is_complete").defaultTo(0);
      table.timestamps(true, true);
    })
    .createTable("authors", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("bio");
      table.string("password");
      table.timestamps(true, true);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("stories")
    .dropTable("prompts")
    .dropTable("authors")
};
