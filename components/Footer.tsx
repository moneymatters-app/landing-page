import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 lg:px-40 bg-background-dark border-t border-border-dark">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-white opacity-80">
          <div className="size-6 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className="font-bold">Moneymatters</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <div className="flex gap-4">
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">rss_feed</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;