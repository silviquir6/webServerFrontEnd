const express = require('express')
require ('dotenv').config();
const app = express()

const port= process.env.PORT;
//contenido
app.use(express.static('public'));
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port)