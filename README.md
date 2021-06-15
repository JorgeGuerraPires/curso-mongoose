---
description: >-
  Nessa página, vamos começar a usar o Mongoose. Mongoose, de forma bem simples,
  é uma biblioteca desenvolvida para facilitar a interface entre MongoDB e
  Node.js.
---

# Ligando os motores

## Dependências 

IMP. _**certifique-se de que você tem o MongoDB e Node.js instalados**_.

Vamos usar o  `npm` como instalador e gerenciador de pacotes. Uma alternativa seria o `yarn`. Com exceção de diferenças iniciais, quando o `yarn` foi lançado,  ou quando o usamos React, os dois gerenciadores de pacotes parecem o mesmo. Eu, pessoalmente, salve casos pontuais, não vejo a diferença.  

Crie um `package.json`, antes de instalar o Mongoose, isso vai ajudar depois a gerenciar tudo. 

```
$ npm init 
```

{% hint style="info" %}
 Por agora, deixar tudo no _default_. Somente vai confirmando tudo como está. 
{% endhint %}

Agora, instala o Mongoose! 😀😀

```bash
npm install mongoose 
```

Seu arquivo `package.json` deve ter o seguinte formado, para efeito de clareza:

{% code title="package.json" %}
```javascript
{
  "name": "sandbox-1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "mongoose": "^5.12.13"
  }
}
```
{% endcode %}

{% hint style="info" %}
Estamos sendo detalhistas agora, mas quando avançamos mais, será impraticável esse nível de detalhamento nas explicações, consultar os vídeos do curso relacionados à essa documentação na Udemy. 
{% endhint %}

## Primeiro exemplo, simples: salvando os gatos para compartilhar no WhatsApp

Vamos criar uma aplicação que salva gatos🐱🐱🐱, perfeito para compartilhar no WhatsApp!😂😂😂 Gatinhos peludos e com olhos grandes. 

### Preparação inicial

```javascript
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

//Seja notificado quando a conexão for feita
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("connected");//pode-se escrever o que quiser aqui, o importante é escrever algo
});

```

{% hint style="info" %}
getting-started.js é um único documento. Em um cenário real, e vamos fazer isso durante o curso, deve-se separar a conexão do banco de dados do resto da aplicação.
{% endhint %}

{% hint style="info" %}
Na linha 10, estamos fazendo um console.log para dizer que estamos conectados, isso ajuda ao desenvolver saber se a conexão foi feita. No NestJS, isso não é necessário, a conexão foi toda automatizada em forma de serviço, uma das grandes vantagens do NestJS sobre o Express. 
{% endhint %}

### Nosso primeiro esquema

Vamos fazer nosso primeiro esquema, não me refiro a achar uma forma de ganhar vantagens nos outros 😂😂😂. 

MongoDB é um banco de dados não relacional \(NoSQL\). Pode-se fazer qualquer coisa no sentido de formato, esqueça o Excel e comece a pensar orientado a objetos. Você pode salvar no mesmo espaço um gato com 3 patas e um gato com duas, um gato que tem pedigree, e outro que não tem, um gato que tem dono, e outro que não tem. Por agora, não vou entrar nos méritos dessa nova forma de guardar informação, somente aceite que existem vantagens, e desvantagens.... no mundo da programação se diz "_no free lunch_". 

{% hint style="info" %}
Sugestão de leitura, inglês: [NoSQL at Netflix](https://netflixtechblog.com/nosql-at-netflix-e937b660b4c) , [Big Data Is The New Normal](https://www.mongodb.com/blog/post/big-data-new-normal)
{% endhint %}

{% hint style="info" %}
Você consegue investir na MongoDB através da bolsa de valores brasileira, através de BDRs. Código: M1DB34. Atenção. Isso é renda variável! 😅😅😅
{% endhint %}

```javascript
//nosso esquema para gatos fofinhos 
const kittySchema = new mongoose.Schema({
    name: String
});

```

Estamos dizendo para o Mongoose que os gatos fofinhos precisam de um nome. 

{% hint style="info" %}
Isso que estamos fazendo é para o Mongoose, não para o MongoDB, para o Mongo, isso não importa. Lembre-se que o Mongo basicamente aceita qualquer coisa, desde que esteja em formato JSON. Se no futuro, além de nome, você quiser acrescentar o dono, somente mude o esquema, não precisa mudar mais nada. Parece-me, baseado em leituras e tutoriais que achei por acaso no YouTube, que bancos de dados SQL apresentam problemas quando precisamos mudar o banco de dados de formato, exigindo o que eles chamam de _Migrations_. Leitura sugerida, inglês: "[Database Migration: What It Is and How to Do It](https://www.cloudbees.com/blog/database-migration)"
{% endhint %}

Agora precisamos dizer para o Mongoose: "salva aí pô!". Em linguagem do Mongoose:

```javascript
//compilação do nosso esquema
const Kitten = mongoose.model('Kitten', kittySchema);

```

Isso cria um esquema que pode inclusive ser acessado de outras partes da aplicação, como uma variável global. Legal não?!🙃 Calma aí que o Brasil ainda é nosso, vamos usar isso em combate no futuro!

Finalmente, fechamos o ciclo:

```javascript
//Nosso primeiro gato
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // imprimi: 'Silence'

```

Isso fecha o ciclo. 

{% hint style="info" %}
Apesar de termos acesso ao gato, ainda não foi salvo no MongoDB. Isso será essencial para TDD: testes podem ser feitos sem necessidade de se conectar com bando de dados. Salvar, de acordo com minha experiência tanto em primeira mão quanto respondendo perguntas no Stack Overflow, pode causar confusão. 
{% endhint %}

{% hint style="info" %}
Certas coisas precisamos estressar sempre: não precisamos desses passos para usar o Mongo, contudo, isso vai facilitar nossas vidas no futuro. Participei de uma minidiscussão informal no _Stack Overflow_ sobre isso: eu acho que é mais fácil usar o Mongoose, contudo, concordo que gera uma curva de aprendizado inicial, e isso pode desencorajar que quer resultados rápidos. Mesmo o TDD, pode ser feito sem o Mongoose! 
{% endhint %}

### Nosso primeiro método

Para mim, como programador Java, com muito orgulho, adorei essa funcionalidade. Basicamente, pode-se criar métodos para manipular cada campo, or "_path_" usando a linguagem do Mongo.

{% hint style="info" %}
Java é uma linguagem orientada a objeto. Uma das marcas mais fortes do Java é que as classes, além ter terem atributos, também possuem seus própria métodos de manipulação. Isso é interessante no processo de encapsulamento. No caso do Mongoose, isso cria a possibilidade de se evitar ficar repetindo linhas de códigos, como, digamos, criptografar um campo sempre que for salvo. 
{% endhint %}

Caso esteja seguindo por aqui, antes da compilação do esquema, coloque:

```javascript
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

```

{% hint style="info" %}
Precisa ser antes da compilação do esquema, caso contrário vai dar erro
{% endhint %}

Depois da compilação do esquema, coloque:

```javascript
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

```

Isso vai imprimir a mensagem "Meow name is fluffy". 

{% hint style="info" %}
Tente mudar no nome do gato e veja o que ocorre! 🙃
{% endhint %}

