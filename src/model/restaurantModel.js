const connection = require('../database/connection');

const getAllRestaurants = async () => {
	const [restaurants] = await connection.execute('SELECT * FROM Goomer.restaurants');

	return restaurants;
};

const getRestaurantById = async (id) => {
	const [restaurant] = await connection.execute(
		'SELECT * FROM Goomer.restaurants WHERE id = ?', [id]
	);

	return restaurant;
};

module.exports = { getAllRestaurants, getRestaurantById };
