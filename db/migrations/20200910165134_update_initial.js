exports.up = function (knex) {
  return knex.schema
  // knex.raw('ALTER TABLE "' + table + '" ALTER COLUMN "' + column + '" TYPE ' + newType + '')
    .raw('ALTER TABLE stories ALTER COLUMN prompt TYPE integer USING (prompt::integer)')
    .table("stories", function (table) {
      table.foreign("prompt").references("prompts.id");
    })
    .table("authors", function (table) {
      table.string("password");
    })
    .table("story_authors", function (table) {
      table.integer("story_id");
      table.foreign("story_id").references("stories.id");
      table.integer("author_id");
      table.foreign("author_id").references("authors.id");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema
    .dropTable("stories")
    .dropTable("prompts")
    .dropTable("authors")
    .dropTable("story_authors");
};
