//getting-started.test.js

const Kitten = require("./getting-started");

describe('Testando nosso modelo de gatos fofinhos', () => {
    it('Estamos testando se o nome é salvo no esquema', () => {
        const name = 'Silence';
        const silence = new Kitten({ name: name });
        expect(silence.name).toBe(name);
    })
})


