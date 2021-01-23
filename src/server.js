const express=require('express')
const app=express()
let PORT=8000


//http://localhost:8000/saludo [GET]
app.get('/saludo',(req,res)=>{

    res.status(200).json({mensaje:'Hola Fede soy GET'})

})

//http://localhost:8000/saludo [GET]
app.post('/saludo',(req,res)=>{

    res.status(200).json({mensaje:'Hola Fede soy POST'})

})


//http://localhost:8000/despedida [GET]
app.get('/despedida',(req,res)=>{

    res.status(200).json({mensaje:'Ciao Fede'})

})


//http://localhost:8000


app.listen(PORT,()=>{
    console.log('Servidor corriendo en el puerto 8000');
})