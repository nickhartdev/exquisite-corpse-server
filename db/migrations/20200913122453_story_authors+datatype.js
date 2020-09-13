
exports.up = function(knex) {
  return knex.schema.table('stories', table=> {
    table.specificType('contributions', 'text ARRAY');
    table.specificType('contributors', 'integer ARRAY');
    table.dropColumn('story')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("stories")
    .dropTable("prompts")
    .dropTable("authors")
    .dropTable("story_authors");
};
