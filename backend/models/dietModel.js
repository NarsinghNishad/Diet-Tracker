
const { Schema, model } = require('../connection');

const myschema = new Schema
    ({
        name: String,
        user: String,
        fooditems: Array,
        createdAt: Date,
    });

module.exports = model('diet', myschema);