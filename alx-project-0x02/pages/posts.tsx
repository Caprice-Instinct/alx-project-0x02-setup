import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: Post[];
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    if (!res.ok) throw new Error("Failed to fetch posts");
    const posts = await res.json();
    return { props: { posts } };
  } catch (error: any) {
    return { props: { posts: [] } };
  }
};

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Posts Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.length === 0 && <p>No posts found.</p>}
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Posts;
