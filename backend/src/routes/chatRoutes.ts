import { Router } from "express";
import { verifyToken } from "../utils/tokenManager.js";

const chatRoutes = Router();
chatRoutes.post("/new", verifyToken);

export default chatRoutes;
