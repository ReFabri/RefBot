import { NextFunction, Request, Response } from "express";
import { configureOpenAI } from "../config/openaiConfig.js";
import User from "../models/User.js";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  const user = await User.findById(res.locals.jwtData.id);
  if (!user)
    return res
      .status(401)
      .json({ message: "User not registered or incorrect token" });
  const chats = user.chats.map(({ role, content }) => ({ role, content }));
  chats.push({ role: "user", content: message });
  user.chats.push({ role: "user", content: message });
  const config = configureOpenAI();
};
