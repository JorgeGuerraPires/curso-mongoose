---
description: >-
  Vamos falar da função do Jest que pode ser usada para se criar espiões, como
  nos filmes!
---

# SpyOn



![](../.gitbook/assets/espiao.png)

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

Geralmente, espião somente olha🧐🧐, contudo, Jest possibilita também de se tomar "providências", vamos precisar disso no nosso teste. 

```javascript
test('plays video, second test. Estamos testando se conseguimos mocar depois de espiar', () => {
    //Vamos reenscrever o que será retornado
    const spy = jest.spyOn(video, 'play')
                    .mockImplementation(scalar => 42 + scalar);
    
    const isPlaying = video.play(10);

    expect(spy).toHaveBeenCalled();// gera o mesmo resultado
    expect(isPlaying).toBe(52); // gera o mesmo resultado

    spy.mockRestore();//reinicia tudo, 
    // spy guarda informações como chamada ao método espionado
});

```

Na linha 4, além de espiar na linha 3, dizemos o que deve ser feito: estamos reinscrevendo o método sendo espionado. Por que?? Como será visto, essa abordagem de cadeia é necessária para garantir a execução do Mongoose. 

{% hint style="info" %}
Note que estamos com dois _expects_ no mesmo teste, geralmente isso não é uma boa prática. Faça você mesmo o teste, faça o teste falhar, não vai saber qual _expect_ falhou! 😂🤣
{% endhint %}

## Indo os _extra miles_

### Será se precisamos do encadeamento entre o mock e spy?  

É resposta é não, contudo, no caso do Mongoose, vamos precisar devido ao funcionamento interno do Mongo, em forma de _queries_.

O código abaixo faz o mesmo, contudo separa cada atividade. Para iniciantes, como eu, eu sugiro usar notações como essa, aberta, onde sabemos onde esta o mock, e onde está o spy. 

```javascript
test('Estamos testando se conseguimos mocar depois de espiar, versão 2', () => {

    const spy = jest.spyOn(video, 'play');
    video.play.mockImplementation(scalar => 42 + scalar);

    const isPlaying = video.play(10);


    expect(spy).toHaveBeenCalled();// gera o mesmo resultado
    expect(isPlaying).toBe(52); // gera o mesmo resultado


});

```



\_\_

### Será se o spy realmente funciona

Eu gosto muito da curiosidade, mesmo que seja o óbvio. 

```javascript
test('Testando se o spy realmente sabe que foi chamado', () => {
    const spy = jest.spyOn(video, 'play');
    video.greeting();
    expect(spy).not.toHaveBeenCalled();//vai passar, 
    //o método play nunca foi chamado
});

```



