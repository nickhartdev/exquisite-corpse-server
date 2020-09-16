exports.up = function (knex) {
  return knex.schema
    .raw('ALTER TABLE stories ALTER COLUMN prompt TYPE integer USING (prompt::integer)')
  };
  
  exports.down = function (knex) {
    // return knex.schema.raw(
    //   "ALTER TABLE stories ALTER COLUMN prompt TYPE VARCHAR(250)"
    // );
};
