const { get } = require('https');
const { version } = require('./package.json');

const emojis = {
	emojis: require('./data/emoji/collection/big.json'),

	cats: require('./data/emoji/cat.json'),
	foods: require('./data/emoji/food.json'),
	hearts: require('./data/emoji/heart.json'),

	circles: require('./data/emoji/circle.json'),
	squares: require('./data/emoji/square.json'),

	unicode: require('./data/emoji/collection/single.json')
};

const endpoints = require('./data/endpoints.json');

/**
 * Options for HTTP GET requests.
 * @type {Object}
 */
const httpOptions = {
	method: 'GET',
	port: 443,
	headers: {
		'User-Agent': `Mozilla/5.0 (compatible; random-emoji/${version}; +https://github.com/sefinek24/random-emoji)`,
		'Accept': 'application/json',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'DNT': '1',
		'Pragma': 'no-cache',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'DENY',
		'X-XSS-Protection': '1; mode=block',
	}
};

/**
 * Fetches content from a URL.
 * @param {string} url - URL to fetch content from.
 * @returns {Promise<Object>} - Promise resolving to the fetched JSON data.
 */
async function getContent(url) {
	try {
		const res = await new Promise((resolve, reject) => {
			const req = get(url, httpOptions, resolve);
			req.on('error', reject);
			req.end();
		});

		if (res.statusCode !== 200) {
			throw new Error(`Request failed with status code ${res.statusCode}`);
		}

		res.setEncoding('utf8');
		let rawData = '';
		for await (const chunk of res) {
			rawData += chunk;
		}
		return JSON.parse(rawData);
	} catch (err) {
		throw err;
	}
}

/**
 * SefinekAPI class for accessing various random content endpoints.
 */
class SefinekAPI {
	constructor() {
		Object.keys(endpoints).forEach(endpoint => {
			this[endpoint] = () => getContent(`https://api.sefinek.net/api/v2/random/${endpoints[endpoint]}`);
		});
	}
}

module.exports = {
	...Object.fromEntries(Object.entries(emojis).map(([key, value]) => [
		key, () => value[Math.floor(Math.random() * value.length)]
	])),

	Kaomojis: SefinekAPI,
	version,
};