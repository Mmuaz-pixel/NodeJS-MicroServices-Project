const express = require('express')
const app = express(); 
const dotenv = require('dotenv')
const cors = require('cors')
const proxy = require('express-http-proxy')

dotenv.config(); 

const PORT = process.env.PORT || 4000; 

app.use(express.json()); 
app.use(cors())

app.use('/customer', proxy('http://localhost:8001'))                   
app.use('/products', proxy('http://localhost:8002'))                   
app.use('/shopping', proxy('http://localhost:8003'))                   

app.listen(PORT, ()=>{
	console.log(`Gateway running on port ${PORT}`); 
})