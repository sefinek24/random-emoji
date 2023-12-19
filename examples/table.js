const random = require('../index.js');
const data = [];

async function displayEmojiData() {
	// Fetches a single random Unicode emoji.
	data.push({ Function: 'unicode()', Emoji: random.unicode().trim() });

	// Retrieves a random emoji with its name, visual representation, and type.
	const emoji = random.emojis();
	data.push({ Function: 'emojis()', Emoji: emoji.content.trim(), Name: emoji.name, Type: emoji.type });

	// Gets a random cat emoji with its name and visual representation.
	const cat = random.cats();
	data.push({ Function: 'cats()', Emoji: cat.content.trim(), Name: cat.name });

	// Fetches a random heart emoji with its name and visual representation.
	const heart = random.hearts();
	data.push({ Function: 'hearts()', Emoji: heart.content.trim(), Name: heart.name });

	// Retrieves a random food emoji with its name and visual representation.
	const food = random.foods();
	data.push({ Function: 'foods()', Emoji: food.content.trim(), Name: food.name });

	// Gets a random circle emoji with its name and visual representation.
	const circle = random.circles();
	data.push({ Function: 'circles()', Emoji: circle.content.trim(), Name: circle.name });

	// Gets a random squares emoji with its name and visual representation.
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
		// Displays the current version of the module.
		console.log(`Module version: v${random.version}`);
	});
} catch (err) {
	throw new Error(err);
}
