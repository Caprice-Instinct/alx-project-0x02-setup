import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const initialPosts = [
  {
    title: "Introduction",
    content: "Welcome to the Home page of ALX Project 0x02!",
  },
  {
    title: "Features",
    content: "This project uses Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Get Started",
    content: "Explore the About page to learn more about this project.",
  },
];

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [data, ...prev]);
  };

  return (
    <>
      <Header />
      <main className="p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Home Page</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setModalOpen(true)}
        >
          Add Post
        </button>
      </div>
      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}
      </div>
      </main>
    </>
  );
};

export default Home;
