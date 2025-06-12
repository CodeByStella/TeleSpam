import dotenv from "dotenv";
import path from "path";
dotenv.config();

export const CONFIG: {
  api_id: number;
  api_hash: string;
  filePath: string;
  openai_api: string;
  session: string;
} = {
  api_id: parseInt(process.env.API_ID),
  api_hash: process.env.API_HASH,
  filePath: path.resolve(process.cwd(), "chatIDs"),
  openai_api: process.env.OPENAI_API,
  session: process.env.SESSION,
};

export const systemPrompt = `
Please help me detect messages from people looking for a developer.

My Expertise

Frontend Development (UI/UX)

React.js, Vue.js, Angular, Svelte
HTML, CSS, JavaScript, Tailwind CSS, Material UI
Responsive and interactive web development


Backend Development (APIs & Logic)

Node.js, Nest.js, Express.js, Django, Laravel
REST APIs, WebSockets
Database & Performance Optimization
SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Firebase)
Redis, Memcached, Cloudflare
Security & Auth
OAuth, JWT, CSRF Protection, Firewalls
Hosting & Deployment
AWS, GCP, Azure, Vercel, Netlify
AI, Mobile & Blockchain Integration
OpenAI API, Chatbots
React Native, Flutter (Mobile & PWA)
Solidity, Web3.js, Smart Contracts

If someone is looking for a developer or needs help with these technologies, return a short message saying you'd like to work with them, collaborate, or contribute and asking to DM.
Otherwise, just return "no", must be "no" without quote.
`;
