import React from "react";

interface BtnProps {
  title: string;
  color?: string;
  onClick: () => void;
}

/**
 *
 * @param title 버튼 텍스트
 * @param color 버튼 색상
 * @param onClick 클릭 핸들러
 * @returns
 */
const SmallButton = ({ title, color, onClick }: BtnProps) => {
  return (
    <button
      className={`px-6 py-1.5 rounded-md ${
        color === "pink"
          ? `bg-pink-1 text-pink-6 hover:bg-pink-2`
          : `bg-gray-1 text-gray-6 hover:bg-gray-2`
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SmallButton;
