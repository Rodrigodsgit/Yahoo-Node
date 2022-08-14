const express = require('express');
const app = express();
const question = require('./src/routes/question')


const PORT = 4000;

app.use('/question', question)

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.sendStatus(200)
})
app.listen(PORT,() => {
    console.log(`Servidor na porta ${PORT}`)
})

