const { unicode, emojis, cats, hearts, circles } = require('./index.js');

// A single emote
console.log(unicode());

// Random emoji with name and type
const emoji = emojis();
console.log(`Name: ${emoji.name}; Type: ${emoji.type}; Emoji: ${emoji.content};`);

// Random cats
const cat = cats();
console.log(`Name: ${cat.name}; Slashes: ${cat.slashes}; Emoji: ${cat.content};`);

// Random hearts
const heart = hearts();
console.log(`Name: ${heart.name}; Slashes: ${heart.slashes}; Emoji: ${heart.content};`);

// Random hearts
const circle = circles();
console.log(`Name: ${circle.name}; Slashes: ${circle.slashes}; Emoji: ${circle.content};`);