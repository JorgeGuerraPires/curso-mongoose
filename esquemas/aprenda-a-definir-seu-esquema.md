---
description: 'Nesta página, vamos aprender a definir nosso esquema em Mongoose.'
---

# Definindo seu esquema

## Introdução 

Em Mongoose, tudo começa com um Esquema \(_Schema_\). Cada esquema mapeia para uma coleção no MongoDB. Adicionalmente, esse esquema defini o formato da coleção e documentos. Quando se trabalha com Mongoose, grande parte dos detalhes do MongoDB são abstraídos, isso fica ainda mais forte se usarmos [NestJS](https://docs.nestjs.com/recipes/mongodb), que vamos falar sobre no curso; contudo, um passo de cada vez😎 . 

{% hint style="info" %}
Sugestão de leitura, focado no MongoDB: Shannon Bradshaw, Eoin Brazil, Kristina Chodorow. MongoDB: The Definitive Guide: Powerful and Scalable Data Storage 3rd Edição.
{% endhint %}

## Nosso primeiríssimo esquema😎

Dizem que  o primeiro sempre fica: o primeiro beijo💋, o primeiro programa de computador, a primeira língua. Sendo assim, vamos fazer direito. Nosso primeiro esquema abaixo!  😊

Neste esquema, estamos criando um documento que possui vários campos. 



```javascript
const blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

```

* Cada linha define um _path,_ vamos chamar de atributos em PT. Cada atributo tem seu tipo, ou seja, Mongoose é "tipado", como Java. Caso tente chamar tipos diferentes, aparecerá uma mensagem de erro, e não conseguirá salvar;  
* Na linha 5, temos um vetor de objetos JSON;
* Note na linha 6 o uso da palavra `default`, isso é uma forma de se colocar um valor caso não seja passado nada; Isso pode ser útil em situações onde ter um valor é importante, mesmo que seja um padrão;  
* Note na linha 8 um objeto dentro de um atributo, deverá ser acessado como `meta.votes`, como exemplo. Existem algumas desvantagens de se declarar atributos desta forma, ver documentação oficial para mais detalhes!

{% hint style="info" %}
 Desnecessário repetir, estamos nos baseando na [documentação oficial](https://mongoosejs.com/docs/guide.html)!
{% endhint %}

## Criando seu modelo

Criamos nosso esquema. E agora?🤔 Agora precisamos dizer para o Mongoose salvar nosso esquema!

Usamos o comando `mongoose.model(modelName, schema)`. 

Onde: 

* `modelName`é o nome do modelo, será salvo internamente no Mongoose, podendo ser acessado como variável global. O padrão é ser sempre maiúsculo, mas não obrigatório; 
* `schema`é o esquema que criamos;

```javascript
const Blog = mongoose.model('Blog', blogSchema);
//Estamos prontos para trabalhar
```

## ID

Lembra no "Ligando os motores"

