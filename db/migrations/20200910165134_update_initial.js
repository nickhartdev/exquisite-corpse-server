exports.up = function (knex) {
  return knex.schema
  // knex.raw('ALTER TABLE "' + table + '" ALTER COLUMN "' + column + '" TYPE ' + newType + '')
    .raw('ALTER TABLE stories ALTER COLUMN prompt TYPE integer USING (prompt::integer)')
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable("stories")
      .dropTable("prompts")
      .dropTable("authors")
      .dropTable("story_authors");
};
