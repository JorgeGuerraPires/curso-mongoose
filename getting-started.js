// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

//Seja notificado quando a conexão for feita
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("connected");//pode-se escrever o que quiser aqui, o importante é escrever algo
});


//nosso esquema para gatos fofinhos 
const kittySchema = new mongoose.Schema({
    name: String
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

//compilação do nosso esquema
const Kitten = mongoose.model('Kitten', kittySchema);

//Nosso primeiro gato
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

//nota. apesar de termos acesso ao gato, ainda não foi salvo no MongoDB. 
//Isso será essencial para TDD: testes podem ser feitos sem necessidade de se conectar com bando de dados


const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

module.exports = mongoose.model('Kitten', kittySchema);