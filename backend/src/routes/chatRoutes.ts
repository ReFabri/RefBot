import { Router } from "express";
import { verifyToken } from "../utils/tokenManager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";

const chatRoutes = Router();
chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken);

export default chatRoutes;
