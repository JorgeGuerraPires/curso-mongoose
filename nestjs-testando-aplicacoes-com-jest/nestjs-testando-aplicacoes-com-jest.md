---
description: >-
  vamos aprender sobre o NestJS, como foco no teste das aplicações focado na
  parte do Mongoose
---

# NestJS, testando aplicações com Jest

## Introdução

[Express](https://pt.wikipedia.org/wiki/Express.js) foi criando para facilitar a manipulação do [NodeJS](https://pt.wikipedia.org/wiki/Node.js). Apesar de todas a facilidades, alguns pontos deixam a desejar. O NestJS foi criado para tentar melhorar esses pontos, como foi [TypeScript](https://en.wikipedia.org/wiki/TypeScript) para melhorar o [JavaScript](https://pt.wikipedia.org/wiki/JavaScript).  Não vamos entrar nos pormenores, vamos direto ao ponto!😁😁

{% hint style="info" %}
[Documentação oficial](https://docs.nestjs.com/) do NestJS.
{% endhint %}

{% hint style="info" %}
Sugestão de leitura: Learn TypeScript 3 by Building Web Applications: Gain a Solid Understanding of TypeScript, Angular, Vue, React, and NestJS Book by Alexis Georges and Sebastien Dubois
{% endhint %}

Apesar de que não vamos entrar nos pormenores, gostaria deste tutorial ser o mais completo possível, para facilitar o aprendizado!😎😎

## Criando um aplicativo NestJS do zero

Adoraria fazer essa parte grande, para parecer que estou ensinando algo, contudo, somente uma linha de código e você tem uma aplicativo funcional!😂😂 Não dá para ganhar dinheiro dos trouxas assim! 🤣🤣



```text
nest new project-name
```

{% hint style="info" %}
Vai demorar um pouco para instalar, como o Angular. São parecidos de propósito. O NestJS está no meio termo, entre Angular e Express, acho perfeito para os adeptos do _MEAN stack_ como eu!  🥰🥰🥰
{% endhint %}

Esta é uma aplicação funcional, tente:

```text
npm start
```

Vai para a porta `3000`

{% hint style="info" %}
Para quem é programador Angular, você vai se pegar confundindo: onde estou??? frontend ou backend??? parece o mesmo, mas você está no servidor!!! 😯😯😯
{% endhint %}

Contudo, vamos trabalhar com testes, rode:

```text
npm run test:watch
```

{% hint style="info" %}
Lembra no curso que precisávamos ficar criando esses comandos no `package.json`, o pessoal do Nest já cria tudo!! 🙏🙏🙏 Soma o tempo que perdia com isso e vai assisti Netflix, programador também é filho de Deus😍😍

Sugestão: [Scorpion](https://pt.wikipedia.org/wiki/Scorpion_%28s%C3%A9rie_de_televis%C3%A3o%29),  
{% endhint %}

{% hint style="info" %}
Se quiser, pode deixar a aplicação rodando, somente abra uma nova aba. No [visual studio](https://pt.wikipedia.org/wiki/Microsoft_Visual_Studio) isso é bem simples. 
{% endhint %}

![Hierarquia de arquivos depois de terminado a instala&#xE7;&#xE3;o do aplicativo padr&#xE3;o](../.gitbook/assets/fig.1.png)

{% hint style="info" %}
Todo nosso trabalho está na pasta `src`.  Note que os arquivos de testes estão como `spec`, falamos isso no curso, é a mesma coisa! 😁 Note também que temos uma pasta test, esse para contém testes [e2e](https://www.katalon.com/resources-center/blog/end-to-end-e2e-testing/), não vamos abordar isso. 😅
{% endhint %}

![Sequ&#xEA;ncia de eventos, depend&#xEA;ncia entre arquivos, no nosso aplicativo padr&#xE3;o](../.gitbook/assets/fig-2.jpg)

Alguns pontos que merecem atenção🧐🧐: 

* `ts` significa _typescript_ , que é a linguagem base do Nest;
* `service.ts` é um tipo de arquivo conhecido como serviço, base do Angular. Isso facilita o processo de mocar, além de facilitar a conexão como MongoDB por o fazer em _background;_

Abaixo, para efeito de curiosidade, uma arquivo de teste padrão. Como se pode ver, testes já é incorporado no Nest, ou seja, o Nest já nasceu pensando em TDD! 😍😎🥰

```typescript
//app.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

```

{% hint style="info" %}
Linha 18 testa se o método `appController.getHello()`. Tenta mudar ou o esperado, `toBe('Hello World!')`, ou o retornado pelo método🤔🤔🤔 __. Vai falhar, ao menos eu teoria. Essa é uma excelente forma de testar o seu teste!  

Obs. abaixo uma giff da Mônica usando um aspirador para aspirar outro aspirador, seria o caso de um teste para testar o teste; afinal de contas, o teste precisa funcionar, sendo assim, ser testado também!
{% endhint %}

![M&#xF4;nica em Friends com um aspirador para aspirador! ](../.gitbook/assets/monica-giff.gif)

O que vamos fazer é criar nosso próprios testes usando esses arquivos criados de forma automática.



