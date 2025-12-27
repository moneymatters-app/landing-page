import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:px-40 bg-white dark:bg-[#152925] border-y border-gray-100 dark:border-border-dark">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white mb-10">Young professionals are finally taking control</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-border-dark relative">
            <span className="material-symbols-outlined absolute top-6 right-6 text-primary/20 text-5xl">format_quote</span>
            <p className="text-slate-700 dark:text-gray-300 text-lg italic mb-6 relative z-10">
              "Finally, an app that doesn't just judge me for buying coffee. The 'Need vs Want' tag really opened my eyes. I cut my impulse spending by 30% in just a month."
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop')" }}></div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Putri A.</div>
                <div className="text-xs text-gray-500">Product Designer, Jakarta</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-border-dark relative">
            <span className="material-symbols-outlined absolute top-6 right-6 text-primary/20 text-5xl">format_quote</span>
            <p className="text-slate-700 dark:text-gray-300 text-lg italic mb-6 relative z-10">
              "Using Excel was a nightmare and other apps were too complicated. Moneymatters feels like chatting with a smart friend who wants you to save money."
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop')" }}></div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Rizky P.</div>
                <div className="text-xs text-gray-500">Marketing Lead, Surabaya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;