import React from "react";
import Card from "../components/common/Card";

const Home: React.FC = () => {
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="Introduction"
          content="Welcome to the Home page of ALX Project 0x02!"
        />
        <Card
          title="Features"
          content="This project uses Next.js, TypeScript, and Tailwind CSS."
        />
        <Card
          title="Get Started"
          content="Explore the About page to learn more about this project."
        />
      </div>
    </main>
  );
};

export default Home;
