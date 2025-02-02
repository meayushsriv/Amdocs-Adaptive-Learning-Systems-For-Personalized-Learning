// src/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Use the environment variable set by create-react-app
const genAI = new GoogleGenerativeAI("AIzaSyBMHffY3LU_bNvkzXP8ULaJvL6A-oTtCDg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const fetchLearningPath = async (userInput) => {
  try {
    const prompt = `Given the user's background and learning goals: ${userInput}, suggest a learning path in 4-5 bullet points, do not bold characters.`;
    const result = await model.generateContent(prompt);
    return result.response.text(); // Gemini API response in text form
  } catch (error) {
    console.error("Error fetching learning path:", error);
    return "Sorry, something went wrong. Please try again.";
  }
};
