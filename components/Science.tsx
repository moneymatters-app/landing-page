import React from 'react';

const Science: React.FC = () => {
  const cards = [
    {
      title: "Pause & Reflect",
      description: "Introducing friction in the right places to stop impulse buys.",
      icon: "psychology",
      label: "Mindfulness",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Visual Impact",
      description: "Seeing \"Want\" vs \"Need\" changes brain perception of value.",
      icon: "visibility",
      label: "Awareness",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop"
    },
    {
      title: "Tiny Habits",
      description: "Small nudges that compound into massive savings over time.",
      icon: "bolt",
      label: "Action",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2574&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4 lg:px-40 bg-background-light dark:bg-background-dark" id="science">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Backed by Behavioral Science</h2>
          <p className="text-slate-600 dark:text-gray-400">We designed every interaction to reduce spending friction and increase your financial mindfulness.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl h-56 group cursor-default shadow-lg border border-transparent dark:border-border-dark">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-60"
                style={{ backgroundImage: `url('${card.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-primary/10"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-xl">{card.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider">{card.label}</span>
                </div>
                <h3 className="text-white text-xl font-bold leading-tight mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Science;