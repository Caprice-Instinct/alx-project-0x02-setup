import React from "react";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Posts Page</h2>
        <p>This is the Posts page. You can add your posts here.</p>
      </main>
    </>
  );
};

export default Posts;
