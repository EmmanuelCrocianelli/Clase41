const db = require('../../database/models');

const genresController = {
    // Método para listar todos los géneros
    list: async (req, res) => {
        try {
            const genres = await db.Genre.findAll();
            res.json(genres);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    
    // Método para obtener los detalles de un género por su ID
    detail: async (req, res) => {
        const genreId = req.params.id;
        try {
            const genre = await db.Genre.findByPk(genreId);
            if (!genre) {
                return res.status(404).json({ message: 'Genre not found' });
            }
            res.json(genre);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = genresController;
