const emoji = require('./index.js');

const { name, content, type } = emoji();
console.log(`Name: ${name}; Type: ${type}; Emoji: ${content};`);