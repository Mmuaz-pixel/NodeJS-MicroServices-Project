const express = require('express')
const app = express(); 
const dotenv = require('dotenv')
dotenv.config(); 

const PORT = process.env.PORT || 10001; 

app.use(express.json()); 

app.get('/', (req, res)=>{
	res.json({msg: 'Shopping Under development'}); 	
})

app.listen(PORT, ()=>{
	console.log(`Shopping app running on port ${PORT}`); 
})