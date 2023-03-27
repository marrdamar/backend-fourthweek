import { join } from "path";

const welcomePage = (req, res) => {
	res.status(200).sendFile(join(__dirname, "../html/welcome.html"));
};

export default {
	welcomePage,
};
