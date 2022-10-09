const connection = require('../database/connection');

const getAllRestaurants = async () => {
	const [restaurants] = await connection.execute('SELECT * FROM Goomer.restaurants');

	return restaurants;
};

module.exports = { getAllRestaurants };
