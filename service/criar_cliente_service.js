const express = require('express')
const criar_cliente_repository = require('../repository/criar_cliente_repository')
const multer = require('multer');
const mandar_arquivo = require('./mandar_arquivo._service');
const router = express.Router()

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post('/',  upload.single('arquivo'), async (req, res) => {
    const { nome, cep, endereco, cidade } = req.body;
    const arquivo = req.file;

    if (!arquivo) {
        return res.status(400).send('Arquivo não encontrado')
    }

    mandar_arquivo(arquivo).then(async (url) => {
        await criar_cliente_repository({ nome, cep, url, endereco, cidade, url });
        res.send('Cliente criado com sucesso!')
    }).catch((error) => {
        res.status(500).send(error)
    })

    
})

module.exports = router
