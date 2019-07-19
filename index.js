const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.json());


const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const registerRouter = require('./routes/user');
//order
const orderRouter = require('./routes/order'); //

const sequelize = require('./configs/sequelize');

const Books = require('./models/Books');
const User = require('./models/User');
const Order = require('./models/Order');  //


app.use(homeRouter);
app.use('/books', booksRouter);
app.use('/user', registerRouter); 
app.use('/orders', orderRouter);  //


//port
app.listen(3210, () => {

	console.log('server berjalan')
	sequelize.sync()	

}	
)