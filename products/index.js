const express = require('express')
const app = express(); 
const dotenv = require('dotenv')
dotenv.config(); 

const PORT = process.env.PORT || 9001; 

app.use(express.json()); 

app.get('/', (req, res)=>{
	res.json({msg: 'Products Under development'}); 	
})

app.listen(PORT, ()=>{
	console.log(`Products app running on port ${PORT}`); 
})