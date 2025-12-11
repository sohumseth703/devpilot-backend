# 🚀 DevPilot – AI Developer Assistant

DevPilot is an intelligent developer assistant that helps generate code, review tasks, and accelerate development workflows through a clean UI and AI-powered backend.  
This project is built for the **WeMakeDevs – AI Assemble Hackathon 2025** and integrates **Vercel**, **Render**.

---

## 🌟 Features

- 🧠 **AI Task Execution**
  - Generate code (React components, APIs, utilities, etc.)
  - Fix bugs or rewrite existing code
  - Provide explanations or step-by-step solutions

- ⚡ **Fast Frontend UI (Vercel)**
  - Built using React + Vite + TailwindCSS  
  - Clean, responsive, developer-friendly layout

- 🔗 **Backend with Vercel AI SDK (Render)**
  - Uses Vercel AI SDK + Groq models  
  - Securely processes tasks and returns AI-generated output

---

## 🛠️ Tech Stack

### **Frontend**
- React + Vite  
- Tailwind CSS  
- Vercel (Deployment)

### **Backend**
- Node.js + Express  
- Vercel AI SDK  
- Groq Model (`llama3-70b-8192`)  
- Render (Deployment)

### **Tools**
- GitHub  
---

## 🧩 Architecture Overview
```text
   
---


   ┌───────────────────────────┐
   │     React Frontend (UI)   │
   │       Vercel Hosting      │
   └──────────────┬────────────┘
                  │  POST /run-task
                  ▼
   ┌───────────────────────────┐
   │     Express Backend API   │
   │        Render Hosting     │
   └──────────────┬────────────┘
                  │  AI Prompt
                  ▼
   ┌───────────────────────────┐
   │  Vercel AI SDK + Groq AI  │
   │  Model: llama3-70b-8192   │
   └───────────────────────────┘

---

---
```

# 🔧 Installation & Setup

Follow these steps to run the project locally.

---

## 📦 1. Frontend Setup

``bash
git clone https://github.com/sohumseth703/devpilot-frontend
cd devpilot-frontend
npm install
npm run dev

---

📦 2. Backend Setup
git clone https://github.com/sohumseth703/devpilot-backend
cd devpilot-backend
npm install
Create a .env file:

OPENAI_API_KEY=your-groq-api-key


Run backend:

node server.js

---

🌐 Deployment Links
Frontend (Vercel)

🔗 https://devpilot-frontend.vercel.app/

Backend (Render)

🔗 https://devpilot-backend-5o33.onrender.com/

---

🧪 How to Use DevPilot

Open the frontend URL.

Enter a task such as:

“Generate a React login page”

“Fix this JavaScript bug”

“Explain this function”

Click Run Task

Frontend sends request to backend

Backend uses Vercel AI SDK + Groq

Output appears in the terminal-style box

🏆 Sponsor Technology Usage (Hackathon Requirement)
✔️ Vercel

Frontend deployed

Backend uses Vercel AI SDK

✔️ Render

Backend deployed with auto-deploy

🎥 Demo Video (Required)

A 2-minute demo video will be added before final submission, including:

UI walkthrough

Backend workflow

Example task

Sponsor usage demonstration

🚀 Future Improvements

Multi-file code generation

User authentication

Save task history

Download generated files

Dark/Light theme toggle

❤️ Acknowledgements

WeMakeDevs

Vercel

Groq

Open Source Community

📄 License
This project is open-source and distributed under the MIT License.
