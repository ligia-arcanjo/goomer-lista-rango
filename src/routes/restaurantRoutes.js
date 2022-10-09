const express = require('express');
const restaurantController = require('../controller/restaurantController');

const router = express.Router();

// Listar todos os restaurantes
router.get('/', restaurantController.getAllRestaurants);

// Cadastrar novos restaurantes
// router.post();

// Listar os dados de um restaurante
// router.get(); // by id

// Alterar os dados um restaurante
// router.put();

// Excluir um restaurante
// router.delete();

module.exports = router;
