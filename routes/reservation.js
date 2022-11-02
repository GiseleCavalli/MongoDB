
const { Router } = require('express');
const express = require('express');
const router = express.Router();

// RETORNA TODOS AS RESERVAS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna as reservas.'
    });
});

// INSERE AS RESERVAS
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'A reserva foi criado.'
    });
});

// RETORNA OS DADOS DAS RESERVAS
router.get('/:id_reserva', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes da reserva.',
        id_pedido: id
    });

});

// ALTERA AS RESERVAS
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera as reservas.'
    });
});

// DELETA AS RESERVAS
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Reserva excluída.'
    });
});

module.exports = router; 