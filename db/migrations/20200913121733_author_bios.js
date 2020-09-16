
exports.up = function(knex) {
  return knex.schema.table('authors', table => {
    table.string('bio')
  })

};

exports.down = function(knex) {
  return knex.schema.table('authors', function(table) {
    table.dropColumn("bio")
  })
};
