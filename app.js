// getting-started.js
const mongoose = require('mongoose');


//nosso esquema para gatos fofinhos 
const kittySchema = new mongoose.Schema({ name: String, age: Number });


kittySchema.methods.greeting = function () {
    return `Miau, meu nome é ${this.name}`;
}


//compilação do nosso esquema
mongoose.model('Kitten', kittySchema);


//module.exports = Kitten;



