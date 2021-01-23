const express=require('express')
const query=require('querystring')
const morgan=require('morgan')
const app=express()
app.use(morgan('combined'))
app.use(express.json())
let PORT=8000
const tokenAuth=569
const dbUsuarios=[  
    {
        id:1,
        user:'Fran',
        pass:123456,
        userName:'Francisco Jimenez'
    },
    {
        id:2,
        user:'Fede',
        pass:1234,
        userName:'Federico Enrriquez'
    }
]
//http://localhost:8000/saludo [GET]
app.get('/saludo',(req,res)=>{

    res.status(200).json({mensaje:'Hola Fede soy GET'})

})

//http://localhost:8000/saludo [POST]
app.post('/saludo',(req,res)=>{

    res.status(200).json({mensaje:'Hola Fede soy POST'})

})

//http://localhost:8000/login [POST]
app.post('/login',(req,res)=>{

    let cabecera=req.headers
    let body=req.body

    if(cabecera.auth && cabecera.auth==tokenAuth ){
        if(body && body.user && body.pass){
           let resultados=dbUsuarios.filter(item=>(item.user==body.user && item.pass==body.pass))
           if (resultados.length>0){
            res.status(200).json({mensaje:`Bienvenido ${resultados[0].userName}` })
           }else{
            res.status(404).json({mensaje:'Usuario o contraseña errada'})    
           }
        }else{
            res.status(400).json({mensaje:'llene todos los campos'})
        }
    }else{
        res.status(401).json({mensaje:'No estas Autorizado'})
    }
})


//http://localhost:8000/despedida [GET]
app.get('/despedida',(req,res)=>{

    res.status(200).json({mensaje:'Ciao Fede'})

})

//http://localhost:8000
app.post('/getUser/:idUser',(req,res)=>{
    let idBuscado=req.params.idUser
    let resultados=dbUsuarios.filter(item=>item.id==idBuscado)
    if (resultados.length>0){
        res.status(200).json({data:resultados[0]})
    } else{
        res.status(404).json({data:null})
    } 

});

app.get('/getUser',(req,res)=>{
    let idBuscado=req.query.idUser
    let resultados=dbUsuarios.filter(item=>item.id==idBuscado)
    if (resultados.length>0){
        res.status(200).json({data:resultados[0]})
    } else{
        res.status(404).json({data:null})
    } 

});


app.listen(PORT,()=>{
    console.log('Servidor corriendo en el puerto 8000');
})