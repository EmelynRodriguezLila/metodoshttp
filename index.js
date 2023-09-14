const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('Hola Get')
}) 

app.post('/', (req, res) => {
    res.send('Hola Post')
})

app.put('/', (req, res) => {
    res.send('Hola Put')
}) 

app.patch('/', (req, res) => {
    res.send('Hola Patch')
}) 

app.delete('/', (req, res) => {
    res.send('Hola Delete')
}) 

/**
 * 
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})