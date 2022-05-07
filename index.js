const { emojis } = require('./json/emoji.json');
const unicode = require('./json/unicode.json');

exports.emoji = () => emojis[Math.floor(Math.random() * emojis.length)];
exports.unicode = () => unicode[Math.floor(Math.random() * unicode.length)];