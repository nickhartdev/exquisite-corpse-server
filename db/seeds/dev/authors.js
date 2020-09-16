exports.seed = function (knex) {
  return knex("authors")
    .del()
    .then(function () {
      return knex("authors").insert([
        {
          id: 1,
          name: "Carly Clift",
          email: "thefirstqueenofscottsdale@scottlsdale.gov",
          created_at: "2020-01-11T00:25:34.315Z",
          updated_at: "2020-04-11T00:25:34.315Z",
          password: "qwerty",
          bio: "the best kept secret of Scottsdale's literary community",
        },
        {
          id: 2,
          name: "Aaron Burris-DeBoskey",
          email: "rontron@tron.ron",
          created_at: "2020-01-11T00:25:34.315Z",
          updated_at: "2020-06-11T00:25:34.315Z",
          password: "qwerty",
          bio: `Cat's love him, god fears him, if he's on your book it's BOUND to be a success`,
        },
        {
          id: 3,
          name: `Nick Hart`,
          email: "bladesofglory@at.at",
          created_at: "2020-05-11T00:25:34.315Z",
          updated_at: "2020-06-11T00:25:34.315Z",
          password: "qwerty",
          bio: "He puts the Hart in romance",
        },
        {
          id: 4,
          name: "Greyson Elkins",
          email: "theNews@5",
          created_at: "2020-02-11T00:25:34.315Z",
          updated_at: "2020-06-11T00:25:34.315Z",
          password: "qwerty",
          bio: "These are all true stories. I swear.",
        },
        {
          id: 5,
          name: "Khalid Williams",
          email: "theboss@turing.com.com",
          created_at: "2020-05-11T00:25:34.315Z",
          updated_at: "2020-06-11T00:25:34.315Z",
          password: "qwerty",
          bio:
            'Hit singles include, "lat night server" and "going buck wild in the terminal"',
        },
        {
          id: 6,
          name: "Casey Dallavalle",
          email: "theceo@turing.net.net",
          created_at: "2020-05-11T00:25:34.315Z",
          updated_at: "2020-06-11T00:25:34.315Z",
          password: "qwerty",
          bio: "Put a bird on it, and I'll be there.",
        },
      ]);
    });
};
