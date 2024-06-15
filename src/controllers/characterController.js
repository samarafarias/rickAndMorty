const CharacterService = require('../services/characterService');

const getAllCharacters = async (req, res) => {
    try {
        const characters = await CharacterService.getAllCharacters();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCharacterById = async (req, res) => {
    try {
        const character = await CharacterService.getCharacterById(req.params.id);
        res.json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCharacters,
    getCharacterById
};
