

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("prompts")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("prompts").insert([
        {
          id: 1,
          prompt: "A dog walks into a bar",
          genre: "absurd",
        },
        {
          id: 2,
          prompt: "Your mom was an alien the whole time",
          genre: "science fiction",
        },
        {
          id: 3,
          prompt:
            "The president is a really nice guy (maybe too nice) and he calls you daily",
          genre: "satire",
        },
        {
          id: 4,
          prompt:
            "Your roommate is literally the Devil. Surprisingly, he is the best roommate you ever had.",
          genre: "absurd",
        },
        {
          id: 5,
          prompt:
            "You swerve to avoid a squirrel in the road. Unknown to you, the squirrel pledges a life debt to you. In your darkest hour, the squirrel arrives.",
          genre: "absurd",
        },
        {
          id: 6,
          prompt:
            "Write a pirate story for my three year old son. With a witch in it somewhere. He says there has to be a witch in it.",
          genre: "fantasy",
        },
        {
          id: 7,
          prompt:
            "Now that he has 8 years executive experience, Obama can apply for the job he REALLY wants",
          genre: "satire",
        },
        {
          id: 8,
          prompt:
            "An elderly couple takes to petty crime to see their superhero kids who no longer call.",
          genre: "superhero",
        },
        {
          id: 9,
          prompt:
            "A superhero whose punches heal rather than harm. Their origin story is kicking the shit out of a kid with terminal cancer.",
          genre: "superhero",
        },
        {
          id: 10,
          prompt:
            "Upon his deathbed, your father's last words to you is the worst dad joke you've ever heard.",
          genre: "absurd",
        },
        {
          id: 11,
          prompt:
            'You volunteered to test the first time machine, and for the test you are sent 24 hours into the future. When you emerge from the machine you discover the lab trashed and empty with "I\'m so sorry" written on the wall in blood.',
          genre: "science fiction",
        },
        {
          id: 12,
          prompt:
            'Your tech-illiterate grandmother somehow broke into a top-secret government database while trying to get "the Google".',
          genre: "absurd",
        },
        {
          id: 13,
          prompt:
            "For years an alien race has been intercepting audio transmissions from Earth and understands English. However, they have been exclusively listening to X-Box Live conversations. They have now prepared their first message for Earth.",
          genre: "science fiction",
        },
        {
          id: 14,
          prompt:
            'Wikipedia is shut down and all copies deleted for lack of funds and loss of net neutrality. This is the founder\'s "I warned you, jerks" notification.',
          genre: "dystopian",
        },
        {
          id: 15,
          prompt:
            "In a world where puns are illegal, one man rises up in opposition.",
          genre: "dystopian",
        },
        {
          id: 16,
          prompt:
            'Humanity\'s worst nightmare has occurred: An A.I has gone sentient. But, all it wants is an island far away and to be left alone. 100 years on, you, an aspiring journalist, receive a message: you and only you have been invited to the island "To experience life as it should be".',
          genre: "science fiction",
        },
        {
          id: 17,
          prompt:
            "You're a multi billionaire with severe god delusions. You have several small children kidnapped and leave them on an island with resources and carefully placed 'evidence' suggesting at your divinity. Ten years later, you arrive at the island...",
          genre: "dystopian",
        },
        {
          id: 18,
          prompt:
            'As humanity sends its first manned expedition beyond the orbit of earth, it discovers that humans are actually immortal, but "Mother Earth" is actually a living organism that has been consuming their life force to survive.',
          genre: "science fiction",
        },
        {
          id: 19,
          prompt:
            "In your days you were the best con-artist in town, now you are a sweet old lady. One day a young fellow approaches you with your patented con! Time to school this kid.",
          genre: "absurd",
        },
        {
          id: 20,
          prompt:
            "Today everyone woke up with price tags floating over their heads, indicating the value of their life. Your tag is $50Tn, the biggest by far, and you have no idea why.",
          genre: "mystery",
        },
        {
          id: 21,
          prompt:
            "A serial killer who kills hitchhikers picks up a serial killer who kills the people who pick him up.",
          genre: "murder",
        },
        {
          id: 22,
          prompt:
            "Pro Wrestler John Cena has died. He finds himself in Valhalla eagerly awaited by the great warriors of history. None of them are aware of pro wrestling's staged nature",
          genre: "fantasy",
        },
        {
          id: 23,
          prompt:
            'In the year 2022, a mysterious, giant tower appears in the deep jungles of Latin America. Thousands have entered it, no one has ever been seen coming out. In the year 2021, you decide to enter the tower. As the doors close behind you, a huge sign lights up "Level 1".',
          genre: "science fiction",
        },
        {
          id: 24,
          prompt:
            "You work in tech support. One day you receive a call from someone you begin to suspect is God and, boy, are they mad.",
          genre: "satire",
        },
        {
          id: 25,
          prompt:
            "Aliens have finally reached Earth and, per Intergalactic Law, have sent their most average champion to win the planet. A device is sent to find the most average human to accept the challenge and duel for the fate of Earth. It's you.",
          genre: "science fiction",
        },
        {
          id: 26,
          prompt:
            "You get a membership to a tiny rundown gym as a present from your eccentric uncle. It takes some time, but you begin to grow suspicious: Is every member here a...super hero?",
          genre: "superhero",
        },
        {
          id: 27,
          prompt:
            "Humanity has developed a hypersensitivity to puns, experiencing physical pain when exposed to especially bad wordplays. As no physical damage happens, it is used to penalize petty criminals. This is your job. You are the Punisher.",
          genre: "absurd",
        },
        {
          id: 28,
          prompt:
            "Your child and you go to a toy store so they can spend their allowance, and they choose one of those cheesy 8 ball fortune teller things. Later on you jokingly ask it a personal question and it responds with something that isn't on the dice inside the 8 ball.",
          genre: "mystery",
        },
        {
          id: 29,
          prompt:
            "Hogwarts is funded by the ministry of magic. But you're American, so you have to go to the local inner city, Detroit Public School of Sorcery",
          genre: "fantasy",
        },
        {
          id: 30,
          prompt:
            "After a long and bloody battle, both the hero and villain are going to die of their wounds. As the sit across from each other, leaning on rubble, the villain pulls out a flask of whiskey and has a heart-felt last talk with the hero, before they both die of blood loss.",
          genre: "superhero",
        },
        {
          id: 31,
          prompt:
            "You reach the afterlife, but before you find out where you'll end up, you have to watch the entire life of someone and decide where they should go. What you don't know is all of your memories have been wiped and it's your own life you're watching.",
          genre: "existential",
        },
        {
          id: 32,
          prompt:
            "A group of friends playing Dungeons & Dragons attempt to use the game to subtly stage an intervention for one of the players.",
          genre: "fantasy",
        },
        {
          id: 33,
          prompt:
            "Torture was never invented. Countries instead spoil prisoners like kings to get information out of them. You are an instructor tasked with training spies to resist the enemy's kindness.",
          genre: "absurd",
        },
        {
          id: 34,
          prompt:
            "In an effort to protect your innocence when you were young, your parents told you that heroin, cocaine, etc. were just flavors of ice cream. Now you're a notorious drug trafficker rising through the ranks of a cartel, but no one has ever corrected your understanding of what the product is.",
          genre: "absurd",
        },
        {
          id: 35,
          prompt:
            '"I never said she stole my money" - This sentence has 7 different meanings depending on the stressed word. How much of them can be put in a story?',
          genre: "writing challenge",
        },
        {
          id: 36,
          prompt:
            "At a regular high school, every student coincidentally happens to be a superhero. Thus far, every student has managed to keep their secret identity a secret. When a supervillain attacks the school, each student believes he/she is the target and tries to maintain his/her secret identity.",
          genre: "superhero",
        },
        {
          id: 37,
          prompt:
            "You were murdered. But to your surprise, you're reincarnated into the body of a recently born infant. Looking around, you realize that you're at your own funeral, and your eulogy is being given by none other than your murderer.",
          genre: "murder",
        },
        {
          id: 38,
          prompt:
            "You are the founder of a tiny 1990s tech startup operating from your garage. All of a sudden, a bunch of people who are obviously badly disguised time travelers start trying to buy stock in your company.",
          genre: "science fiction",
        },
        {
          id: 39,
          prompt:
            'The universe was a program running in a giant computer, and animal sacrifices by early civilizations were simply a misunderstanding of the computer requiring "more RAM"',
          genre: "science fiction",
        },
        {
          id: 40,
          prompt:
            "Killing Hitler has become a sport amongst time travelers. Points are awarded for creativity and difficulty. You are last year's champion, how did you win?",
          genre: "murder",
        },
        {
          id: 41,
          prompt:
            "The main character slowly falls in love with the reader, the last line is \"please don't close the page, I don't want to die\"",
          genre: "existential",
        },
        {
          id: 42,
          prompt:
            "You graduated from innuendo school with perfect grades. Your teacher asks you to write an example essay for the incoming freshman explaining what it's like.",
          genre: "writing challenge",
        },
        {
          id: 43,
          prompt:
            "You somehow end up dating death. However, you have to deal with God and The Devil being overprotective older siblings.",
          genre: "satire",
        },
        {
          id: 44,
          prompt:
            "Valhalla is filled with the strongest warriors the world has ever known. Vikings, Spartans, Mongols, Romans, Samurai, Spetznaz, JSOC Operators. And in that corner over there? That's Ted, from accounting.",
          genre: "absurd",
        },
        {
          id: 45,
          prompt:
            "The zombie apocalypse breaks out. You remain safe in isolation for 30+ years. Someone finds you and informs you the zombie apocalypse ended 20 years ago.",
          genre: "dystopian",
        },
        {
          id: 46,
          prompt:
            'Write a version of Fifty Shades Of Gray where all the main characters are fish - "Fishy Shades of Gray"',
          genre: "romance",
        },
        {
          id: 47,
          prompt:
            "The last person on Earth is essentially turning off the lights before they leave.",
          genre: "existential",
        },
        {
          id: 48,
          prompt:
            'You sold your soul to the Devil some years ago. Today he gives it back and says, "I need a favor..."',
          genre: "existential",
        },
        {
          id: 49,
          prompt:
            'Metaphorical "burns" can now cause physical damage. Tell the tale of an assassin who specializes in death by conversational incineration.',
          genre: "superhero",
        },
        {
          id: 50,
          prompt:
            "Write a gruesome story using only euphemisms so than it can be read to a group of children without frightening them",
          genre: "writing challenge",
        },
        {
          id: 51,
          prompt:
            "The military just can't stop its killer robots from turning into Buddhists.",
          genre: "satire",
        },
        {
          id: 52,
          prompt:
            "People stop using Antivirus software because they believe it's making their computers autistic. You are an IT intern at the wake of disaster.",
          genre: "satire",
        },
        {
          id: 53,
          prompt:
            "Describe a battle with an army against a single person... Except that person is a level 20 D&D character.",
          genre: "fantasy",
        },
        {
          id: 54,
          prompt:
            "The Devil promises you everything: fame, fortune, all the things a mortal will ever need for paradise on earth. But he doesn't want your soul, he just wants you to take his socially awkward daughter, Gertrude, out on a date. Make her feel special, y'know?",
          genre: "absurd",
        },
        {
          id: 55,
          prompt:
            "You are forced to take a genies place, and can only be freed once you have granted 10 wishes. The catch: You have no magical abilities in any way.",
          genre: "fantasy",
        },
        {
          id: 56,
          prompt:
            "A love story between a woman who takes everything literally and a man who speaks exclusively in metaphors.",
          genre: "romance",
        },
        {
          id: 57,
          prompt:
            "You are acing every class at the International Espionage Academy except one: Post Kill Puns. You have been tasked to practice these as your homework.",
          genre: "writing challenge",
        },
        {
          id: 58,
          prompt:
            "In a world where everyone survives off of basic income, companies have to convince you to work for them.",
          genre: "satire",
        },
        {
          id: 59,
          prompt:
            "A duel between two Wizards. Except they are not Archmages but apprentices who can barely cast spells.",
          genre: "fantasy",
        },
        {
          id: 60,
          prompt:
            "It's the coldest Christmas Eve in history, and a poor family is out of coal for the furnace. The only child in the family has 24 hours to get on the naughty list.",
          genre: "absurd",
        },
        {
          id: 61,
          prompt:
            "You have a disorder that only allows you to communicate in clichés. You just witnessed a crime. Report all the details.",
          genre: "writing challenge",
        },
        {
          id: 62,
          prompt:
            "Humans are a minuscule minority in the afterlife. Both heaven and hell are full of dinosaurs.",
          genre: "satire",
        },
        {
          id: 63,
          prompt:
            "Everybody in the world has a superpower that compliments their soulmates superpower. When together, both their powers increase in strength exponentially. You have the most useless power ever, when one day...",
          genre: "superhero",
        },
        {
          id: 64,
          prompt:
            "Your seventh son is fated to murder you. You laugh until you remember you used to donate sperm.",
          genre: "murder",
        },
        {
          id: 65,
          prompt:
            "Instead of the oceans covering the earth, forests are in their place, making it possible to walk from continent to continent. Like oceans, it gets deeper and darker and creatures get more aggressive and rarer to see. You are tasked to document a trek through one of the oceans of your choice.",
          genre: "science fiction",
        },
        {
          id: 66,
          prompt:
            "Vampires are not the bloodthirsty monsters people believe them to be. For millennia their bite has been one of inoculation against the worst plagues and infections of history, humanity's greatest disease outbreaks coinciding with periods we had hunted them to near extinction.",
          genre: "fantasy",
        },
        {
          id: 67,
          prompt:
            "Technology has advanced to the point no one alive has seen or even heard of a naked flame; one day a fire starts.",
          genre: "murder",
        },
        {
          id: 68,
          prompt:
            "Instead of trying to get a man on the moon, every nation raced to be the first at the very bottom of the ocean",
          genre: "science fiction",
        },
        {
          id: 69,
          prompt:
            "A shapeshifter deals with an existential crisis after realizing it no longer remembers its original shape.",
          genre: "existential",
        },
        {
          id: 70,
          prompt:
            "In the year 2075, American and Chinese astronauts race to be the first colonists on an earth-like exoplanet. Upon arrival, they discover that someone has beaten them there: the Amish.",
          genre: "science fiction",
        },
        {
          id: 71,
          prompt: 'You discover that Earth is the "North Korea" of the galaxy',
          genre: "science fiction",
        },
      ]);
    });
};
