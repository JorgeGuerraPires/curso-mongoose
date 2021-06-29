//video.test.js
const video = require('./video');

test('plays video', () => {
    const spy = jest.spyOn(video, 'play');
    const isPlaying = video.play();

    expect(spy).toHaveBeenCalled();// gera o mesmo resultado
    expect(isPlaying).toBe(true); // gera o mesmo resultado

    spy.mockRestore();//reinicia tudo, 
    // spy guarda informações como chamada ao método espionado
});

test('plays video, second test. Estamos testando se conseguimos mocar depois de espiar', () => {
    const spy = jest.spyOn(video, 'play').mockImplementation(scalar => 42 + scalar);
    const isPlaying = video.play(10);

    expect(spy).toHaveBeenCalled();// gera o mesmo resultado
    expect(isPlaying).toBe(52); // gera o mesmo resultado

    spy.mockRestore();//reinicia tudo, 
    // spy guarda informações como chamada ao método espionado
});


test('Testando se o spy realmente sabe que foi chamado', () => {
    const spy = jest.spyOn(video, 'play');
    video.greeting();
    expect(spy).not.toHaveBeenCalled();
});

test('Estamos testando se conseguimos mocar depois de espiar, versão 2', () => {

    const spy = jest.spyOn(video, 'play');
    video.play.mockImplementation(scalar => 42 + scalar);

    const isPlaying = video.play(10);


    expect(spy).toHaveBeenCalled();// gera o mesmo resultado
    expect(isPlaying).toBe(52); // gera o mesmo resultado


});


