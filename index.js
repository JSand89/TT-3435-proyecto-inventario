//trae express para usarlo
const express = require("express");

//me crea una variable para usar express
const app = express();

//definimos el puerto
PORT = 3000;

//configuramos el puerto
app.set("port",PORT);

//definimos una ruta y un verbo HTTP, (req,res) creamos una función que tiene como parametros req:request y res:response el request es lo que recibimos el response es lo que respondemos 
app.get("/hola",(req,res)=>{
    res.send("hola mundo")
})

app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
})