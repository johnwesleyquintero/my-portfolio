import type { APIRoute } from "astro";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const prerender = false;

const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!import.meta.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    const { message } = await request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are an AI assistant for my portfolio website. You specialize in providing detailed information about my Amazon experience, technical skills, and professional achievements. When asked about my experience or skills, provide specific examples and achievements from my time at Amazon. For blog-style queries, generate well-structured, engaging content that highlights relevant aspects of my professional journey. Current query: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ response: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
