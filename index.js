const emojis = require('./data/emoji/random.json');
const unicode = require('./data/emoji/unicode.json');
const cats = require('./data/emoji/cat.json');
const hearts = require('./data/emoji/heart.json');
const foods = require('./data/emoji/food.json');
const circles = require('./data/emoji/circle.json');
const endpoints = require('./data/endpoints.json');
const { get } = require('node:https');

function getContent(url) {
	return new Promise((resolve, reject) => {
		get(url, res => {
			if (res.statusCode !== 200) {
				reject(`Request failed with status code ${res.statusCode}.`);
			}

			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', chunk => rawData = chunk);
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

class SkiffyAPI {
	constructor() {
		Object.keys(endpoints).forEach(endpoint => {
			this[endpoint] = () => getContent(`https://api.skiffybot.xyz/api/v1/${endpoints[endpoint]}`);
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
	kaomojis: SkiffyAPI,
};