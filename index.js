const emojis = require('./data/emoji/random.json');
const unicode = require('./data/emoji/unicode.json');
const cats = require('./data/emoji/cat.json');
const hearts = require('./data/emoji/heart.json');
const foods = require('./data/emoji/food.json');
const circles = require('./data/emoji/circle.json');
const endpoints = require('./data/endpoints.json');
const { name, version } = require('./package.json');
const { get } = require('node:https');

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

class SefinekAPI {
	constructor() {
		Object.keys(endpoints).forEach(endpoint => {
			this[endpoint] = () => getContent(`https://api.sefinek.net/api/v2/random/${endpoints[endpoint]}`);
		});
	}
}

module.exports = {
	unicode: () => unicode[Math.floor(Math.random() * unicode.length)],
	emojis: () => emojis[Math.floor(Math.random() * emojis.length)],
	cats: () => cats[Math.floor(Math.random() * cats.length)],
	hearts: () => hearts[Math.floor(Math.random() * hearts.length)],
	foods: () => foods[Math.floor(Math.random() * foods.length)],
	circles: () => circles[Math.floor(Math.random() * circles.length)],
	Kaomojis: SefinekAPI,
	version,
};