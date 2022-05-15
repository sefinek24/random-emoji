<div align="center">
    <h1>🐱 O tym module 🙀</h1>
    <p>Zwraca losowe emotikony (nazwa, typ) i kaomoji.</p>
    <a href="https://www.npmjs.com/package/@sefinek/random-emoji" target="_blank" title="random-emoji - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/@sefinek/random-emoji.svg?maxAge=3600" alt="Liczba pobrań">
        <img src="https://img.shields.io/github/issues/sefinek24/random-emoji" alt="Zgłoszone błędy">
        <img src="https://img.shields.io/github/last-commit/sefinek24/random-emoji" alt="Ostatni commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/random-emoji" alt="Aktywność commitów">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/random-emoji" alt="Rozmiar kodu">
        <img src="https://img.shields.io/tokei/lines/github/sefinek24/random-emoji" alt="Liczba linijek">
    </a>
</div>

## 📥 • Instalacja
> **$** npm install @sefinek/random-emoji

## 😼 • Przykłady
```js
const random = require('@sefinek/random-emoji');

// 1. Podyńcza emotka
console.log(random.unicode());
// > 🥰

// 2. Losowe emoji z nazwą i typem
const emoji = random.emojis();
console.log(`Name: ${emoji.name}; Emoji: ${emoji.content};`);
// > Name: Cat Face; Type: animal; Emoji: 🐱;

// 3. Losowy kot
const cat = random.cats();
console.log(`Name: ${cat.name}; Emoji: ${cat.content};`);
// > Name: smiley_cat; Emoji: 😺;
```

## 😻 • Użycie
| Funkcja                                                                   | Opis                                                     |
|---------------------------------------------------------------------------|----------------------------------------------------------|
| [emojis](https://github.com/sefinek24/random-emoji/blob/main/test.js)     | Losowe emoji z nazwą i typem                             |
| [unicode](https://github.com/sefinek24/random-emoji/blob/main/test.js)    | Pojedyncza emotikona                                     |
| [cats](https://github.com/sefinek24/random-emoji/blob/main/test.js)       | Zwraca losowego kota                                     |
| [hearts](https://github.com/sefinek24/random-emoji/blob/main/test.js)     | Zwraca losowe serce                                      |
| [foods](https://github.com/sefinek24/random-emoji/blob/main/test.js)      | Zwraca losowe jedzenie                                   |
| [circles](https://github.com/sefinek24/random-emoji/blob/main/test.js)    | Zwraca losowe kółko                                      |
| [kaomojis](https://github.com/sefinek24/random-emoji#%EF%B8%8F--kaomojis) | Zwraca losowe kaomoji z [API](https://api.skiffybot.xyz) |

## ⛩️ • Kaomoji
### » Przykład Async/await
```js
const random = require('@sefinek/random-emoji');
const kaomoji = new random.kaomojis();

async function example() {
    const uwu = await kaomoji.uwu();
    console.log(uwu.message);
}

example(); // Wykonaj funkcje
```

### » Przykład obietnicy
```js
const random = require('@sefinek/random-emoji');
const kaomoji = new random.kaomojis();

kaomoji.love().then(data => console.log(data));
```

### » Zwrócony obiekt przez [API](https://api.skiffybot.xyz)
```json
{
  "success": true,
  "status": 200,
  "category": "kaomoji",
  "endpoint": "uwu",
  "message": "🅤🅦🅤"
}
```

### » Punkty końcowe dla Kaomoji
| Function                                              | Example   |
|-------------------------------------------------------|-----------|
| [cat](https://api.skiffybot.xyz/api/v1/kaomoji/cat)   | (=^-ω-^=) |
| [dog](https://api.skiffybot.xyz/api/v1/kaomoji/dog)   | ଘ(∪・ﻌ・∪)ଓ |
| [owo](https://api.skiffybot.xyz/api/v1/kaomoji/owo)   | 𝓞𝔀𝓞    |
| [uwu](https://api.skiffybot.xyz/api/v1/kaomoji/uwu)   | 𝕌𝕨𝕌    |
| [love](https://api.skiffybot.xyz/api/v1/kaomoji/love) | ヽ(♡‿♡)ノ   |

## 📝 • Lista zmian
> https://github.com/sefinek24/random-emoji/blob/main/CHANGELOG.md

## 🤝 • Pomoc
Otwórz nowy [Issue](https://github.com/sefinek24/random-emoji/issues/new/choose) na GitHubie.  
  
## ⭐ • Dzięki
Daj [gwiazdkę](https://github.com/sefinek24/random-emoji), jeżeli możesz na stronie GiHub.