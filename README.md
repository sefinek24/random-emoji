<div align="center">
    <h1>About this package</h1>
    <p>Returns a random emoticon, its name and type. 🐈 🐱 🙀</p>
    <a href="https://www.npmjs.com/package/@sefinek/random-emoji" target="_blank" title="random-emoji - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/@sefinek/random-emoji.svg?maxAge=3600" alt="The number of downloads">
        <img src="https://img.shields.io/github/issues/sefinek24/random-emoji" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek24/random-emoji" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/random-emoji" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/random-emoji" alt="Code size">
        <img src="https://img.shields.io/tokei/lines/github/sefinek24/random-emoji" alt="Total lines">
    </a>
</div>

## 📥 • Installation
> **$** npm install @sefinek/random-emoji

## 😼 • Usage
```js
const random = require('@sefinek/random-emoji');

// 1. A single emote
console.log(unicode());
// > 🥰

// 2. Random emoji with name and type
const emoji = random.emojis();
console.log(`Name: ${emoji.name}; Type: ${emoji.type}; Emoji: ${emoji.content};`);
// > Name: Cat Face; Type: animal; Emoji: 🐱;

// 3. Random cats
const cat = random.cats();
console.log(`Name: ${cat.name}; Slashes: ${cat.slashes}; Emoji: ${cat.content};`);
// > Name: smiley_cat; Slashes: \\😺; Emoji: 😺;

// 4. Random hearts
const heart = random.hearts();
console.log(`Name: ${heart.name}; Slashes: ${heart.slashes}; Emoji: ${heart.content};`);
// > Name: blue_heart; Slashes: \\💙; Emoji: 💙;
```

## 😻 • Functions list
```js
emojis()  // Random emoji with name and type
unicode() // A single emote
cats()    // Return random cats
hearts()  // Return random hearts
```

## 📝 • Changelog
> <a href="https://github.com/sefinek24/random-emoji/blob/main/CHANGELOG.md" target="_blank" title="random-emoji/CHANGELOG.md at main · sefinek24/random-emoji">https://github.com/sefinek24/random-emoji/blob/main/CHANGELOG.md</a>

## 🤝 • Help
Open new <a href="https://github.com/sefinek24/random-emoji/issues/new/choose" target="_blank">Issue</a> on Github.  
  
### Thank you ❤️