import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 lg:py-24 lg:px-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

      <div className="max-w-[1200px] w-full flex flex-col gap-12 lg:flex-row lg:items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Your bank app tells you what you spent. <span className="text-primary">We tell you why.</span>
            </h1>
            <h2 className="text-slate-600 dark:text-gray-300 text-lg font-normal leading-relaxed md:text-xl">
              Moneymatters is the personal finance app that actually understands your relationship with money. No more guilt-tripping—just better habits.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary-hover text-[#11221f] text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
              Get Early Access to MVP
            </button>
          </div>
        </div>

        {/* Right Content - Phone Mockup with Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="relative w-[300px] sm:w-[340px] bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-slate-900 box-content">
                <img 
                    src="https://i.imgur.com/aDxr8q0.png" 
                    alt="Moneymatters App Interface"
                    className="w-full h-full object-cover rounded-[2.5rem]"
                />
                
                {/* Optional Glare Effect */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-[2.5rem]"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;