export interface UserProps {
  name: string;
  email: string;
  address: string;
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
}
// TypeScript interfaces for the project can be defined here

export interface ExampleInterface {
  id: number;
  name: string;
}

export interface CardProps {
  title: string;
  content: string;
}
