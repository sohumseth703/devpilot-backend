import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Groq AI Provider
const groq = createGroq({
    apiKey: process.env.OPENAI_API_KEY,
});

// Root endpoint
app.get("/", (req, res) => {
    res.send("Backend is running with Vercel AI SDK + Groq (updated models)...");
});

// Main AI task endpoint
app.post("/run-task", async (req, res) => {
    try {
        const { task } = req.body;

        // Generate using updated Groq model (llama-3.1-8b-instant — supported)
        const result = await generateText({
            model: groq("llama-3.1-8b-instant"),
            prompt: `You are an AI Developer Assistant. Help the user with this request:\n\n${task}`,
        });

        res.json({ output: result.text });

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ output: "Backend error occurred." });
    }
});

// Start server
app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});
