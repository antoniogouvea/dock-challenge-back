export default () => ({
	port: process.env.PORT,

	database: {
		uri: process.env.MONGO_URI,
		retryAttempts: 3,
		retryDelay: 2000,
	},
})
