const {Pool} = require("pg");

const database = new Pool({
    database: "coffee_shop",
    host: "localhost",
    port:"5432",
    user:"postgres",
    password:"admin",
})

module.exports = database;