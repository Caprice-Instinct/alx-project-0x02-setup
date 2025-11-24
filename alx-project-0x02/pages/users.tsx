import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface UsersPageProps {
  users: User[];
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    const users = await res.json();
    return { props: { users } };
  } catch (error) {
    return { props: { users: [] } };
  }
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Users Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.length === 0 && <p>No users found.</p>}
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Users;
