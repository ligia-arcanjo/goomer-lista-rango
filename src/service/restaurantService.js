const restaurantModel = require('../model/restaurantModel');

const getAllRestaurants = async () => {
	const restaurants = await restaurantModel.getAllRestaurants();

	return restaurants;
};

const getRestaurantById = async (idRestaurant) => {
	const [restaurant] = await restaurantModel.getRestaurantById(idRestaurant);

	if (restaurant.length < 1) throw new Error('Restaurant not found');

	return restaurant;
};

module.exports = { getAllRestaurants, getRestaurantById };