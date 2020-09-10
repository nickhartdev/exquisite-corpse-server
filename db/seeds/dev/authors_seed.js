
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, name: 'Nick', email: 'nick@ront.com'},
        {id: 2, name: 'Carly', email: 'carly@ront.com'},
        {id: 3, name: 'Grey', email: 'greyson@ront.com'},
        {id: 4, name: 'Rontron', email: 'Rontron@ront.com'}
      ]);
    });
};
