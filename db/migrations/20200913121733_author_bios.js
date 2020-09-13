
exports.up = function(knex) {
  return knex.schema.table('authors', table => {
    table.string('bio')
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable("stories")
    .dropTable("prompts")
    .dropTable("authors")
    .dropTable("story_authors");
};
