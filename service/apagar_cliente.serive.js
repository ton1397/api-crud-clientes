const express = require('express')
const apagar_cliente_repository = require('../repository/apagar_cliente_repository')
const router = express.Router()

router.delete('/:id', async (req, res) => {
    let cliente = await apagar_cliente_repository(req.params.id);
    cliente = cliente > 0 ? res.send('Cliente apagado com sucesso!') : res.status(404).send('Cliente não encontrado!');
})

module.exports = router
