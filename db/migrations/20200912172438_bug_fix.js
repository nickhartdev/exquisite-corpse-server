
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("stories")
    .dropTable("prompts")
    .dropTable("authors")
    .dropTable("story_authors");
};
