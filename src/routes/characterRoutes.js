const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/', characterController.getAllCharacters);
router.get('/:id', characterController.getCharacterById);

module.exports = router;
