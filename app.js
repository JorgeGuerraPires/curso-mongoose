// getting-started.js
const mongoose = require('mongoose');


//nosso esquema para gatos fofinhos 
const kittySchema = new mongoose.Schema({ name: String, age: Number });


//compilação do nosso esquema
const Kitten = mongoose.model('Kitten', kittySchema);


module.exports = { Kitten };



