import {
  FaUser,
  FaMusic,
  FaHeart,
  FaHeadset,
  FaInfoCircle,
  FaBell,
  FaShoppingCart,
} from "react-icons/fa";
import Card from "../components/card/card";

const MyPage = () => {
  return (
    <div className="bg-black text-gray-1 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">My Page</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card icon={<FaUser />} title="나의 정보" />
        <Card icon={<FaShoppingCart />} title="이용권 구매하기" />
        <Card icon={<FaMusic />} title="좋아하는 노래" />
        <Card icon={<FaHeart />} title="좋아하는 아티스트" />
        <Card icon={<FaHeadset />} title="고객센터" />
        <Card icon={<FaInfoCircle />} title="고객센터" />
        <Card icon={<FaBell />} title="공지사항" />
      </div>
    </div>
  );
};

export default MyPage;
