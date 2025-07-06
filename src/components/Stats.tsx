
const Stats = () => {
  const stats = [
    {
      icon: "👥",
      number: "3000+",
      label: "PARTICIPANTS",
      subtitle: "From across India"
    },
    {
      icon: "💎",
      number: "₹3,00,000+",
      label: "",
      subtitle: "In Prizes"
    },
    {
      icon: "💬",
      number: "JOIN DISCORD",
      label: "",
      subtitle: "Connect with Teams"
    }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-8 text-center hover:border-pink-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">
                {stat.number}
              </div>
              {stat.label && (
                <div className="text-white font-semibold mb-2">
                  {stat.label}
                </div>
              )}
              <div className="text-gray-400 text-sm">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
