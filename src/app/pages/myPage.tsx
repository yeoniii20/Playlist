import {
  FaUser,
  FaMusic,
  FaHeart,
  FaHeadset,
  FaInfoCircle,
  FaBell,
  FaShoppingCart,
} from "react-icons/fa";
import Image from "next/image";
import Card from "../components/card/card";

const MyPage = () => {
  const profileImageUrl: string | null = null;

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
          <p className="text-gray-4">나의 레벨: Sliver</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card icon={<FaUser />} title="나의 정보" />
        <Card icon={<FaShoppingCart />} title="이용권 구매하기" />
        <Card icon={<FaMusic />} title="좋아하는 노래" />
        <Card icon={<FaHeart />} title="좋아하는 아티스트" />
        <Card icon={<FaHeadset />} title="고객센터" />
        <Card icon={<FaInfoCircle />} title="공지사항" />
      </div>
    </div>
  );
};

export default MyPage;
