
exports.up = function(knex) {
  return knex.schema.table("papers", function (table) {
    table.string("publisher");
  }); 
};

exports.down = function(knex) {
  return knex.schema.table("papers", function (table) {
    table.dropColumn("publisher");
  });
};
