import React from "react";
import { type UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-600 text-sm">Address: {address}</p>
    </div>
  );
};

export default UserCard;
