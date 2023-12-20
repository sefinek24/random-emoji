<div align="center">
    <h1>😻 About this package 😼</h1>
    <p>Constantly supported Node.js module providing random emojis, including their names and categories. The module also offers random Japanese kaomojis.</p>
    <a href="https://www.npmjs.com/package/@sefinek/random-emoji" target="_blank" title="random-emoji - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/@sefinek/random-emoji.svg?maxAge=3600" alt="The number of downloads">
        <img src="https://img.shields.io/github/issues/sefinek24/random-emoji" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek24/random-emoji" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/random-emoji" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/random-emoji" alt="Code size">
    </a>
</div>

## 📥 • Installation
```bash
npm install @sefinek/random-emoji
```


## 😻 • Usage
| Function                                                                                                                   | Description                                                |
|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [unicode](https://github.com/sefinek24/random-emoji/blob/f8e6a007717dc5e51adc31b4418bb954e2d364e5/example.js#L4)           | A single emoji                                             |
| [emojis](https://github.com/sefinek24/random-emoji/blob/f8e6a007717dc5e51adc31b4418bb954e2d364e5/example.js#L7)            | Random emoji with name and type                            |
| [cats](https://github.com/sefinek24/random-emoji/blob/f8e6a007717dc5e51adc31b4418bb954e2d364e5/example.js#L11)             | Return random cat                                          |
| [hearts](https://github.com/sefinek24/random-emoji/blob/f8e6a007717dc5e51adc31b4418bb954e2d364e5/example.js#L14)           | Return random heart                                        |
| [foods](https://github.com/sefinek24/random-emoji/blob/f8e6a007717dc5e51adc31b4418bb954e2d364e5/example.js#L18)            | Return random food                                         |
| [circles](https://github.com/sefinek24/random-emoji/blob/f8e6a007717dc5e51adc31b4418bb954e2d364e5/example.js#L22)          | Return random circle                                       |
| [**new** Kaomojis](https://github.com/sefinek24/random-emoji/blob/f8e6a007717dc5e51adc31b4418bb954e2d364e5/example.js#L28) | Return random kaomojis from [API](https://api.sefinek.net) |


## 😼 • Examples
```js
const random = require('@sefinek/random-emoji');

// 1. A single emoji
console.log(random.unicode()); // 🥰

// 2. Random emoji with name and type
const emoji = random.emojis();
console.log(`Emoji: ${emoji.content}; Name: ${emoji.name}; Type: ${emoji.type};`);
// 🐶; Name: Dog Face; Type: animal;

// 3. Random cat
const cat = random.cats();
console.log(`Emoji: ${cat.content}; Name: ${cat.name};`);
// Emoji: 😺; Name: smiley_cat;
```


## ⛩️ • Kaomojis
### » Async/await example
```js
const random = require('@sefinek/random-emoji');

(async () => {
    const kaomoji = new random.Kaomojis();

    const uwu = await kaomoji.uwu();
    console.log(`Random UwU: ${uwu.message}`);
})();
```

### » Promise example
```js
const random = require('@sefinek/random-emoji');
const kaomoji = new random.Kaomojis();

kaomoji.love().then(data => console.log(data));
// or shorter
kaomoji.love().then(console.log);
```

### » The returned object from [API](https://api.sefinek.net)
```json
{
  "success": true,
  "status": 200,
  "category": "kaomoji",
  "endpoint": "uwu",
  "message": "🅤🅦🅤"
}
```


### » Kaomoji endpoints
| Function                                            | Example   |
|-----------------------------------------------------|-----------|
| [cat](https://api.sefinek.net/api/v2/kaomoji/cat)   | (=^-ω-^=) |
| [dog](https://api.sefinek.net/api/v2/kaomoji/dog)   | ଘ(∪・ﻌ・∪)ଓ |
| [owo](https://api.sefinek.net/api/v2/kaomoji/owo)   | 𝓞𝔀𝓞    |
| [uwu](https://api.sefinek.net/api/v2/kaomoji/uwu)   | 𝕌𝕨𝕌    |
| [love](https://api.sefinek.net/api/v2/kaomoji/love) | ヽ(♡‿♡)ノ   |

    
## 📝 • Changelog
> [Click here](CHANGELOG.md)


## 🤝 • Help
Need assistance or have questions about this module? Don't hesitate to open a new [Issue](https://github.com/sefinek24/random-emoji/issues/new) on our GitHub repository.
Our community is ready to help and provide answers to your inquiries.
  

## ⭐ • Thank you
If you use the Random Emoji module and appreciate my work, I'd be grateful if you could give it a star on our [GitHub page](https://github.com/sefinek24/random-emoji).
Your support helps me continue to develop this project and provide new and fun emojis to every user.


## 🎓 • [MIT License](LICENSE)
Copyright 2023 © by [Sefinek](https://sefinek.net). All Rights Reserved.