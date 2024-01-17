const express = require('express')
const app = express(); 
const dotenv = require('dotenv')
const cors = require('cors')
const proxy = require('express-http-proxy')

dotenv.config(); 

const PORT = process.env.PORT || 4001; 

app.use(express.json()); 
app.use(cors())

app.use('/customer', proxy('http://localhost:8000'))                   
app.use('/products', proxy('http://localhost:9000'))                   
app.use('/shopping', proxy('http://localhost:10000'))                   

app.listen(PORT, ()=>{
	console.log(`Gateway running on port ${PORT}`); 
})