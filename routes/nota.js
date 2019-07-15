'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var NotaController = require('../controllers/nota');

// Llamamos al router
var api = express.Router();
 
// POST para guardar nuevos documentos
api.post('/nota', NotaController.saveNota);
 
// GET para conseguir documentos
api.get('/notas', NotaController.getNotas);
api.get('/nota/:id', NotaController.getNota);
 
// PUT para actualizar documentos
api.put('/nota/:id', NotaController.updateNota);
 
// DELETE para eliminar documentos
api.delete('/nota/:id', NotaController.deleteNota);
 
module.exports = api;
