const express = require('express')
const app = express(); 
const dotenv = require('dotenv')
dotenv.config(); 

const PORT = process.env.PORT || 8001; 

app.use(express.json()); 

app.get('/', (req, res)=>{
	res.json({msg: 'Customer Under development'}); 	
})

app.listen(PORT, ()=>{
	console.log(`Customers app running on port ${PORT}`); 
})