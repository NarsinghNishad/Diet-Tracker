//import express
const express = require('express');
const userRouter2 = require('./Routers/userRouter2');
const dietRouter = require('./Routers/dietRouter');
const foodRouter = require('./Routers/foodRouter');


const cors = require('cors')
//initialize express
const app = express ();
const port = 5000;
//middlewere

//parse json data
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))
app.use('/user', userRouter2);
app.use('/diet', dietRouter);
app.use('/food', foodRouter);

app.get('/', (req,res) => {
    res.send('responce from express')
});

app.post('/add', (req,res) => {
    res.send('responce from add') 
});  

app.get('/getall', (req,res) => {
    res.send('responce from getall')
});

app.get('/update', (req,res) => {
    res.send('responce from update')
});

app.get('/getbyid', (req,res) => {
    res.send('responce from getbyid')
});

app.get('/delete', (req,res) => {
    res.send('responce from delete')
});

// starting the server
app.listen( port, () => {console.log('express server started') } );