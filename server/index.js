const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Página Principal')
})

app.get('/contato', (req,res) => {
    res.send('Página de contato')
})

app.get('/produto', (req,res) => {
    res.send('Página de produto')
})

app.listen(8080, () => {
    console.log('Servidor rodando')
})