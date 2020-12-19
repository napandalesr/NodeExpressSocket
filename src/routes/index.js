const express = require('express');
const routes= express.Router();
//Ruta principal
routes.get('/',(req,res)=>{
    res.render('index')
})

module.exports=routes;