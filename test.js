const random = require('./');

// A single emote
console.log(random.unicode());

// Random emoji with name and type
const emoji = random.emojis();
console.log(`Name: ${emoji.name}; Emoji: ${emoji.content};`);

// Random cat
const cat = random.cats();
console.log(`Name: ${cat.name}; Emoji: ${cat.content};`);

// Random heart
const heart = random.hearts();
console.log(`Name: ${heart.name}; Emoji: ${heart.content};`);

// Random food
const food = random.foods();
console.log(`Name: ${food.name}; Emoji: ${food.content};`);

// Random circle
const circle = random.circles();
console.log(`Name: ${circle.name}; Emoji: ${circle.content};`);

// Random kaomoji
(async () => {
	const kaomoji = new random.kaomojis();

	const kaoCat = await kaomoji.cat();
	console.log(`Cat face: ${kaoCat.message}`);

	const uwu = await kaomoji.uwu();
	console.log(`Random UwU: ${uwu.message}`);
})();