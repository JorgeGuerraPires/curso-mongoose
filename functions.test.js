//jest.mock("./functions"); // this happens automatically with automocking

const functions = require("./functions");

test('See if add was properly called', () => {

    const spy = jest.spyOn(functions, 'add').mockImplementation((a, b) => a + b);
    functions.average(2, 2);
    expect(spy.mock.calls[0][1]).toBe(2);//double check if the argument was properly called
})


test('See if average is properly called using mock', () => {

    jest.spyOn(functions, 'add').mockImplementation((a, b) => a + b + 1);
    const average = functions.average(2, 2);
    expect(average).not.toBe(2); //double check if mock was called instead
})

test('See if add was properly called from dispersion', () => {

    const spy = jest.spyOn(functions, 'add').mockImplementation((a, b) => a + b);
    functions.dispersion(2, 2);
    expect(spy.mock.calls[0][1]).toBe(2);//double check if the argument was properly called
})


