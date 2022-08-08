const express = require('express');
const bodyparser = require('body-parser');
const cadastro = require('./routers/cadastrar')
const visualizar = require('./routers/visualizar')
const Atualizar = require('./routers/atualizar')
const excluir = require('./routers/excluir')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.use('/servidor',cadastro)
app.use('/servidor',visualizar)
app.use('/servidor',Atualizar)
app.use('/servidor',excluir)


app.listen(PORT, ()=>{
    console.log(`A api está rodando na url localhost:${PORT}`);
})