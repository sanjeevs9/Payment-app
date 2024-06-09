"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="bg-red-700 "
      onClick={() => alert(`Hello from your  app!`)}
    >
      {children}
    </button>
  );
};
