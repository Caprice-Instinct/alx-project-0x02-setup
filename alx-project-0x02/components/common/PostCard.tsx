import React from "react";
import { type PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-xs text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
