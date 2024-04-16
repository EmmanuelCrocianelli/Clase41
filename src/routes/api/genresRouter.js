const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');

// Ruta para listar todos los géneros
router.get('/genres', genresController.list);

// Ruta para obtener los detalles de un género por su ID
router.get('/genres/:id', genresController.detail);

module.exports = router;
