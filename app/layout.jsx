import "@/styles/globals.css";

export const metadata = {
  title: "Smart Chat Hub - Revolutionizing Conversations with AI",
  description:
    "Smart Chat Hub is a cutting-edge, full-stack application powered by Next.js and integrated with OpenAI API. Share prompts, unlock AI-driven conversations, and explore limitless possibilities. Collaborate, connect, and foster creativity in our centralized hub. Join the future of AI interaction and experience the power of intelligent chat.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
