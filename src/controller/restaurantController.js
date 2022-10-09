const restaurantService = require('../service/restaurantService');

const getAllRestaurants = async (_req, res) => {
	const restaurants = await restaurantService.getAllRestaurants();

	res.status(200).json(restaurants);
};

module.exports = { getAllRestaurants };
