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

const createRestaurant = async (name, image_url, address, hours) => {
	const { postal_code, street, number, complement, city, state} = address;

	const [restaurant] = await connection.execute(
		'INSERT INTO Goomer.restaurants (name, image_url) VALUES (?, ?)',
		[name, image_url],
	);
    
	await connection.execute(
		`INSERT INTO Goomer.address (id_restaurant, postal_code, street, number, complement, city, state) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
		[restaurant.insertId, postal_code, street, number, complement, city, state],
	);

	hours.forEach(async (day) => {
		await connection.execute(
			`INSERT INTO Goomer.restaurant_hours (id_restaurant, start, end, day_week)
            VALUES (?, ?, ?, ?)`,
			[restaurant.insertId, day.start, day.end, day.day_week],
		);
	});

	return restaurant.insertId;
};

module.exports = { 
	getAllRestaurants,
	getRestaurantById,
	getRestaurantAddress,
	getRestaurantHours,
	createRestaurant };
