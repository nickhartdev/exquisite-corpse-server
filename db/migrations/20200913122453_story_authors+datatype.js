
exports.up = function(knex) {
  return knex.schema.table('stories', function(table) {
    table.specificType('contributions', 'text ARRAY');
    table.specificType('contributors', 'integer ARRAY');
    table.dropColumn('story')
  })
};

exports.down = function(knex) {
  return knex.schema.table('stories', function(table) {
    table.dropColumn("contributions")
    table.dropColumn("contributors")
    table.string('story')
  })
};
