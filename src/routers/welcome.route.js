import { Router } from "express";

import welcomeController from "../controllers/welcome.controller";

const welcomeRouter = Router();

welcomeRouter.get("/", welcomeController.welcomePage);

export default welcomeRouter;
