exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("stories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("stories").insert([
        {
          id: 1,
          title: "Scare me 19 times, I'm a fool, get me 20, well sheeeets",
          prompt: null,
          created_at: "2020-01-10T22:37:51.103Z",
          updated_at: "2020-04-10T22:37:51.103Z",
          contributions: [
            `It was a dark and stormy night. Covid-19 had mutated to such an extent that experts
            had now called them Covid-20--a much deadlier version of Covid-19. The brave
            carehort of Turing Mod 2005FE decided to band together to survive what could only
            be called a zombie apocalypse scenario, not unlike 28 days later. The days of CSS
            and HTML could not help them, nor could their drunk friend Javascript.
            The carehort decided to meet up in Denver and make their way into the mountains
            to survive as best they could. They comandeered a couple of large busses and
            went off to the front range as the october wind blew through the streets.`,
            `There was death all around them, but using their empathy skills, the carehort perserved.
            The hordes of hater laid wasted around them. Until one last internet troll was left,
            laughing at his own crappy jokes.All of the beans
            made sure this internet troll would never return to their land again.  The beans threw a party!
            This party had anything you could ever dream up.
            It had mounds of cake and presents, streamers on every piece of furniture, and several terrifying clowns.
            Suddenly, the crowd parted to reveal the most important event of all: The birthday boy stuck his face in the cake.
            He turned around to face his dog and let the dog lick all of the frosting off his face.
            His mother was horrified and started chasing them around the room. His dad watched and video taped the whole thing.
            He wasn’t sure how to react, should he pretend that he knew he was being taped?`,
            `Of course he would, he didn't want to betray the surprise. And then, our friends
            the Eagles swooped in at the opportune moment to join the battle and save the friends.
            Unfortunately, the eagles had terrible aim, they missed the beans and picked up peas instead.
            THE BEANS WERE SAVED. This time they went on a hike.
            They started up the steep hill, and suddenly it started to rain. After 5 minutes,
            it was raining so hard they could barely see.`,
            `They decided to go inside to escape from the rain. Once they were inside, they started taking off their coats.
            They then went into the living room and wrapped themselves up in blankets like burritos.
            He exclaimed “wow this has been the best day of my life! Let’s do this again tomorrow.”`,
          ],
          contributors: [3, 2, 3, 1],
          is_complete: true,
        },
        {
          id: 2,
          title: "Breakfast Showdown",
          prompt: null,
          created_at: "2020-09-10T22:37:51.103Z",
          updated_at: "2020-09-10T22:37:51.103Z",
          contributions: [
            `Two chinchillas were eating waffles. Then a pancake showed up. They had a showdown over the pancake.`,
            `This wasn’t the first time they had fought over baked goods. He knew this and the poisoned pancake was all apart of the plan. 
          And not only that, his narcolepsy was setting in. And just like that, he fell asleep dead.`,
            `It was weird to be dead, he thought. I feel happy. TOOO happy. That’s how I felt. I had finally completed it.`,
            `The SCUBA diving certification was all mine. I was now ready to go to the Bahamas. Unfortunately, that never happened.`,
            `A large financial crisis ended that trip. Sorry for not..telling you 
          I loved you when I had the moment all I had was silence for years to come. In any case, at least I had my potatoes. 
          My sweet sweet potatoes.`,
            `I could do anything with potatoes. I could stomp them, mash them, stick them in a stew. I could make vodka, or chips, 
          or a battery. Because I am a magician and I had acquired the magic beans!`,
          ],
          contributors: [2, 1, 4, 3, 5, 3],
          is_complete: false,
        },
        {
          id: 3,
          title: "Goblin Damon",
          prompt: 2,
          created_at: "2020-03-10T22:37:51.103Z",
          updated_at: "2020-09-10T22:37:51.103Z",
          contributions: [
            `What happened to the potatoes Matt Damon grew on Mars? I’ll tell you what happened, they were blasted by cosmic radiation, 
          causing the crew to go blind. Stumbling around the piloting chamber, crashing into one another in panic, the crew could not find the controls
          . So they search in the dark.  Kept hitting each other and tripping over things.  And then someone shouted, I found it.
          Mork the space goblin’s eyes widened at the declaration, and she rushed over to her fellow treasure hunter. 
          “You mean you found it? We finally found it?”`,
            `She peered over her partner’s shoulder, and her eyes glittered at the sight. A staff, inlaid with jewels; they had finally found their treasure.
          The staff was frickin’ happy, but as well as sad, because they had to share the treasure.
          It’s hard to figure out how to share treasure when it is a living breathing duck. they had to bust out the knives.
          For anything, the shields were holding, but the dials showed that they would soon fail if the onslaught did not subside. 
          Drastic action needed to be taken to preserve the lives of the crew. The pilot threw the ship into hyperdrive, knowing 
          that they were not ready and not everyone might come through the jump alive`,
            `So everyone put on their seat belts as they all said their prayers.  She was in the back, and she didn’t want the others to see her fear. 
           Life flashed before her eyes and she began to cry. She clutched her side where the knife was stuck between her ribs. 
           Her breathing laboured, she held tightly to the wound, willing her bleeding to slow. Mork gasped, and looked at her partner with pleading eyes, “Why?”
          Her partner explained, “I do not need to tell you the reasoning, just go eat some ice cream.” “When I want the cream you do what I say” her voice 
          deepened as she dropped her human form, revealing the much larger terrifying creature that she truly was underneath`
          ],
          contributors: [3, 5, 2],
          is_complete: false,
        },
        {
          id: 4,
          title: "Pokemon the True Story",
          prompt: null,
          created_at: "2020-09-10T22:37:51.103Z",
          updated_at: "2020-09-10T22:37:51.103Z",
          contributions: [
              `Ashe Ketchum was the worst trainer in the world. He wanted to get better so he befriended an real 
            cheese clown named pikachu. Pikachu was the worst friend he could have ever had. 
            They began walking to their first challenge. At the challenge they met this cool boy named Allen.`, 
              `Allen wasn’t just cool bc he had a mustache at age 7, but he was also a centaur. Allen liked to race.
            The glorious mustached 7 year old centaur wasn’t great, but he tried. One race, he tripped over 
            his front two legs. He screamed in agony because his worst fears had come true, he lost his marbles.`,
              `Having lost his marbles he could only rely upon his intuition, a rare energy among the centaurs 
            a space based power within his mind that was devoid of thoughts and rich with imagination.`
          ],
          contributors: [5, 4, 3],
          is_complete: false,
        }
      ]);
    });
};
