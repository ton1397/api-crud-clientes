const express = require('express')
const atualizar_cliente_repository = require('../repository/atualizar_cliente_repository')
const router = express.Router()
const mandar_arquivo = require('./mandar_arquivo._service');
const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.put('/:id', upload.single('arquivo'), async (req, res) => {
    const { nome, cep, endereco, cidade } = req.body;
    const arquivo = req.file;

    if (!arquivo) {
        let url = req.body.arquivo;
        const cliente = await atualizar_cliente_repository({ nome, cep, url, endereco, cidade, url, id: req.params.id });
        if (cliente === 0) {
            return res.status(404).send('Cliente não encontrado')
        }
        return res.status(200).send('Cliente atualizado com sucesso!')
    }

    mandar_arquivo(arquivo).then(async (url) => {
        const cliente = await atualizar_cliente_repository({ nome, cep, url, endereco, cidade, url, id: req.params.id });
        if (cliente === 0) {
            return res.status(404).send('Cliente não encontrado')
        }
        res.status(200).send('Cliente atualizado com sucesso!')
    }).catch((error) => {
        res.status(500).send(error)
    })
})

module.exports = router
