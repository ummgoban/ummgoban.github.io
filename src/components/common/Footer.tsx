import { Link } from 'react-router';

const FooterItem = ({ children, title }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-semibold text-lg">{title}</div>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-500 py-8 mt-auto">
      <div className="flex flex-col">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 grid-cols-1">
          <FooterItem title="고객지원">
            <ul className="space-y-2">
              <li className="flex space-x-4">
                <Link
                  to="/terms"
                  className="text-gray-800 underline hover:text-gray-200 hover:underline cursor-pointer"
                >
                  서비스 이용약관
                </Link>
              </li>
              <li className="flex space-x-4">
                <Link
                  to="/privacy"
                  className="text-gray-800 underline hover:text-gray-200 hover:underline cursor-pointer"
                >
                  개인정보 처리방침
                </Link>
              </li>
            </ul>
          </FooterItem>
          <FooterItem title="서비스">
            <ul className="space-y-2">
              <li className="flex space-x-4"></li>
            </ul>
          </FooterItem>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="text-gray-800">{`© ${new Date().getFullYear()} 맘찬픽, All Rights Reserved.`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
