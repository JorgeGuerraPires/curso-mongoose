require("./Schema.test")

const objectid = require('objectid');
const mongoose = require('mongoose');
require('mockingoose');

describe("test 1: Estamos testando se o ID foi adicionado propriamente", () => {
    it("O id deve ser adicionado automaticamente", () => {

        const esquema = new Blog();

        return esquema.save((err, esquema) => {
            if (err) return console.error(err);
            expect(objectid.isValid(esquema._id)).toBeTruthy();
        })

    })
})
