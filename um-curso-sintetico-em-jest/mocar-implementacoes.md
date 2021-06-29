---
description: >-
  Vamos falar de uma das funções mais importantes do sistema Jest para testes de
  unidade: mock, ou, "mocar", como eu e minha aula Carol costumava falar.
---

# Mocar implementações



{% hint style="info" %}
Fonte, [aqui](https://jestjs.io/docs/mock-functions#mock-implementations).
{% endhint %}

A ideia do mock é bem simples: simplesmente substitua a função em questão por outra função. Existem discussões mais teoricas sobre o assunto, prometo trazer em outras páginas.

```javascript
// test.js
jest.mock('./foo'); // this happens automatically with automocking
const foo = require('./foo');

describe("um teste simples de mock", () => {
    it("teste 1", () => {
        // foo is a mock function
        foo.mockImplementation(() => 42);
        expect(foo()).toBe(42);
    })
})

```

```javascript
// foo.js
module.exports = function () {
    // some implementation;
};

```

{% hint style="info" %}
Note que função mocada não tem nada😎🤣
{% endhint %}

{% hint style="info" %}
professor Pasquale, por favor, vamos usar "mocar", "mocado", quebra o galho aí com a gramática portuguesa! 😂
{% endhint %}

