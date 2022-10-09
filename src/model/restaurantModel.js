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

const getRestaurantAddress = async (idRestaurant) => {
	const [restaurantAddres] = await connection.execute(
		`SELECT street, number, complement, city, state, postal_code
        FROM Goomer.address
        WHERE id_restaurant = ?`,
		[idRestaurant]
	);

	return restaurantAddres;
};

const getRestaurantHours = async (idRestaurant) => {
	const [hours] = await connection.execute(
		`SELECT day_week, start, end
        FROM Goomer.restaurant_hours
        WHERE id_restaurant = ?`,
		[idRestaurant]
	);

	return hours;
};

module.exports = { getAllRestaurants, getRestaurantById, getRestaurantAddress, getRestaurantHours };
