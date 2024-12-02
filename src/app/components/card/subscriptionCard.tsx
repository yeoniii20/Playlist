import React from 'react';
import Button from '../button/button';

interface SubscriptionCardProps {
  name: string;
  price: number;
  benefits: string[];
  onPurchase: () => void;
}

const SubscriptionCard = ({
  name,
  price,
  benefits,
  onPurchase,
}: SubscriptionCardProps) => {
  return (
    <div className="bg-black-6 h-96 min-h-64 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-102 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-5 to-pink-7 text-transparent bg-clip-text">
          {name}
        </h2>
        <p className="text-lg font-bold mb-4">
          {price.toLocaleString()}원 / 월
        </p>
        <ul className="mb-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-4 mb-2">
              - {benefit}
            </li>
          ))}
        </ul>
      </div>
      <Button title={'구매하기'} onClick={onPurchase} />
    </div>
  );
};

export default SubscriptionCard;
