const emojis = require('./json/emojis.json');
const unicode = require('./json/unicode.json');
const cats = require('./json/cats.json');
const hearts = require('./json/hearts.json');
const foods = require('./json/foods.json');
const circles = require('./json/circles.json');
const { get } = require('https');
const endpoints = require('./api/endpoints.json');

function getContent(url) {
	return new Promise((resolve, reject) => {
		get(url, res => {
			const { statusCode } = res;
			if (statusCode !== 200) {
				res.resume();
				reject(`Request failed with status code ${statusCode}.`);
			}

			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', chunk => {rawData += chunk;});
			res.on('end', () => {
				try {
					resolve(JSON.parse(rawData));
				} catch (err) {
					reject(err.message);
				}
			});
		}).on('error', err => reject(err.message));
	});
}

class SkiffyBOT {
	constructor() {
		Object.keys(endpoints).forEach(endpoint => {
			this[endpoint] = () => getContent(`https://api.skiffybot.xyz/api/v1/${endpoints[endpoint]}`);
		});
	}
}

module.exports = {
	emojis: () => emojis[Math.floor(Math.random() * emojis.length)],
	unicode: () => unicode[Math.floor(Math.random() * unicode.length)],
	cats: () => cats[Math.floor(Math.random() * cats.length)],
	hearts: () => hearts[Math.floor(Math.random() * hearts.length)],
	foods: () => foods[Math.floor(Math.random() * foods.length)],
	circles: () => circles[Math.floor(Math.random() * circles.length)],
	kaomojis: SkiffyBOT,
};