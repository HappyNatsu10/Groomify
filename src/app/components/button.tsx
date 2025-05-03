"use client"
import React, { useState } from "react";

// Define an interface for the component props
interface ButtonProps {
color: string;
bgColor: string;
hoverBgColor: string;
content: string;
borderColor: string;
hoverColor: string;
}

const Button: React.FC<ButtonProps> = ({
color,
bgColor,
hoverBgColor,
content,
borderColor,
hoverColor,
}) => {
const [isHovered, setIsHovered] = useState(false);

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
  >
    {content}
  </button>
);
};

export default Button;
