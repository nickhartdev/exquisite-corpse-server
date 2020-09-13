
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prompts').del()
    .then(function () {
      // Inserts seed entries
      return knex("prompts").insert([
        { 
          id: 1, 
          prompt: "A dog walks into a bar", 
          genre: "absurd" },
        {
          id: 2,
          prompt: "Your mom was an alien the whole time",
          genre: "science fiction",
        },
        {
          id: 3,
          prompt: "The president is a really nice guy",
          genre: "satire",
        },
        {
          id: 4,
          prompt: "Your roommate is literally the Devil. Surprisingly, he is the best roommate you ever had.",
          genre: "absurd",
        },
        {
          id: 5,
          prompt: "You swerve to avoid a squirrel in the road. Unknown to you, the squirrel pledges a life debt to you. In your darkest hour, the squirrel arrives.",
          genre: "absurd",
        },
        {
          id: 6,
          prompt: "Write a pirate story for my three year old son. With a witch in it somewhere. He says there has to be a witch in it.",
          genre: "fantasy",
        },
        {
          id: 7,
          prompt: "Now that he has 8 years executive experience, Obama can apply for the job he REALLY wants",
          genre: "satire",
        },
        {
          id: 8,
          prompt: "An elderly couple takes to petty crime to see their superhero kids who no longer call.",
          genre: "superhero",
        },
        {
          id: 9,
          prompt: "A superhero whose punches heal rather than harm. Their origin story is kicking the shit out of a kid with terminal cancer.",
          genre: "superhero",
        },
        {
          id: 10,
          prompt: "Upon his deathbed, your father's last words to you is the worst dad joke you've ever heard.",
          genre: "absurd",
        },
        {
          id: 11,
          prompt: "You volunteered to test the first time machine, and for the test you are sent 24 hours into the future. When you emerge from the machine you discover the lab trashed and empty with \"I'm so sorry\" written on the wall in blood.",
          genre: "science fiction",
        },
        {
          id: 12,
          prompt: "Your tech-illiterate grandmother somehow broke into a top-secret government database while trying to get \"the Google\".",
          genre: "absurd",
        },
        {
          id: 13,
          prompt: "For years an alien race has been intercepting audio transmissions from Earth and understands English. However, they have been exclusively listening to X-Box Live conversations. They have now prepared their first message for Earth.",
          genre: "science fiction",
        },
        {
          id: 14,
          prompt: "Wikipedia is shut down and all copies deleted for lack of funds and loss of net neutrality. This is the founder's \"I warned you, jerks\" notification.",
          genre: "dystopian",
        },
        {
          id: 15,
          prompt: "In a world where puns are illegal, one man rises up in opposition.",
          genre: "dystopian",
        },
        {
          id: 16,
          prompt: "Humanity's worst nightmare has occurred: An A.I has gone sentient. But, all it wants is an island far away and to be left alone. 100 years on, you, an aspiring journalist, receive a message: you and only you have been invited to the island \"To experience life as it should be\".",
          genre: "science fiction",
        },
        {
          id: 17,
          prompt: "You're a multi billionaire with severe god delusions. You have several small children kidnapped and leave them on an island with resources and carefully placed 'evidence' suggesting at your divinity. Ten years later, you arrive at the island...",
          genre: "dystopian",
        },
        {
          id: 18,
          prompt: "As humanity sends its first manned expedition beyond the orbit of earth, it discovers that humans are actually immortal, but \"Mother Earth\" is actually a living organism that has been consuming their life force to survive.",
          genre: "science fiction",
        },
        {
          id: 19,
          prompt: "In your days you were the best con-artist in town, now you are a sweet old lady. One day a young fellow approaches you with your patented con! Time to school this kid.",
          genre: "absurd",
        },
        {
          id: 20,
          prompt: "Today everyone woke up with price tags floating over their heads, indicating the value of their life. Your tag is $50Tn, the biggest by far, and you have no idea why.",
          genre: "mystery",
        },
        {
          id: 21,
          prompt: "A serial killer who kills hitchhikers picks up a serial killer who kills the people who pick him up.",
          genre: "murder",
        },
        {
          id: 22,
          prompt: "Pro Wrestler John Cena has died. He finds himself in Valhalla eagerly awaited by the great warriors of history. None of them are aware of pro wrestling's staged nature",
          genre: "fantasy",
        },
        {
          id: 23,
          prompt: "In the year 2022, a mysterious, giant tower appears in the deep jungles of Latin America. Thousands have entered it, no one has ever been seen coming out. In the year 2021, you decide to enter the tower. As the doors close behind you, a huge sign lights up \"Level 1\".",
          genre: "science fiction",
        },
        {
          id: 24,
          prompt: "You work in tech support. One day you receive a call from someone you begin to suspect is God and, boy, are they mad.",
          genre: "satire",
        },
        {
          id: 25,
          prompt: "Aliens have finally reached Earth and, per Intergalactic Law, have sent their most average champion to win the planet. A device is sent to find the most average human to accept the challenge and duel for the fate of Earth. It's you.",
          genre: "science fiction",
        },
        {
          id: 26,
          prompt: "You get a membership to a tiny rundown gym as a present from your eccentric uncle. It takes some time, but you begin to grow suspicious: Is every member here a...super hero?",
          genre: "superhero",
        },
        {
          id: 27,
          prompt: "Humanity has developed a hypersensitivity to puns, experiencing physical pain when exposed to especially bad wordplays. As no physical damage happens, it is used to penalize petty criminals. This is your job. You are the Punisher.",
          genre: "absurd",
        },
        {
          id: 28,
          prompt: "Your child and you go to a toy store so they can spend their allowance, and they choose one of those cheesy 8 ball fortune teller things. Later on you jokingly ask it a personal question and it responds with something that isn't on the dice inside the 8 ball.",
          genre: "mystery",
        },
        {
          id: 29,
          prompt: "Hogwarts is funded by the ministry of magic. But you're American, so you have to go to the local inner city, Detroit Public School of Sorcery",
          genre: "fantasy",
        },
        {
          id: 30,
          prompt: "After a long and bloody battle, both the hero and villain are going to die of their wounds. As the sit across from each other, leaning on rubble, the villain pulls out a flask of whiskey and has a heart-felt last talk with the hero, before they both die of blood loss.",
          genre: "superhero",
        },

      ]);
    });
};
