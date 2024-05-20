const express = require('express')
const path = require('path');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

app.use(cors());

app.use(bodyParser.json());


app.use('/cliente', require('./service/clientes_service'))

app.use('/cliente', require('./service/cliente_service'))

app.use('/cliente', require('./service/criar_cliente_service'))

app.use('/cliente', require('./service/atualizar_cliente_service'))

app.use('/cliente', require('./service/apagar_cliente.serive'))


app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`)
})