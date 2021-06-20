const { expect } = require("@jest/globals");
const functions = require("./function");


describe("Testando funções do canivete suiço", () => {
    it("Testando a função que soma", () => {
        expect(functions.soma(2, 2)).toBe(4);
    })

    it("Vamos testar uma função que soma: o que não é", () => {
        expect(functions.soma(2, 2)).not.toBe(5);
    })

    // toBeNull
    it('Deve ser  null', () => {
        expect(functions.isNull()).toBeNull();
    });

    // toBeFalsy
    it('Deve ser falsy', () => {
        expect(functions.verificador(false)).toBeFalsy();
    });

    // toEqual
    it('Usuário retornado deve ser Jorge Pires em forma de JSON', () => {
        expect(functions.CriarUsuario()).toEqual({
            firstName: 'Jorge',
            lastName: 'Pires'
        });
    });

    // Menor do que
    it('Deve ser menor do que', () => {
        const load1 = 800;
        const load2 = 800;
        expect(load1 + load2).toBeLessThanOrEqual(1600);
    });
    // Regex, pode ser útil para testar id do mongoose caso modifique o id
    it('Não existe s em Jorge', () => {
        expect('Jorge').not.toMatch(/S/s);
    });

    // JSON
    it('Testando para admins', () => {
        usernames = { name1: 'Pedro', name2: 'Pedrosa', name3: 'admin' };
        expect(usernames).toMatchObject({ name3: 'admin' });
    });

    // Arrays
    it('Testando para admins', () => {
        usernames = ['john', 'karen', 'admin'];
        expect(usernames).toContain('admin');
    });
})