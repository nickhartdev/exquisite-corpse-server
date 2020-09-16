
exports.up = function(knex) {
  return knex.schema.raw('ALTER TABLE prompts ALTER COLUMN prompt TYPE VARCHAR(350)')
}

exports.down = function(knex) {
  // return knex.schema.raw(
  //   "ALTER TABLE prompts ALTER COLUMN prompt TYPE VARCHAR(250)"
  // );
}
