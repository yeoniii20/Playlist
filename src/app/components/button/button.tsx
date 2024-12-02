interface ButtonProps {
  title: string;
  onClick: () => void;
  color?: 'white';
}

const Button = ({ title, onClick, color }: ButtonProps) => {
  const buttonClass =
    color === 'white'
      ? 'bg-white text-black hover:bg-gray-200'
      : 'bg-pink-5 text-white hover:bg-pink-6';

  return (
    <button
      className={`w-full py-2 rounded-lg ${buttonClass}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
