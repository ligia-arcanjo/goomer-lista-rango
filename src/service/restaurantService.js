const restaurantModel = require('../model/restaurantModel');

const getAllRestaurants = async () => {
	const restaurants = await restaurantModel.getAllRestaurants();

	return restaurants;
};

const getRestaurantById = async (idRestaurant) => {
	const [restaurant] = await restaurantModel.getRestaurantById(idRestaurant);

	if (restaurant.length < 1) throw new Error('Restaurant not found');

	const restaurantAddress = await getRestaurantAddress(idRestaurant);
	restaurant.address = restaurantAddress;

	const restaurantHours = await getRestaurantOppeningHours(idRestaurant);
	restaurant.hours = restaurantHours;

	return restaurant;
};

const getRestaurantAddress = async (idRestaurant) => {
	const [address] = await restaurantModel.getRestaurantAddress(idRestaurant);

	return address;
};

const getRestaurantOppeningHours = async (idRestaurant) => {
	const hours = await restaurantModel.getRestaurantHours(idRestaurant);

	return hours;
};

const createRestaurant = async (restaurantInfo) => {
	const { name, image_url, address, hours } = restaurantInfo;

	if (!name || !address || !hours) {
		throw new Error('Incomplete registration information');
	}

	await restaurantModel.createRestaurant(name, image_url, address, hours);

	return true;
};

const deleteRestaurant = async (idRestaurant) => {
	const [restaurant] = await restaurantModel.getRestaurantById(idRestaurant);

	if (!restaurant) throw new Error('Restaurant not found');

	await restaurantModel.deleteRestaurant(idRestaurant);

	return true;
};

const updateRestaurant = async (idRestaurant, body) => {
	const [restaurant] = await restaurantModel.getRestaurantById(idRestaurant);

	if (!restaurant) throw new Error('Restaurant not found');

	await restaurantModel.updateRestaurant(idRestaurant, body);

	const updatedRestaurant = await getRestaurantById(idRestaurant);

	return updatedRestaurant;
};

module.exports = { 
	getAllRestaurants,
	getRestaurantById,
	createRestaurant,
	deleteRestaurant,
	updateRestaurant };