import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-500 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="font-semibold text-lg mb-4">고객지원</div>
        <ul className="space-y-2">
          <li className="flex space-x-4">
            <Link to="/terms" className="text-gray-800 hover:text-blue-400 hover:underline cursor-pointer">
              서비스 이용약관
            </Link>
            <Link to="/privacy" className="text-gray-800 hover:text-blue-400 hover:underline cursor-pointer">
              개인정보 처리방침
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
