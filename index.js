const { get } = require('https');
const emojis = require('./data/emoji/random.json');
const unicode = require('./data/emoji/unicode.json');
const cats = require('./data/emoji/cat.json');
const hearts = require('./data/emoji/heart.json');
const foods = require('./data/emoji/food.json');
const circles = require('./data/emoji/circle.json');
const endpoints = require('./data/endpoints.json');
const { name, version } = require('./package.json');

/**
 * Configuration options for HTTP requests.
 * @type {Object}
 */
const options = {
	method: 'GET',
	port: 443,
	headers: {
		'User-Agent': `${name}/${version} (+https://github.com/sefinek24/random-emoji)`,
		'Accept': 'application/json',
		'Cache-Control': 'no-cache',
		'CF-IPCountry': 'false',
		'CF-Visitor': '{"scheme":"https"}',
		'Connection': 'keep-alive',
		'DNT': '1',
		'Pragma': 'no-cache',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'DENY',
		'X-XSS-Protection': '1; mode=block',
	},
};

/**
 * Fetch content from a given URL using HTTP GET.
 * @param {string} url - The URL to fetch content from.
 * @returns {Promise} - A Promise that resolves with the fetched JSON data or rejects with an error.
 */
function getContent(url) {
	return new Promise((resolve, reject) => {
		const req = get(url, options, res => {
			if (res.statusCode !== 200) {
				reject(`Request failed with status code ${res.statusCode}.`);
				return;
			}

			res.setEncoding('utf8');

			let rawData = '';
			res.on('data', (chunk) => {
				rawData += chunk;
			});

			res.on('end', () => {
				try {
					resolve(JSON.parse(rawData));
				} catch (err) {
					reject(err.message);
				}
			});
		});

		req.on('error', err => {
			reject(err);
		});

		req.end();
	});
}

/**
 * SefinekAPI class for accessing various random content endpoints.
 * @class
 */
class SefinekAPI {
	constructor() {
		Object.keys(endpoints).forEach(endpoint => {
			/**
			 * Access a specific random content endpoint.
			 * @method
			 * @returns {Promise} - A Promise that resolves with the fetched content or rejects with an error.
			 */
			this[endpoint] = () => getContent(`https://api.sefinek.net/api/v2/random/${endpoints[endpoint]}`);
		});
	}
}

module.exports = {
	/**
	 * Get a random Unicode emoji.
	 * @returns {string} - A random Unicode emoji.
	 */
	unicode: () => unicode[Math.floor(Math.random() * unicode.length)],

	/**
	 * Get a random emoji.
	 * @returns {object} - A random emoji.
	 */
	emojis: () => emojis[Math.floor(Math.random() * emojis.length)],

	/**
	 * Get a random cat emoji.
	 * @returns {object} - A random cat emoji.
	 */
	cats: () => cats[Math.floor(Math.random() * cats.length)],

	/**
	 * Get a random heart emoji.
	 * @returns {object} - A random heart emoji.
	 */
	hearts: () => hearts[Math.floor(Math.random() * hearts.length)],

	/**
	 * Get a random food emoji.
	 * @returns {object} - A random food emoji.
	 */
	foods: () => foods[Math.floor(Math.random() * foods.length)],

	/**
	 * Get a random circle emoji.
	 * @returns {object} - A random circle emoji.
	 */
	circles: () => circles[Math.floor(Math.random() * circles.length)],

	/**
	 * Access various random content endpoints using the SefinekAPI class.
	 */
	Kaomojis: SefinekAPI,

	/**
	 * Get the module version.
	 * @returns {string} - Returns the package version.
	 */
	version,
};