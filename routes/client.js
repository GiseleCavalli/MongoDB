
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Client = require("../schema/clientSchema");

// RETORNA TODOS OS CLIENTES
router.get('/', (req, res, next) => {
    try {
        const clients =  Client.find();
        res.status(200).json(clients);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: error });
      }
});

// INSERE OS CLIENTES
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Cliente criado.'
    });
});

// RETORNA OS DADOS DOS CLIENTES
router.get('/:id_cliente', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes do cliente.',
        id_pedido: id
    });

});

// ALTERA OS CLIENTES
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera os clientes.'
    });
});

// DELETA OS CLIENTES
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Cliente excluída.'
    });
});

module.exports = router; 