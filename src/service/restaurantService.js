const restaurantModel = require('../model/restaurantModel');

const getAllRestaurants = async () => {
	const restaurants = await restaurantModel.getAllRestaurants();

	return restaurants;
};

module.exports = { getAllRestaurants };