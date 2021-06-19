require("./app");
const mongoose = require('mongoose');
const Kitten = mongoose.model("Kitten");



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