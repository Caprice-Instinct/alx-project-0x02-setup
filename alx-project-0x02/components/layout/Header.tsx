import React from "react";

// Modify Header.tsx to include navigation links to /home and /about.
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold mb-2">Welcome to ALX Project 0x02</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
