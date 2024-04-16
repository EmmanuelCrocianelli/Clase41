const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

// Ruta para crear una nueva película
router.post('/movies', moviesController.create);

// Ruta para eliminar una película por su ID
router.delete('/movies/:id', moviesController.destroy);

module.exports = router;
