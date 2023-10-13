const mongoose = require('mongoose');

const url = 'mongodb+srv://nishadgroup4:1234@cluster0.m0f3qp8.mongodb.net/deittracker?retryWrites=true&w=majority'
 
//asyncronous function
mongoose.connect(url)
.then((result) => {
    console.log('database successfully connected')
})
.catch((err) => {
    console.log(err)
    
});
console.log('some statement');
module.exports = mongoose;