import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-4 lg:px-40 bg-gradient-to-br from-[#152925] to-background-dark border-t border-border-dark text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 size-96 bg-primary blur-[100px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-24 -right-24 size-96 bg-teal-800 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>
      <div className="max-w-[720px] mx-auto flex flex-col items-center gap-8 relative z-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to actually <br /> <span className="text-primary">master your money?</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto">
            Stop guessing. Start understanding. Join the community today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
          <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary-hover text-[#11221f] text-lg font-bold transition-all shadow-lg shadow-primary/20 w-full sm:w-auto">
            Sign up for MVP
          </button>
          <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-transparent border border-gray-600 hover:border-primary text-white hover:text-primary text-lg font-bold transition-all w-full sm:w-auto">
            Join the Waitlist for Version 1.0
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">No credit card required. Free for early adopters.</p>
      </div>
    </section>
  );
};

export default CallToAction;