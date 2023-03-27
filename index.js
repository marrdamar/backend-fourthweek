require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const mainRouter = require("./src/routers");

const app = express();
const PORT = process.env.DATABASE_PORT || 8080;
// const mongoUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(morgan("combined"));

app.use(mainRouter);


		app.listen(PORT, () => {
			console.log(`server is running at port ${PORT}`);
		});

