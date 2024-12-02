import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface OptionModalProps {
  onClose: () => void;
  open: boolean;
  message: string;
}

const OptionModal = ({ onClose, open, message }: OptionModalProps) => {
  if (!open) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGoPurchase = () => {
    onClose();
    alert('구매 페이지로 이동합니다...');
  };

  return (
    <div
      className="fixed inset-0 bg-black-8 bg-opacity-60 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="flex flex-col items-center bg-black-5 bg-opacity-80 p-8 rounded-lg relative w-[360px] shadow-lg">
        <p className="mb-6 text-center">{message}</p>
        <button
          className="flex items-center justify-center bg-pink-5 text-white px-4 py-2 rounded hover:bg-pink-6 transition-colors"
          onClick={handleGoPurchase}
        >
          구매 페이지로 이동하기
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default OptionModal;
