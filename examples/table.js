const random = require('../index.js');

async function displayEmojiData() {
	const data = [];

	// Fetches a single random Unicode emoji.
	data.push({ Function: 'unicode()', Name: 'N/A', Emoji: random.unicode() });

	// Retrieves a random emoji with its name, visual representation, and type.
	const emoji = random.emojis();
	data.push({ Function: 'emojis()', Name: emoji.name, Emoji: emoji.content, Type: emoji.type });

	// Gets a random cat emoji with its name and visual representation.
	const cat = random.cats();
	data.push({ Function: 'cats()', Name: cat.name, Emoji: cat.content });

	// Fetches a random heart emoji with its name and visual representation.
	const heart = random.hearts();
	data.push({ Function: 'hearts()', Name: heart.name, Emoji: heart.content });

	// Retrieves a random food emoji with its name and visual representation.
	const food = random.foods();
	data.push({ Function: 'foods()', Name: food.name, Emoji: food.content });

	// Gets a random circle emoji with its name and visual representation.
	const circle = random.circles();
	data.push({ Function: 'circles()', Name: circle.name, Emoji: circle.content });

	// Gets a random squares emoji with its name and visual representation.
	const squares = random.circles();
	data.push({ Function: 'squares()', Name: circle.name, Emoji: circle.content });

	// Fetches random kaomojis
	const kaomojis = new random.Kaomojis();
	const kaoCat = await kaomojis.cat();
	data.push({ Function: 'cat()', Name: 'Cat face', Emoji: kaoCat.message });

	const uwu = await kaomojis.uwu();
	data.push({ Function: 'uwu()', Name: 'UwU', Emoji: uwu.message });

	// Displays the table
	console.table(data);
}

displayEmojiData().then(() => {
	// Displays the current version of the module.
	console.log(`Module version: v${random.version}`);
});
