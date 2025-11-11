
import { GoogleGenAI, Type } from "@google/genai";
import type { BlogPostType } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const blogPostSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "A clear and engaging title for the blog post."
    },
    introduction: {
      type: Type.STRING,
      description: "A short introductory paragraph of 50-100 words."
    },
    mainLesson: {
      type: Type.STRING,
      description: "The main educational content, between 200 and 300 words."
    },
    video: {
      type: Type.OBJECT,
      description: "A relevant YouTube video suggestion.",
      properties: {
        title: { type: Type.STRING, description: "The title of the YouTube video." },
        url: { type: Type.STRING, description: "A valid YouTube link (URL)." }
      },
      required: ['title', 'url']
    },
    quiz: {
      type: Type.ARRAY,
      description: "A quiz with 3 multiple-choice questions.",
      items: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING, description: "The quiz question." },
          options: {
            type: Type.ARRAY,
            description: "An array of 3 possible answers (strings).",
            items: { type: Type.STRING }
          },
          correctAnswer: {
            type: Type.STRING,
            description: "The correct answer from the options array."
          }
        },
        required: ['question', 'options', 'correctAnswer']
      }
    }
  },
  required: ['title', 'introduction', 'mainLesson', 'video', 'quiz']
};

export const generateBlogPost = async (topic: string): Promise<BlogPostType> => {
  const prompt = `
    You are an expert content creator for an educational website called "LearnFlow."
    Your tone should be clear, modern, and easy to read for a general audience.
    
    Generate a short, educational blog post about the topic: "${topic}".

    The post must follow this exact structure:
    - A clear title.
    - A short introduction (50–100 words).
    - A main educational explanation (200–300 words).
    - A relevant YouTube video suggestion (provide both title and a valid link).
    - A quiz section with exactly 3 multiple-choice questions. Each question must have exactly 3 answer options.

    Return the entire post as a single JSON object that conforms to the provided schema. Do not include any markdown, backticks, or other formatting in the JSON string values.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: blogPostSchema,
        temperature: 0.7,
      },
    });

    const jsonString = response.text;
    const postData = JSON.parse(jsonString);
    
    // Basic validation
    if (!postData.title || !postData.quiz || postData.quiz.length !== 3) {
      throw new Error("Received malformed data from API.");
    }

    return postData as BlogPostType;
  } catch (error) {
    console.error("Error generating blog post:", error);
    throw new Error("Failed to generate blog post. The model may be unable to provide information on the requested topic. Please try another topic.");
  }
};
