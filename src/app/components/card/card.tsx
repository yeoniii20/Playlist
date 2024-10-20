const Card = ({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="bg-black-6 hover:bg-black-7 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="text-pink-5 text-xl">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </button>
  );
};

export default Card;
