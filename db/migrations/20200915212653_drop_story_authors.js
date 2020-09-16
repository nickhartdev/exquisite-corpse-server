
exports.up = function(knex) {
  return knex.schema
    .dropTable('story_authors')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('story_authors', function(table) {});
};
