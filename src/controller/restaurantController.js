const restaurantService = require('../service/restaurantService');

const getAllRestaurants = async (_req, res) => {
	const restaurants = await restaurantService.getAllRestaurants();

	res.status(200).json(restaurants);
};

const getRestaurantById = async (req, res) => {
	const { id } = req.params;
	try {
		const restaurant = await restaurantService.getRestaurantById(id);
		res.status(200).json(restaurant);
	} catch (error) {
		res.status(404).json(error.message);
	}

};

module.exports = { getAllRestaurants, getRestaurantById };
