const { transformFile } = require("@babel/core");

exports.up = function(knex) {
  return knex.schema
  .table("stories", function (table) {
    table.dropForeign("prompt", "stories_prompt_foreign");
  })
};

exports.down = function(knex) {

};
