<div align="center">
    <h1>🐱 About this package 🙀</h1>
    <p>Returns a random emoticons (name, type) and kaomojis.</p>
    <a href="https://www.npmjs.com/package/@sefinek/random-emoji" target="_blank" title="random-emoji - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/@sefinek/random-emoji.svg?maxAge=3600" alt="The number of downloads">
        <img src="https://img.shields.io/github/issues/sefinek24/random-emoji" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek24/random-emoji" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/random-emoji" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/random-emoji" alt="Code size">
    </a>
</div>

## 📥 • Installation
> **$** npm install @sefinek/random-emoji

## 😼 • Examples
```js
const random = require('@sefinek/random-emoji');

// 1. A single emote
console.log(random.unicode());
// > 🥰

// 2. Random emoji with name and type
const emoji = random.emojis();
console.log(`Name: ${emoji.name}; Emoji: ${emoji.content};`);
// > Name: Cat Face; Emoji: 🐱;

// 3. Random cat
const cat = random.cats();
console.log(`Name: ${cat.name}; Emoji: ${cat.content};`);
// > Name: smiley_cat; Emoji: 😺;
```

## 😻 • Usage
| Function                                                                   | Description                                                  |
|----------------------------------------------------------------------------|--------------------------------------------------------------|
| [emojis](https://github.com/sefinek24/random-emoji/blob/main/test.js)      | Random emoji with name and type                              |
| [unicode](https://github.com/sefinek24/random-emoji/blob/main/test.js)     | A single emote                                               |
| [cats](https://github.com/sefinek24/random-emoji/blob/main/test.js)        | Return random cat                                            |
| [hearts](https://github.com/sefinek24/random-emoji/blob/main/test.js)      | Return random heart                                          |
| [foods](https://github.com/sefinek24/random-emoji/blob/main/test.js)       | Return random food                                           |
| [circles](https://github.com/sefinek24/random-emoji/blob/main/test.js)     | Return random circle                                         |
| [kaomojis](https://github.com/sefinek24/random-emoji#%EF%B8%8F--kaomojis)  | Return random kaomojis from [API](https://api.skiffybot.xyz) |

## ⛩️ • Kaomoji
### » Async/await example
```js
const random = require('@sefinek/random-emoji');

(async () => {
    const kaomoji = new random.kaomojis();

    const uwu = await kaomoji.uwu();
    console.log(`Random UwU: ${uwu.message}`);
})();
```

### » Promise example
```js
const random = require('@sefinek/random-emoji');
const kaomoji = new random.kaomojis();

kaomoji.love().then(data => console.log(data));
```

### » The returned object from [API](https://api.skiffybot.xyz)
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
| Function                                              | Example   |
|-------------------------------------------------------|-----------|
| [cat](https://api.skiffybot.xyz/api/v1/kaomoji/cat)   | (=^-ω-^=) |
| [dog](https://api.skiffybot.xyz/api/v1/kaomoji/dog)   | ଘ(∪・ﻌ・∪)ଓ |
| [owo](https://api.skiffybot.xyz/api/v1/kaomoji/owo)   | 𝓞𝔀𝓞    |
| [uwu](https://api.skiffybot.xyz/api/v1/kaomoji/uwu)   | 𝕌𝕨𝕌    |
| [love](https://api.skiffybot.xyz/api/v1/kaomoji/love) | ヽ(♡‿♡)ノ   |

## 📝 • Changelog
> https://github.com/sefinek24/random-emoji/blob/main/CHANGELOG.md

## 🤝 • Help
Open new [Issue](https://github.com/sefinek24/random-emoji/issues/new/choose) on GitHub.  
  
## ⭐ • Thank you
Give a [star](https://github.com/sefinek24/random-emoji) if you can on GitHub page.