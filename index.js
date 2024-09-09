import express from "express"

const app = express()  //creando un objeto nuevo a partir de express que se llama app

app.use(express.json()) //decodifica el cuerpo de nuestra peticiones

//req es una abreviación de request y devuelve una respuesta que es response
app.get("/sumar",(req,res)=>{
    const num1= req.body.num1; //pide el numero uno que está en el cuerpo de la petición
    const num2= req.body.num2; //pide el numero dos que está en el cuerpo de la petición

    const result = num1 + num2

    return res.status(200).json({result})
})


app.get("/restar",(req,res)=>{
    const num1= req.body.num1; //pide el numero uno que está en el cuerpo de la petición
    const num2= req.body.num2; //pide el numero dos que está en el cuerpo de la petición

    const result = num1 - num2

    return res.status(200).json({result})
})



app.get("/multiplicar",(req,res)=>{
    const num1= req.body.num1; //pide el numero uno que está en el cuerpo de la petición
    const num2= req.body.num2; //pide el numero dos que está en el cuerpo de la petición

    const result = num1 * num2

    return res.status(200).json({result})
})



app.get("/dividir",(req,res)=>{
    const num1= req.body.num1; //pide el numero uno que está en el cuerpo de la petición
    const num2= req.body.num2; //pide el numero dos que está en el cuerpo de la petición

    const result = num1 / num2

    return res.status(200).json({result})
})

app.listen(4000,()=>{
    console.log("conexión exitosa.")
})