import { join } from "path";

const welcomePage = (req, res) => {
	const newLocal = require('../html/welcome.html');
	res.status(200).sendFile(join(__dirname, newLocal));
};

export default {
	welcomePage,
};
