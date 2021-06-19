---
description: 'Nesta página, vamos aprender a definir nosso esquema em Mongoose.'
---

# Definindo seu esquema

## Introdução 

Em Mongoose, tudo começa com um Esquema \(_Schema_\). Cada esquema mapeia para uma coleção no MongoDB. Adicionalmente, esse esquema defini o formato da coleção e documentos. Quando trabalha com Mongoose, grande parte dos detalhes do MongoDB é abstraído, isso fica ainda mais forte se usarmos [NestJS](https://docs.nestjs.com/recipes/mongodb), que vamos falar sobre no curso; contudo, um passo de cada vez😎 . 

{% hint style="info" %}
Sugestão de leitura, focado no MongoDB: Shannon Bradshaw, Eoin Brazil, Kristina Chodorow. MongoDB: The Definitive Guide: Powerful and Scalable Data Storage 3rd Edição.
{% endhint %}

## Nosso primeiríssimo esquema😎

Dizem que  o primeiro sempre fica: o primeiro beijo💋, o primeiro programa de computador, a primeira língua. Sendo assim, vamos fazer direito. Nosso primeiro esquema abaixo!  😊



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

* Cada linha defini um _path,_ vamos chamar de atributos em PT. Cada atributo tem seu tipo, ou seja, Mongoose é "tipado", como Java. 
* Na linha 5, temos um vetor de objetos JSON;
* Note na linha 6 o uso da palavra `default`, isso é uma forma de colocar um valor caso não seja passado nada; 
* Note na linha 8 um objeto dentro de um atributo, deverá ser acessado como `meta.votes`, como exemplo.

{% hint style="info" %}
 Desnecessário repetir, estamos nos baseando na [documentação oficial](https://mongoosejs.com/docs/guide.html)!
{% endhint %}

Once you're strong enough, save the world:

{% code title="hello.sh" %}
```bash
# Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```
{% endcode %}



