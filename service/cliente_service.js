const express = require('express')
const cliente_repository = require('../repository/cliente_repository')
const router = express.Router()

router.get('/:id', async (req, res) => {
    let cliente = await cliente_repository(req.params.id);
    cliente = cliente.length ? cliente[0] : null;
    res.send(cliente)
})

module.exports = router
