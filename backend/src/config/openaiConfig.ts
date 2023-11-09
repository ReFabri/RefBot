import OpenAI from "openai";

export const configureOpenAI = () => {
  const config = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION,
  });
  return config;
};
