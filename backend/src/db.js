const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://surajkushwaha8272:Suraj12345@cluster0.oujegeq.mongodb.net';
//mongodb://localhost:27017
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
