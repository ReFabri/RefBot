import { Router } from "express";
import { verifyToken } from "../utils/tokenManager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import {
  generateChatCompletion,
  sendChatsToUser,
  deleteChats,
} from "../controllers/chatControllers.js";

const chatRoutes = Router();
chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);

chatRoutes.get("all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);

export default chatRoutes;
