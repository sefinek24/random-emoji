<div align="center">
    <h1>🐱 O tym module 🙀</h1>
    <p>Zwraca losowe emotikony (nazwa, typ) i kaomoji.</p>
    <a href="https://www.npmjs.com/package/@sefinek/random-emoji" target="_blank" title="random-emoji - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/@sefinek/random-emoji.svg?maxAge=3600" alt="Liczba pobrań">
        <img src="https://img.shields.io/github/issues/sefinek24/random-emoji" alt="Zgłoszone błędy">
        <img src="https://img.shields.io/github/last-commit/sefinek24/random-emoji" alt="Ostatni commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/random-emoji" alt="Aktywność commitów">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/random-emoji" alt="Rozmiar kodu">
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
console.log(`Nazwa: ${emoji.name}; Emoji: ${emoji.content};`);
// > Nazwa: jack-o-lantern; Emoji: 🎃;

// 3. Losowy kot
const cat = random.cats();
console.log(`Nazwa: ${cat.name}; Emoji: ${cat.content};`);
// > Nazwa: smiley_cat; Emoji: 😺;
```

## 😻 • Użycie
| Funkcja                                                                                                         | Opis                                                     |
|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [unicode](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L3)   | Pojedyncza emotikona                                     |
| [emojis](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L6)    | Losowe emoji z nazwą i typem                             |
| [cats](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L10)     | Zwraca losowego kota                                     |
| [hearts](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L14)   | Zwraca losowe serce                                      |
| [foods](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L18)    | Zwraca losowe jedzenie                                   |
| [circles](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L22)  | Zwraca losowe kółko                                      |
| [kaomojis](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L26) | Zwraca losowe kaomoji z [API](https://api.sefinek.net) |

## ⛩️ • Kaomoji
### » Przykład Async/await
```js
const random = require('@sefinek/random-emoji');

(async () => {
    const kaomoji = new random.kaomojis();

    const uwu = await kaomoji.uwu();
    console.log(`Random UwU: ${uwu.message}`);
})();
```

### » Przykład obietnicy
```js
const random = require('@sefinek/random-emoji');
const kaomoji = new random.kaomojis();

kaomoji.love().then(data => console.log(data));
```

### » Zwrócony obiekt przez [API](https://api.sefinek.net)
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
| Function                                            | Example   |
|-----------------------------------------------------|-----------|
| [cat](https://api.sefinek.net/api/v1/kaomoji/cat)   | (=^-ω-^=) |
| [dog](https://api.sefinek.net/api/v1/kaomoji/dog)   | ଘ(∪・ﻌ・∪)ଓ |
| [owo](https://api.sefinek.net/api/v1/kaomoji/owo)   | 𝓞𝔀𝓞    |
| [uwu](https://api.sefinek.net/api/v1/kaomoji/uwu)   | 𝕌𝕨𝕌    |
| [love](https://api.sefinek.net/api/v1/kaomoji/love) | ヽ(♡‿♡)ノ   |

## 📝 • Lista zmian
> https://github.com/sefinek24/random-emoji/blob/main/CHANGELOG.md

## 🤝 • Pomoc
Otwórz nowy [Issue](https://github.com/sefinek24/random-emoji/issues/new/choose) na GitHubie.  
  
## ⭐ • Dzięki
Daj [gwiazdkę](https://github.com/sefinek24/random-emoji), jeżeli możesz na stronie GitHub.