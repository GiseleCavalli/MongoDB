
const { Router } = require('express');
const express = require('express');
const router = express.Router();

// RETORNA TODOS OS QUARTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os quartos.'
    });
});

// INSERE OS QUARTOS
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'O quarto foi criado.'
    });
});

// RETORNA OS DADOS DOS QUARTOS
router.get('/:id_quarto', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes do quarto.',
        id_pedido: id
    });

});

// ALTERA OS QUARTOS
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera os quartos.'
    });
});

// DELETA OS QUARTOS
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Quarto excluída.'
    });
});

module.exports = router; 