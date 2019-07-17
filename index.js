const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.json());


const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
//const booksRouter = require('./routes/books');  buat dulu di routes user (login)

//logg
//belum dibuat
//const productRouter = require('./routes/user');

const sequelize = require('./configs/sequelize');

const Books = require('./models/Books');

app.use(homeRouter);
app.use('/books', booksRouter);
//app.use('/user', userRouter);

app.listen(3012, () => {

	console.log('server berjalan')
	sequelize.sync()	

}	)