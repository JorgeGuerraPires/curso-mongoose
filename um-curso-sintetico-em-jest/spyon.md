---
description: >-
  Vamos falar da função do Jest que pode ser usar para se criar espiões, como
  nos filmes!
---

# SpyOn

{% hint style="info" %}
Fonte: [documentação](https://jestjs.io/docs/jest-object#jestspyonobject-methodname) 
{% endhint %}

Essa função é usada para se criar "espiões": uma função que garante que um determinado método é chamado.

Da documentação oficial do Jest:

```javascript
//video.js
const video = {
  play() {
    return true;
  },
};

module.exports = video;
```

Agora, precisamos do teste:

```javascript
//video.test.js
const video = require('./video');

test('plays video', () => {
  const spy = jest.spyOn(video, 'play');
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();// gera o mesmo resultado
  expect(isPlaying).toBe(true); // gera o mesmo resultado

  spy.mockRestore();//reinicia tudo, 
  // spy guarda informações como chamada ao método espionado
});
```

## Espiando e mocando 

Geralmente, espião somente olha🧐🧐, contudo, Jest possibilidade também de tomar "providências", vamos precisar disso no nosso teste.

```javascript
test('plays video, second test. Estamos testando se conseguimos mocar depois de espiar', () => {
    const spy = jest.spyOn(video, 'play').mockImplementation(scalar => 42 + scalar);
    const isPlaying = video.play(10);

    expect(spy).toHaveBeenCalled();// gera o mesmo resultado
    expect(isPlaying).toBe(52); // gera o mesmo resultado

    spy.mockRestore();//reinicia tudo, 
    // spy guarda informações como chamada ao método espionado
});

```

{% hint style="info" %}
Note que estamos com dois _expects_ no mesmo teste, geralmente isso não é uma boa prática. Faça você mesmo o teste, faça o teste falhar, não vai saber qual _expect_ falhou! 😂🤣
{% endhint %}

