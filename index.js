const express = require('express')
const app = express()
app.get('/',(req,res)=>res.json({message: 'Esta é uma implementação em nodeJs, utilizando o GitHub'}))
app.listen(process.env.PORT || 80)