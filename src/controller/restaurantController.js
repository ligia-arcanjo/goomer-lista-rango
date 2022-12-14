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
		res.status(404).json({ message: error.message });
	}
};

const createRestaurant = async (req, res) => {
	const { body } = req;

	try {
		await restaurantService.createRestaurant(body);
		res.status(201).json({ message: 'Registration successful' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const deleteRestaurant = async (req, res) => {
	const { id } = req.params;

	try {
		await restaurantService.deleteRestaurant(id);
		res.status(204).end();
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const updateRestaurant = async (req, res) => {
	const { id } = req.params;
	const { body } = req;

	try {
		const updatedRestaurant = await restaurantService.updateRestaurant(id, body);
		res.status(201).json(updatedRestaurant);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = { 
	getAllRestaurants,
	getRestaurantById,
	createRestaurant,
	deleteRestaurant,
	updateRestaurant };
