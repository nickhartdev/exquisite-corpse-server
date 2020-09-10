
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {id: 1, title:'Turn on the Dark', story: ['story one.', `i couldn't see my hands in front of me. one flew from the cukoo.`]},
        {id: 2, title:'Your mom is the best', story: ['story two.', `she lifted up the space ship. it was green. when it took off, so did she.`, `a small dog fell out. it went "bark!"`], prompt: 2},
        {id: 3, title:'Senor Green Saves the World', story: ['story three.', `how many times can a wood chuck`, `save the world? as many as it takes.`], prompt: 3}
      ]);
    });
};
