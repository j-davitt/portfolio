const projectData = [
  {
    id: 1,
    title: 'Terminal Trivia Trials',
    description: 'A command line interface trivia game that allows the user to select a category and difficulty level to play. Allows for multiplayer lobbies in real time.',
    image: require('../assets/TriviaDemo1.gif'),
    link: 'https://github.com/j-davitt/trivia-backend-client',
    github: 'https://github.com/j-davitt/trivia-backend-client',
  },
  {
    id: 2,
    title: 'Pantry Pirate',
    description: 'A mobile app that allows user to create and share items for shopping lists and pantries.',
    image: require('../assets/PantryPirateLogo.png'),
    link: 'https://github.com/j-davitt/PantryPirate-FE',
    github: 'https://github.com/j-davitt/PantryPirate-FE',
  },
  {
    id: 3,
    title: 'Word Rummage',
    description: 'Word search game where the user will click through different tables and will only gain points upon selecting actual words. The game will continue to iterate until the participant runs out of time.',
    image: require('../assets/WRDemo.gif'),
    link: 'https://word-rummage.github.io/Word-Rummage/',
    github: 'https://github.com/j-davitt/WordRummage',
  },
  {
    id: 4,
    title: 'Word Rummage Refactor',
    description: 'Refactor of an earlier project with Mongo, Express, React, and Node.',
    image: require('../assets/wr2.jpg'),
    link: 'https://wordrummage2.netlify.app/',
    github: 'https://github.com/The-Dangerzone/WordRummage-FE',
  },
];

projectData.sort((a, b) => (b.id - a.id));

export { projectData };
