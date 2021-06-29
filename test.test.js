// test.js
jest.mock('./foo'); // this happens automatically with automocking
const foo = require('./foo');

describe("um teste simples de mock", () => {
    it("teste 1", () => {
        // foo is a mock function
        foo.mockImplementation(() => 42);
        expect(foo()).toBe(42);
    })
})

