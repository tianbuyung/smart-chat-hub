import { Navbar } from "@/components";
import "@/styles/globals.css";

export const metadata = {
  title: "SmartChatHub - Revolutionizing Conversations with AI",
  description:
    "SmartChatHub is a cutting-edge, full-stack application powered by Next.js and integrated with OpenAI API. Share prompts, unlock AI-driven conversations, and explore limitless possibilities. Collaborate, connect, and foster creativity in our centralized hub. Join the future of AI interaction and experience the power of intelligent chat.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
