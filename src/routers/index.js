import { Router } from "express";
import welcomeRouter from "./welcome.route";
// import usersRouter from "./users.route";
// import productsRouter from "./products.route";
// import promosRouter from "./promos.route";
// import historyRouter from "./history.route";
// import authRouter from "./auth.route";

const mainRouter = Router();

mainRouter.use("/", welcomeRouter);
// mainRouter.use("/users", usersRouter);
// mainRouter.use("/products", productsRouter);
// mainRouter.use("/promos", promosRouter);
// mainRouter.use("/history", historyRouter);
// mainRouter.use("/auth", authRouter);

export default mainRouter;
