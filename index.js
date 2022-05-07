const emojis = require('./json/emojis.json');
const unicode = require('./json/unicode.json');
const cats = require('./json/cats.json');

exports.emojis = () => emojis[Math.floor(Math.random() * emojis.length)];
exports.unicode = () => unicode[Math.floor(Math.random() * unicode.length)];
exports.cats = () => cats[Math.floor(Math.random() * cats.length)];