// src/services/characterService.js
const axios = require('axios');

const getAllCharacters = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
};

const getCharacterById = async (id) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
};

module.exports = {
    getAllCharacters,
    getCharacterById
};
