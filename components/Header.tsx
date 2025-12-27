import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-solid border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 lg:px-10 py-3">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Moneymatters</h2>
        </div>
        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:flex items-center gap-6 lg:gap-9">
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-900 dark:text-white" href="#features">Features</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-900 dark:text-white" href="#science">Science</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-900 dark:text-white" href="#about">About</a>
          </nav>
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-hover text-[#11221f] text-sm font-bold leading-normal transition-colors">
            <span className="truncate">Get Early Access</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;