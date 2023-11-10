import { NextFunction, Request, Response } from "express";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";
import { configureOpenAI } from "../config/openaiConfig.js";
import User from "../models/User.js";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not registered or incorrect token" });
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    })) as ChatCompletionMessageParam[];
    chats.push({ role: "user", content: message });
    user.chats.push({ role: "user", content: message });
    const openai = configureOpenAI();
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: chats,
    });
    user.chats.push(chatResponse.choices[0].message);
    await user.save();
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered or incorrect token");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("User and Token ID's don't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered or incorrect token");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("User and Token ID's don't match");
    }
    //@ts-ignore
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
