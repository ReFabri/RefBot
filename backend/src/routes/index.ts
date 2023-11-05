import { Router } from "express";
import userRoutes from "./userRoutes.js";
import chatRoutes from "./chatRoutes.js";

const appRouter = Router();

// domain/api/v1/user
appRouter.use("/user", userRoutes);

// domain/api/v1/chats
appRouter.use("/chats", chatRoutes);

export default appRouter;
