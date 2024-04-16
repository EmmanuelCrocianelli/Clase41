const db = require('../../database/models');

const Movies = db.Movie;

const moviesController = {
    // Método para crear una nueva película
    create: async (req, res) => {
        try {
            const newMovie = await Movies.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            });
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Método para eliminar una película por su ID
    destroy: async (req, res) => {
        const movieId = req.params.id;
        try {
            const deletedMovie = await Movies.findByPk(movieId);
            if (!deletedMovie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            await deletedMovie.destroy();
            res.json(deletedMovie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = moviesController;
