
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('story_authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('story_authors').insert([
        {story_id: 1, author_id: 2},
        {story_id: 1, author_id: 1},
        {story_id: 2, author_id: 3}
        {story_id: 2, author_id: 4}
        {story_id: 2, author_id: 2}
        {story_id: 3, author_id: 3}
        {story_id: 3, author_id: 2}
        {story_id: 3, author_id: 1}
      ]);
    });
};
