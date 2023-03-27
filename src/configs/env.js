module.exports = {
	host: process.env.DATABASE_HOST,
	database: process.env.DATABASE_NAME,
	port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	jwtSecret: process.env.JWT_SECRET,
};
