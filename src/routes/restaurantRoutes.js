const express = require('express');
const restaurantController = require('../controller/restaurantController');

const router = express.Router();

// Listar todos os restaurantes
router.get('/', restaurantController.getAllRestaurants);

// Cadastrar novos restaurantes
// router.post();

// Listar os dados de um restaurante pelo id
router.get('/:id', restaurantController.getRestaurantById);

// Alterar os dados um restaurante
// router.put();

// Excluir um restaurante
// router.delete();

module.exports = router;
