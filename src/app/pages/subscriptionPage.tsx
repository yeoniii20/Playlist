'use client';

import React, { useState } from 'react';
import SubscriptionCard from '../components/card/subscriptionCard';
import OptionModal from '../components/modal/optionModal';

interface SubscriptionPlan {
  name: string;
  price: number;
  benefits: string[];
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: 'Basic',
    price: 5000,
    benefits: ['광고 포함', '오프라인 재생 불가', '일부 곡만 이용 가능'],
  },
  {
    name: 'Standard',
    price: 10000,
    benefits: ['광고 없음', '오프라인 재생 가능', '모든 곡 이용 가능'],
  },
  {
    name: 'Premium',
    price: 15000,
    benefits: [
      '광고 없음',
      '오프라인 재생 가능',
      '모든 곡 무제한 이용',
      '고음질 스트리밍',
    ],
  },
];

const SubscriptionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePurchase = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="bg-black text-gray-1 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">이용권 구매하기</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <SubscriptionCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            benefits={plan.benefits}
            onPurchase={() => handlePurchase(plan.name)}
          />
        ))}
      </div>
      <OptionModal
        open={isModalOpen}
        onClose={handleCloseModal}
        message={`${selectedPlan} 이용권을 구매하시겠습니까?`}
      />
    </div>
  );
};

export default SubscriptionPage;
