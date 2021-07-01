---
description: 'Nesta página, vamos testar um serviço (service) em NestJS.'
---

# Testando um serviço em NestJS

![Frase atribu&#xED;da a Bruce Lee ](../.gitbook/assets/bruce-lee.jpg)

É muito fácil justificar um ponto de vista errado com frases de efeito, especialmente se for de alguém famoso. Como diz Jim Tamm no contexto de ser defensivo, em [Ted talk](https://www.youtube.com/watch?v=vjSTNv4gyMM): "seria como colocar creme em bosta de cachorro" \[tradução livre, adaptado\]😂

O motivo que estou falando isso é porque essa frase geralmente atribuída a Bruce Lee diz bem o que estou por ensinar: prefiro usar a mesma ferramenta várias vezes, como já usamos o mock sem spy, vamos usar sem spy novamente. Estava preparando essa aula, quando vi que o código original que usava estava usando spy sem necessidade, pelo menos consegui resolver o problema sem spy. Caso você queira usar spy, não há nada de errado nisso, pode ser até mesmo um exercício. Contudo, não vamos usar spy! Prefiro ser temido por treinar o mesmo chute 1.000 vezes! 😁

{% hint style="info" %}
Criei uma seção sobe spy [aqui](../um-curso-sintetico-em-jest/spyon.md).
{% endhint %}

{% hint style="info" %}
Códigos [aqui](https://github.com/JorgeGuerraPires/curso-mongoose/tree/mock_service_nestjs).
{% endhint %}

Objetivo: testar, mocando, o serviço abaixo.



```typescript
  //dog.service.ts
  //Testando....
  findAll(): Promise<Dog[]> {
    return this.catModel.find().exec();
  }

```

{% hint style="info" %}
IMP. como ver no nosso código no GitHub, não tem nenhuma conexão com o Mongo. Gostaria de aprender a conectar ao Mongo do NestJS. [Aqui](https://github.com/JorgeGuerraPires/nest/tree/master/sample/06-mongoose) um exemplo oficial😎😎😎
{% endhint %}

```typescript
  //--------------------------------------------------------
  //Começa os testes
  it('should return all dogs', async () => {
    const dogs = await service.findAll();
    expect(dogs).toEqual(canil);
  });
  //---------------------------------------------------------

```

o mock foi colocado no `beforeEach`

```typescript
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogService,
        {
          provide: getModelToken('Dog'),
          useValue:
          {
            find: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValueOnce(canil)
            } as any)
            //um cuidado se deve tomar aqui, estamos mocando não o método do service, 
            //mas sim o métdo chamado pelo 
            //método do servico, ou seja, o método em cadeia do Mongoose
          }
        }],
    }).compile();

```

{% hint style="info" %}
O original usava spy+mock. Ver [aqui](https://github.com/JorgeGuerraPires/testing-nestjs/blob/master/apps/mongo-sample/src/cat/cat.service.spec.ts).
{% endhint %}



