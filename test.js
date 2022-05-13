const { unicode, emojis, cats, hearts, circles, kaomojis } = require('./index.js');

// A single emote
console.log(unicode());

// Random emoji with name and type
const emoji = emojis();
console.log(`Name: ${emoji.name}; Emoji: ${emoji.content};`);

// Random cats
const cat = cats();
console.log(`Name: ${cat.name}; Emoji: ${cat.content};`);

// Random hearts
const heart = hearts();
console.log(`Name: ${heart.name}; Emoji: ${heart.content};`);

// Random circles
const circle = circles();
console.log(`Name: ${circle.name}; Emoji: ${circle.content};`);

// Random kaomoji
const kaomoji = new kaomojis();

async function example() {
	const uwu = await kaomoji.uwu();
	console.log(uwu);
}

example();