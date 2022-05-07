const { emojis } = require('./emojis.json');

module.exports = () => emojis[Math.floor(Math.random() * emojis.length)];