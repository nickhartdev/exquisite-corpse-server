
exports.up = function(knex) {
  return knex.schema.table("stories", (table) => {
    table.boolean('is_complete').defaultTo(0)
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("stories")
    .dropTable("prompts")
    .dropTable("authors")
    .dropTable("story_authors");
};
