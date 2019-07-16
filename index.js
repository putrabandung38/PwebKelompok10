const express = require('express')
const app = express()

app.get('/', (req, res)=>{
	res.send('hello')
})

app.get('/about', (req, res) =>{
	res.send('About kelompok 10')
})

app.listen(3012, () =>
	console.log('server berjalan'))