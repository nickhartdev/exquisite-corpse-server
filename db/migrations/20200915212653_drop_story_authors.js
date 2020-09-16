
exports.up = function(knex) {
  return knex.schema
    .dropTable('story_authors')
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("stories")
    .dropTable("prompts")
    .dropTable("authors")
};
