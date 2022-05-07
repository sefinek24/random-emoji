const { emojis, unicode, cats } = require('./index.js');

// Random emoji with name and type
const emoji = emojis();
console.log(`Name: ${emoji.name}; Type: ${emoji.type}; Emoji: ${emoji.content};`);

// A single emote
console.log(unicode());

// Random cats
const cat = cats();
console.log(`Name: ${cat.name}; Slashes: ${cat.slashes}; Emoji: ${cat.content};`);