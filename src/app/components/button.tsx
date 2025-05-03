"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

// Define an interface for the component props
interface ButtonProps {
color: string;
bgColor: string;
hoverBgColor: string;
content: string;
borderColor: string;
hoverColor: string;
to: string;
}

const Button: React.FC<ButtonProps> = ({
color,
bgColor,
hoverBgColor,
content,
borderColor,
hoverColor,
to,
}) => {
const [isHovered, setIsHovered] = useState(false);
const router = useRouter();

const handleClick = () => {
  router.push(to);
};

return (
  <button
    className="text-[17px] px-6 py-3 rounded-xl font-[600] transition-colors duration-300 cursor-pointer"
    style={{
      backgroundColor: isHovered ? hoverBgColor : bgColor,
      border: borderColor,
      color: isHovered ? hoverColor : color
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={handleClick}
  >
    {content}
  </button>
);
};

export default Button;
