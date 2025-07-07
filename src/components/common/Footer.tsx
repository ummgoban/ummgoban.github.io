import { Mail } from 'lucide-react';

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
        <div className="container mx-auto p-4 gap-2 grid sm:grid-cols-3 sm:grid-rows-1 grid-rows-3 grid-cols-1">
          <FooterItem title="고객지원">
            <ul className="space-y-2">
              <li className="flex space-x-4">
                <a
                  href="/terms"
                  className="text-black-800 underline hover:text-black-600 hover:underline cursor-pointer"
                >
                  서비스 이용약관
                </a>
              </li>
              <li className="flex space-x-4">
                <a
                  href="/privacy"
                  className="text-black-800 underline hover:text-black-600 hover:underline cursor-pointer"
                >
                  개인정보 처리방침
                </a>
              </li>
            </ul>
          </FooterItem>
          <FooterItem title="서비스">
            <ul className="space-y-2">
              <li className="flex space-x-4"></li>
            </ul>
          </FooterItem>
          <FooterItem title="Connect Us">
            <ul className="space-y-2">
              <li className="flex space-x-4">
                <a
                  href="mailto:momchanpick@gmail.com"
                  className="text-black-800 underline hover:text-black-600 hover:underline cursor-pointer"
                >
                  <div className="flex gap-2">
                    <Mail width={24} height={24} />
                    momchanpick@gmail.com
                  </div>
                </a>
              </li>
              <li className="flex space-x-4">
                <a href="https://github.com/ummgoban" className="text-black-800 hover:text-black-600 cursor-pointer">
                  <div className="flex gap-2">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill={'currentColor'}
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Github
                  </div>
                </a>
              </li>
            </ul>
          </FooterItem>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="text-black-800">{`© ${new Date().getFullYear()} 맘찬픽, All Rights Reserved.`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
