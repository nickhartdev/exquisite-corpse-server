
exports.seed = function (knex) {
    return knex("authors")
      .del()
      .then(function () {
        return knex("authors").insert([
          {
            id: 1,
            name: "Bubs",
            email: "veepOfTheCorpses@eatyourheartout.org",
            created_at: "2020-01-11T00:25:34.315Z",
            updated_at: "2020-04-11T00:25:34.315Z",
            password: "qwerty",
            bio: "the best kept secret of Scottsdale's literary community",
          },
          {
            id: 2,
            name: "Sauchy LaHavas",
            email: "firstNunInTheChurch@hownow.net",
            created_at: "2020-01-11T00:25:34.315Z",
            updated_at: "2020-06-11T00:25:34.315Z",
            password: "qwerty",
            bio: `🎶I'm sauchy, I'm sauchy, I'm the first nun in the church
              I'm the one that drives the hearse, I'm sauchy🎶`
          },
          {
            id: 3,
            name: `There's a bird in here`,
            email: "birdbirdbird@theword.net",
            created_at: "2020-05-11T00:25:34.315Z",
            updated_at: "2020-06-11T00:25:34.315Z",
            password: 'qwerty',
            bio: 'Give me some buffalo wings this keyboard is too clean!'
          }, {
            id: 4, 
            name: 'MSNBC',
            email: "theNews@5",
            created_at: "2020-02-11T00:25:34.315Z",
            updated_at: "2020-06-11T00:25:34.315Z",
            password: 'qwerty',
            bio: 'These are all true stories. I swear'
          }, {
            id: 5,
            name: 'Jacob Jinger Heimer Schmidt',
            email: 'comegetyourpancakes@ihop.com',
            created_at: "2020-05-11T00:25:34.315Z",
            updated_at: "2020-06-11T00:25:34.315Z",
            password: 'querty',
            bio: 'Some things never change. I am a magnet.'
          }
        ]);
      });
};
