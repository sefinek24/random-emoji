const random = require('../index.js'); // Change to @sefinek/random-emoji
const data = [];

async function displayEmojiData() {
	// Get a single random Unicode emoji
	data.push({ Function: 'unicode()', Emoji: random.unicode().trim() });

	// Retrieves a random emoji, including its visual representation, name, and category
	const emoji = random.emojis();
	data.push({ Function: 'emojis()', Emoji: emoji.content.trim(), Name: emoji.name, Type: emoji.type });

	// Get a random cat emoji
	const cat = random.cats();
	data.push({ Function: 'cats()', Emoji: cat.content.trim(), Name: cat.name });

	// Get a random heart emoji
	const heart = random.hearts();
	data.push({ Function: 'hearts()', Emoji: heart.content.trim(), Name: heart.name });

	// Retrieves a random food emoji
	const food = random.foods();
	data.push({ Function: 'foods()', Emoji: food.content.trim(), Name: food.name });

	// Gets a random circle emoji
	const circle = random.circles();
	data.push({ Function: 'circles()', Emoji: circle.content.trim(), Name: circle.name });

	// Gets a random squares emoji
	const squares = random.squares();
	data.push({ Function: 'squares()', Emoji: squares.content.trim(), Name: squares.name });


	// Fetches random kaomojis
	const kaomojis = new random.Kaomojis();
	const kaoCat = await kaomojis.cat();
	data.push({ Function: 'cat()', Emoji: kaoCat.message.trim(), Name: 'Cat face' });

	const uwu = await kaomojis.uwu();
	data.push({ Function: 'uwu()', Emoji: uwu.message.trim(), Name: 'UwU' });


	// Displays the table
	console.table(data);
}

try {
	displayEmojiData().then(() => {
		// Displays the current version of the module
		console.log(`Module version: v${random.version}`);
	});
} catch (err) {
	throw new Error(err);
}
