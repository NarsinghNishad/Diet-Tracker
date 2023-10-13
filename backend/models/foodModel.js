const {Schema, model} = require('../connection');

const myschema = new Schema({
    name: String,
    description: String,
    calories: Number,
});

module.exports = model('food', myschema); 
