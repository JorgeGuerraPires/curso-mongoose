---
description: 'Nessa página, de caráter mais teórico, vamos aprender sobre o Mongoose.'
---

# Mongoose

De acordo com uma sondagem que fiz quando pensava em escrever um livro sobre MEAN stack, infelizmente não consegui achar o resultado para compartilhar com vocês, fiz no Facebook, em uma comunidade em inglês do _MEAN stack_, **"programador não gosta de ler"**. 

Infelizmente, acho isso uma pena😌😌 e realmente acho que deveriam ler mais. Um exemplo seria o TDD, que seria um nível de leitura, nesse caso, dos códigos.  Eu também fico ansioso para ver os códigos rodando, mas coloquei na minha cabeça de programar que "a pressa é inimiga da perfeição". 

Recentemente, tive de "enfrentar" meus supervisores de pós-doutoramento, sempre me apresando; desinstalei o WhatsApp para poder trabalhar, somente assim consegui avançar. Note que de forma alguma estou indo contra a ideia de _Startups_, nesse caso realmente a presa pode ser melhor, mas seria uma presa intencional, como diz Steve Blank "_get out of the building_" 😂😂😂. 

Refiro-me a uma presa sem necessidade, sem compromisso com algo, somente para terminar logo. Lembrei de uma imagem que infelizmente não salvei, vi no _Facebook_, achar isso vai ser pior do que achar algo no meu computador. Basicamente, se comparavam um doutor com um programador: o programar pensava em desisti no primeiro obstáculo, ao passo que o doutorado se leva anos para terminar.

{% hint style="info" %}
 "Ensinar programação é um desafio porque programação, como eu vejo é “10% de inspiração e 90% de transpiração.” Usando Thomas Edison como ponto de argumentação. Posso ensinar o básico. Como disse Cal Newport, professor do MIT em programação, em [Deep Work](https://www.amazon.com.br/Deep-Work-Focused-Success-Distracted/dp/1455586692), agora aprender virou o mais importante no mundo, em especial no mundo da [\#programação](https://www.linkedin.com/feed/hashtag/?keywords=programa%C3%A7%C3%A3o&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6810554764221276160) onde tudo muda muito rápido." fonte: [meu perfil](https://www.linkedin.com/posts/jorgeguerrapires_jorge-guerra-jardim-guanabara-aprenda-activity-6810554764221276160-QTl5) no Linkedin
{% endhint %}

{% hint style="info" %}
Para os que gostam conceito de _startups_, além do conteúdo desse curso, também estudei o conceito de startups no meu pós-doutoramento. Ver [Alguns insights em Startups em Healthcare](https://www.youtube.com/watch?v=Ek36DmikYP0). 
{% endhint %}

Conversa à parte, vamos falar do _Mongoose_.

{% hint style="info" %}
Mongoose foi criando pela mesma empresa do MongoDB. O objetivo do Mongoose é oferecer uma forma de se modelar os dados dentro da aplicação, sem necessariamente perder a flexibilidade do MongoDB. 
{% endhint %}

{% hint style="info" %}
"Mongoose cria uma forma direta, focada em esquemas, para se modelar os dados da sua aplicação. Isso inclui funções como tipos embutidos, validação, pedidos, e mais " \[tradução livre\]

Fonte: [https://mongoosejs.com/](https://mongoosejs.com/)
{% endhint %}

## Modelagem de dados

No contexto do Mongoose, modelagem de dados é quando se defini o que estará em um banco de dados, e como estará. Você pode definir nesse processo informações como tipo do dado, se é obrigatório, limites...fazemos isso no curso, contudo, não de forma exaustiva. Uma das consequência desse processo, e fazemos isso no curso, é que o próprio Mongoose, usando o esquema, filtra o que será salvo. Considere um cenário de `req.body` cheio de informações inúteis, somente o que bate com a modelagem será salvo. 

{% hint style="success" %}
Ver aula 17 "Fazendo nosso primeiro teste com Jest, part 2"  \(35:42\). Fiz um corte [aqui](https://www.youtube.com/watch?v=vSpDF5AuGR0).
{% endhint %}

{% hint style="info" %}
Vamos usar a notação yy:xx para designar o ponto no vídeo que estamos nos referindo, onde yy é o minuto, e xx os segundos. 
{% endhint %}

```javascript
//nosso esquema para gatos fofinhos 
const kittySchema = new mongoose.Schema({
    name: String
});
```

No esquema acima, declaramos para o Mongoose que queremos que os gatos tenham nome, somente isso. 

### Testando se salva algo que não existe no esquema

Testamos no curso o cenário de tentarmos salvar a idade, isso falha!

```javascript
    it('Estamos testando se é salvo no esquema algo que não existe', () => {
        const age = 10;
        const silence = new Kitten({ age });
        expect(silence.age).toBeUndefined();
    })
})

```

{% hint style="info" %}
Jest Matcher usado [`toBeUndefined()`](https://jestjs.io/docs/expect#tobeundefined)\`\`
{% endhint %}

{% hint style="info" %}
Fonte [aqui](https://github.com/JorgeGuerraPires/curso-mongoose/tree/module_4). 
{% endhint %}

![Vis&#xE3;o esquem&#xE1;tica de como funciona o Mongoose. Fonte: adaptado de Simon&amp;Cliver \(2019\).  ](../.gitbook/assets/mongoose-mongodb-diagrama.jpg)



