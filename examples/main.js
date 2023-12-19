const random = require('../index.js'); // Change to @sefinek/random-emoji

// Fetches and displays a single random Unicode emoji.
console.log(`Single Emoji     : ${random.unicode()}`);

// Retrieves and displays a random emoji with its visual representation, name, and type.
const emoji = random.emojis();
console.log(`Random Emoji     : ${emoji.content}; ${emoji.name}; ${emoji.type}`);

// Retrieves and displays a random cat emoji with its visual representation and name.
const cat = random.cats();
console.log(`Cat Emoji        : ${cat.content}; ${cat.name}`);

// Fetches and displays a random heart emoji with its visual representation and name.
const heart = random.hearts();
console.log(`Heart Emoji      : ${heart.content}; ${heart.name}`);

// Retrieves and displays a random food emoji with its visual representation and name.
const food = random.foods();
console.log(`Food Emoji       : ${food.content}; ${food.name}`);

// Retrieves and displays a random circle emoji with its visual representation and name.
const circle = random.circles();
console.log(`Circle Emoji     : ${circle.content}; ${circle.name}`);

// Retrieves and displays a random square emoji with its visual representation and name.
const squares = random.squares();
console.log(`Square Emoji     : ${squares.content}; ${squares.name}`);

// Fetches and displays random kaomojis using async/await syntax.
(async () => {
	const kaomojis = new random.Kaomojis();

	// Retrieves and displays a cat face kaomoji.
	const kaoCat = await kaomojis.cat();
	console.log(`Kaomoji Cat Face : ${kaoCat.message}`);

	// Fetches and displays a random UwU kaomoji.
	const uwu = await kaomojis.uwu();
	console.log(`Kaomoji UwU      : ${uwu.message}`);
})();

// Displays the current version of the module.
console.log(`Module version   : v${random.version}`);
