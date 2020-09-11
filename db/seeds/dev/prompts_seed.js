
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prompts').del()
    .then(function () {
      // Inserts seed entries
      return knex('prompts').insert([
        {id: 1, prompt: 'A dog walks into a bar', genre: 'absurd'},
        {id: 2, prompt: 'Your mom was an alien the whole time', genre:'sci-fi'},
        {id: 3, prompt: 'The president is a really nice guy', genre: 'satire'}
      ]);
    });
};
