import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">About Page</h2>
      <p>
        This is the About page for ALX Project 0x02. Here you can learn more
        about this project.
      </p>
      <div className="flex gap-4 mt-8">
        <Button size="small" shape="rounded-sm">
          Small Rounded-sm
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Rounded-md
        </Button>
        <Button size="large" shape="rounded-full">
          Large Rounded-full
        </Button>
      </div>
    </main>
  );
};

export default About;

// ...existing code...
