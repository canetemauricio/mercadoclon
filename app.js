const express = require('express');
const app = express()
const path = require('path')

app.get('/', function(req,res){

let file= path.resolve('vistas/index.html')
    res.sendFile(file)

})


app.get('*', function(req,res) {

if(req.url.endsWith('css')){
    let file = path.resolve('styles'+req.url)
    return res.sendFile(file)
}

let images = ['jpg','jpeg','gif','ping','bmp','webp','svg']
let ext = req.url.split('.')[1]

if (images.includes(ext)){
    let file=path.resolve('images' + req.url)
    return res.sendFile(file)
}

})

// Listen

app.listen(3000, () =>{
    console.log('escuchando en puerto 3000')
})