
exports.up = function(knex) {
  return knex.schema.table("stories", function(table) {
    table.boolean('is_complete').defaultTo(0)
  });
};

exports.down = function(knex) {
  return knex.schema.table('stories', function(table) {
    table.dropColumn("is_complete")
  })
};