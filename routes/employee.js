
const { Router } = require('express');
const express = require('express');
const router = express.Router();

// RETORNA TODOS OS FUNCIONÁRIOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os funcionários.'
    });
});

// INSERE OS FUNCIONÁRIOS
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Funcionário criado.'
    });
});

// RETORNA OS DADOS DOS FUNCIONÁRIOS
router.get('/:id_quarto', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes dos funcionários.',
        id_pedido: id
    });

});

// ALTERA OS FUNCIONÁRIOS
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera o funcionário.'
    });
});

// DELETA OS FUNCIONÁRIOS
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Funcionário excluído.'
    });
});

module.exports = router; 