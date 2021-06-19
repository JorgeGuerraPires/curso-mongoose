require("./app");
const mongoose = require('mongoose');
const Kitten = mongoose.model("Kitten");
const mockingoose = require('mockingoose');




describe('Testando nosso modelo de gatos fofinhos', () => {

    it('Estamos testando se o nome é salvo no esquema', () => {
        const name = 'Silence';
        const silence = new Kitten({ name: name });
        expect(silence.name).toBe(name);
    })

    it('Estamos testando se é salvo no esquema algo que não existe', () => {
        const age = 10;
        const silence = new Kitten({ age });
        expect(silence.age).toBe(age);
    })
})

describe('Testando os métodos associados ao nosso modelo de gatos fofinhos', () => {

    it('Estamos testando se o método greeting está funcionando', () => {
        const name = 'Silence';
        const silence = new Kitten({ name: name });

        expect(silence.greeting()).toBe(`Miau, meu nome é ${name}`);
    })
})


describe('Testando o método save, built-in do Mongoose', () => {

    /**test 1: estamos testando se o método greeting ainda funciona depois de ser retornado  
    */
    it('Estamos testando se o método greeting está funcionando depois de salvar no Mongo', () => {

        const name = 'Silence';
        const doc = { name: name };
        const silence = new Kitten(doc);

        mockingoose(Kitten).toReturn(doc, 'save');

        silence.save((err, fluffy) => {
            if (err) return console.error(err);
            expect(fluffy.greeting()).toBe(`Miau, meu nome é ${name}`);
        })
    })

    //app.test.js
    /**teste 2: será se o id devolvido respeita os padrões do MongoDB?*/

    it('Estamos testando se o _id bate depois de salvar', () => {
        const name = 'Silence';
        const doc = { name: name };
        const silence = new Kitten({ name: name });

        mockingoose(Kitten).toReturn(doc, 'save');

        silence.save(function (err, fluffy) {
            if (err) return console.error(err);
            expect(objectid.isValid(fluffy._id)).toBeTruthy();
        })
    })
})

