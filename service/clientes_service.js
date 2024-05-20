const express = require('express')
const clientes_repository = require('../repository/clientes_repository')
const router = express.Router()

router.get('/', async (req, res) => {
    const clientes = await clientes_repository();
    res.send(clientes)
})

module.exports = router
