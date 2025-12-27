import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:px-40 bg-white dark:bg-[#152925] border-y border-gray-100 dark:border-border-dark" id="features">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-[800px] mx-auto mb-8">
          <h2 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white leading-tight">
            Let’s be real: you don't have a math problem. <br className="hidden md:block" /> <span className="text-primary">You have a habit problem.</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg md:text-xl">
            Most apps treat you like a calculator. We treat you like a human.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-surface-dark overflow-hidden hover:border-primary/50 transition-all duration-300 group">
            <div className="p-6 pb-0 flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined">label</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Intention over Amounts</h3>
              </div>
              <p className="text-slate-600 dark:text-[#92c9c0] leading-relaxed mb-6">
                Tag purchases as <b>Need</b> or <b>Want</b> instantly. See where your money actually goes, beyond just categories.
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-[#11221f]/50 p-6 pt-8 mt-auto relative">
              <div className="bg-white dark:bg-[#1a2c28] rounded-xl p-4 shadow-md border border-gray-100 dark:border-border-dark transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Starbucks Coffee</span>
                  <span className="text-xs text-gray-500">Rp 55.000</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 text-xs font-bold rounded bg-gray-100 dark:bg-surface-dark text-gray-500 hover:bg-gray-200">Need</button>
                  <button className="flex-1 py-1.5 text-xs font-bold rounded bg-primary text-[#11221f] shadow-sm ring-2 ring-primary/50">Want</button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-surface-dark overflow-hidden hover:border-primary/50 transition-all duration-300 group">
            <div className="p-6 pb-0 flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Habit Insights</h3>
              </div>
              <p className="text-slate-600 dark:text-[#92c9c0] leading-relaxed mb-6">
                Visualize your spending triggers. Understand <i>when</i> and <i>why</i> you spend, not just how much.
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-[#11221f]/50 p-6 pt-8 mt-auto relative">
              <div className="bg-white dark:bg-[#1a2c28] rounded-xl p-4 shadow-md border border-gray-100 dark:border-border-dark transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-end h-16 gap-2 px-2">
                  <div className="w-1/4 bg-red-400 rounded-t-md h-[80%] relative group/bar"></div>
                  <div className="w-1/4 bg-primary rounded-t-md h-[40%]"></div>
                  <div className="w-1/4 bg-orange-300 rounded-t-md h-[60%]"></div>
                  <div className="w-1/4 bg-blue-300 rounded-t-md h-[30%]"></div>
                </div>
                <div className="flex justify-between text-[9px] text-gray-500 mt-2 px-1">
                  <span>Food</span>
                  <span>Ride</span>
                  <span>Ent</span>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-surface-dark overflow-hidden hover:border-primary/50 transition-all duration-300 group">
            <div className="p-6 pb-0 flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined">call_split</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Seamless Splits</h3>
              </div>
              <p className="text-slate-600 dark:text-[#92c9c0] leading-relaxed mb-6">
                Split bills instantly with friends. Fair, transparent, and absolutely zero awkwardness.
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-[#11221f]/50 p-6 pt-8 mt-auto relative">
              <div className="bg-white dark:bg-[#1a2c28] rounded-xl p-4 shadow-md border border-gray-100 dark:border-border-dark transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-2 pb-2 border-b border-gray-100 dark:border-border-dark">Dinner @ Sate Khas</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="size-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px]">B</div>
                      <span className="text-slate-700 dark:text-gray-300">Budi</span>
                    </div>
                    <span className="text-red-400 font-medium">owes Rp 45k</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="size-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[8px]">S</div>
                      <span className="text-slate-700 dark:text-gray-300">Sari</span>
                    </div>
                    <span className="text-green-500 font-medium">paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;