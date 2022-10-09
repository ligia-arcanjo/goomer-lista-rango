const app = require('./app');
require('dotenv').config();

// eslint-disable-next-line no-undef
const port = process.env.API_PORT || 3001;

app.listen(port, async () => {
	console.log(`Server is running on PORT: ${port}`);
});
