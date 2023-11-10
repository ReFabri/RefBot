import { Router } from "express";
import { verifyToken } from "../utils/tokenManager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import {
  generateChatCompletion,
  sendChatsToUser,
} from "../controllers/chatControllers.js";

const chatRoutes = Router();
chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get("all-chats", verifyToken, sendChatsToUser);

export default chatRoutes;
