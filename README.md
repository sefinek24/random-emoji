## ⭐ » Information
Returns a random emoticon and its name and type. 🐈 🐱 🙀

## 📥 » How to install?
> **$** npm install @sefinek/random-emoji

## 📝 » Examples
```js
const random = require('@sefinek/random-emoji');

// 1. Random emoji with name and type
const emoji = random.emojis();
console.log(`Name: ${emoji.name}; Type: ${emoji.type}; Emoji: ${emoji.content};`);
// => Name: Cat Face; Type: animal; Emoji: 🐱;

// 2. A single emote
console.log(unicode());
// => 🥰

// 3. Random cats
const cat = cats();
console.log(`Name: ${cat.name}; Slashes: ${cat.slashes}; Emoji: ${cat.content};`);
// => Name: smiley_cat; Slashes: \\😺; Emoji: 😺;
```

## 🤝 » Help
Open new <a href="https://github.com/sefinek24/random-emoji/issues/new/choose" target="_blank">Issue</a> on Github.