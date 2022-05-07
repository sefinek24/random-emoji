const { emoji, unicode } = require('./index.js');

const { name, type, content } = emoji();
console.log(`Name: ${name}; Type: ${type}; Emoji: ${content};`);

console.log(unicode());