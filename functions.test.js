const functions = require("./functions");


// // Async Await
test('Versão 1: nome do usuário deverá ser Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});


// promise
// test('Versão 2: nome do usuário deverá ser Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then((data => expect(data.username).toEqual('Bret')));
// });
