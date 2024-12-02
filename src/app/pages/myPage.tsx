'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  FaUser,
  FaMusic,
  FaHeart,
  FaHeadset,
  FaInfoCircle,
  FaShoppingCart,
} from 'react-icons/fa';
import Card from '../components/card/card.tsx';

const MyPage: React.FC = () => {
  const router = useRouter();
  const profileImageUrl: string | null = null;

  // const userLevel = "Bronze";
  const userLevel = 'Silver';
  // const userLevel = "Gold";
  // const userLevel = "Diamond";
  // const userLevel = "";

  const navigateToPurchase = () => {
    router.push('/');
  };

  // 레벨에 따른 뱃지 색상 설정
  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'Bronze':
        return 'bg-[rgba(205,127,50,0.8)]';
      case 'Silver':
        return 'bg-[rgba(192,192,192,0.8)]';
      case 'Gold':
        return 'bg-[rgba(255,215,0,0.8)]';
      case 'Diamond':
        return 'bg-[rgba(128,0,128,0.8)]';
      default:
        return 'bg-[rgba(128,128,128,0.8)]';
    }
  };

  return (
    <div className="bg-black text-gray-1 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">My Page</h1>
      <div className="flex items-center mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden mr-4 bg-black-6 flex items-center justify-center">
          {profileImageUrl ? (
            <Image
              src={profileImageUrl}
              alt="프로필 사진"
              width={80}
              height={80}
              className="object-cover"
            />
          ) : (
            <FaUser className="text-gray-4 text-4xl" />
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold">뚱이에오</h2>
          <span
            className={`inline-block mt-2 px-3 py-1 text-sm font-medium text-white rounded-full ${getBadgeColor(
              userLevel,
            )}`}
          >
            {userLevel}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card icon={<FaUser />} title="나의 정보" />
        <Card
          icon={<FaShoppingCart />}
          title="이용권 구매하기"
          onClick={navigateToPurchase}
        />
        <Card icon={<FaMusic />} title="좋아하는 노래" />
        <Card icon={<FaHeart />} title="좋아하는 아티스트" />
        <Card icon={<FaHeadset />} title="고객센터" />
        <Card icon={<FaInfoCircle />} title="공지사항" />
      </div>
    </div>
  );
};

export default MyPage;
