
const Sponsors = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">BROUGHT TO YOU </span>
            <span className="text-pink-500">BY</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Meet the institutions and team behind CodeZen
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Hosted By */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-wider">
              HOSTED BY
            </h3>
            <div className="bg-gray-900/50  backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
              <div className="">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop" 
                  alt="Guru Teg Bahadur 4th Centenary Engineering College"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h4 className="text-xl font-bold text-pink-400 mb-4 tracking-wider">
                GURU TEG BAHADUR 4TH CENTENARY
                
              </h4>
              <p className="text-gray-400 text-sm">
                A premier institution fostering innovation and excellence
              </p>
            </div>
          </div>

          {/* Organized By */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-wider">
              ORGANIZED BY
            </h3>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
              <div className="">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" 
                  alt="CodeGeeks Team"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h4 className="text-xl font-bold text-pink-400 mb-4 tracking-wider">
                CODEGEEKS<br />
                TEAM
              </h4>
              <p className="text-gray-400 text-sm">
                A passionate team dedicated to fostering tech innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
