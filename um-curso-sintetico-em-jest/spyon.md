---
description: >-
  Vamos falar da função do Jest que pode ser usada para se criar espiões, como
  nos filmes!
---

# SpyOn



![](../.gitbook/assets/espiao.png)

{% hint style="info" %}
Fonte: [documentação](https://jestjs.io/docs/jest-object#jestspyonobject-methodname)&#x20;
{% endhint %}

{% hint style="info" %}
Códigos [aqui](https://github.com/JorgeGuerraPires/curso-mongoose/tree/mock\_spy\_1), contudo, tenta primeiro!&#x20;
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

## Espiando e mocando&#x20;

Geralmente, espião somente olha🧐🧐, contudo, Jest possibilita também de se tomar "providências", vamos precisar disso no nosso teste.&#x20;

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

Na linha 4, além de espiar na linha 3, dizemos o que deve ser feito: estamos reinscrevendo o método sendo espionado. Por que?? Como será visto, essa abordagem de cadeia é necessária para garantir a execução do Mongoose.&#x20;

{% hint style="info" %}
Note que estamos com dois _expects_ no mesmo teste, geralmente isso não é uma boa prática. Faça você mesmo o teste, faça o teste falhar, não vai saber qual _expect_ falhou! 😂🤣
{% endhint %}

## Indo os _extra miles_

### Será se precisamos do encadeamento entre o mock e spy? &#x20;

É resposta é não, contudo, no caso do Mongoose, vamos precisar devido ao funcionamento interno do Mongo, em forma de _queries_.

O código abaixo faz o mesmo, contudo separa cada atividade. Para iniciantes, como eu, eu sugiro usar notações como essa, aberta, onde sabemos onde esta o mock, e onde está o spy.&#x20;

```javascript
test('Estamos testando se conseguimos mocar depois de espiar, versão 2', () => {

    const spy = jest.spyOn(video, 'play');
    video.play.mockImplementation(scalar => 42 + scalar);

    const isPlaying = video.play(10);


    expect(spy).toHaveBeenCalled();// gera o mesmo resultado
    expect(isPlaying).toBe(52); // gera o mesmo resultado


});

```



__

### Será se o spy realmente funciona

Eu gosto muito da curiosidade, mesmo que seja o óbvio.&#x20;

```javascript
test('Testando se o spy realmente sabe que foi chamado', () => {
    const spy = jest.spyOn(video, 'play');
    video.greeting();
    expect(spy).not.toHaveBeenCalled();//vai passar, 
    //o método play nunca foi chamado
});

```

### Testando uma cadeia de métodos

Quando comecei a estudar mock/stubs, tive dificuldades de entender a diferença, as definições pareciam apontar para a mesma coisa, até que li o livro de Christian Johansen.  Esse autor separa claramente o monitoramento do comportamento vs. estado.&#x20;

O problema, como vamos ver no caso do Jest, é que nem sempre é linear essa transformação entre teoria e ferramenta. Por isso defendo de programador ler, para não ficar amarrado a nenhum framework.  Conhecimento flui, ferramentas vai e vem.&#x20;

No nosso caso, o que dificultou meu entendimento do Jest, é que precisamos misturar mock com spy para ter o efeito que Christian Johansen chama de _behavior verification. _Acho que isso seria o famoso mock, e _state verification _seria o stub; mesmo que esteja errado nessa associação, achei fácil de lembrar e desligar meu cérebro de ficar disparando, quando não entendo algo.&#x20;



```javascript
test('See if add was properly called from dispersion', () => {

    const spy = jest.spyOn(functions, 'add').mockImplementation((a, b) => a + b);
    functions.dispersion(2, 2);
    expect(spy.mock.calls[0][1]).toBe(2);//double check if the argument was properly called
})

```

```javascript
const functions =
{
    add: (a, b) => a + b,
    average: (a, b) => functions.add(a, b) / 2,
    dispersion: (a, b) => (functions.average(a, b) - a) / b
}

```

{% hint style="info" %}
Note que o método _dispersion _está dentro de uma cadeia de métodos_._
{% endhint %}

![Espiando e mocando métodos em cadeia com o Jest](<../.gitbook/assets/espiando métodos.jpg>)

{% hint style="info" %}
Códigos [aqui](https://github.com/JorgeGuerraPires/curso-mongoose/tree/mock\_spy\_2).
{% endhint %}

{% hint style="info" %}
Livro mencionado Test-Driven JavaScript Development By Christian Johansen · 2010.&#x20;
{% endhint %}

{% hint style="info" %}
Abri uma discussão no Stack Overflow [aqui](https://stackoverflow.com/questions/68193736/mocking-just-one-function-on-a-function-array-using-jest).

No momento que abri essa discussão, fui votado para baixo (_downvoted_). Quando comecei a usar o Stack Overflow, ficava chateado; agora, depois de ver o que eles votam para baixo, não me sinto mais ofendido. Eu concordo que muito provavelmente essa pessoa é uma "babaca". Eu gosto muito das colocação desse [YouTuber](https://www.youtube.com/watch?v=I\_ZK0t9-llo), contudo, ainda acho que o _Stack Overflow_, vale a pena. [Eu sou editor da Wiki](https://pt.wikipedia.org/wiki/Usu%C3%A1rio\(a\):Jorge\_Guerra\_Pires) por anos, e não foi fácil. Qualquer comunidade online terá esses problemas. Não deixe essas pessoas tiraram o melhor desses fóruns, sempre houve e sempre haverá babacas, agora _e-babacas_.&#x20;
{% endhint %}

![](<../.gitbook/assets/haters internet.jpg>)

{% embed url="https://www.youtube.com/watch?t=305s&v=qfpZ_wtbNbQ" %}
Esse artigo em forma de vídeo
{% endembed %}
