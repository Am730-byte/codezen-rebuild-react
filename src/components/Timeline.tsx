
import { Clock } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      day: "Day 1",
      events: [
        {
          time: "07:00 AM",
          title: "REGISTRATION STARTS",
          side: "left"
        },
        {
          time: "12:00 PM",
          title: "HACKATHON BEGINS",
          side: "left"
        },
        {
          time: "04:00 PM",
          title: "MENTORSHIP ROUND 1 [GROUP DISCUSSION]",
          side: "left"
        }
      ]
    },
    {
      day: "Day 2",
      events: [
        {
          time: "09:00 AM",
          title: "INAUGURATION CEREMONY [SIDE QUEST & MEME CONTEST]",
          side: "right"
        },
        {
          time: "02:00 PM",
          title: "LUNCH BREAK",
          side: "right"
        }
      ]
    }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">EVENT </span>
            <span className="text-pink-500">TIMELINE</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Mark your calendar for these important dates
          </p>
        </div>

        {/* Day Headers */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex space-x-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Day 1</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Day 2</h3>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-500"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {/* Day 1 Events */}
            <div className="relative">
              {/* Registration Starts */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
                    <div className="flex items-center justify-end mb-2">
                      <Clock className="w-4 h-4 text-pink-400 mr-2" />
                      <span className="text-pink-400 font-bold text-sm">07:00 AM</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">REGISTRATION STARTS</h3>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            {/* Hackathon Begins */}
            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
                    <div className="flex items-center justify-end mb-2">
                      <Clock className="w-4 h-4 text-pink-400 mr-2" />
                      <span className="text-pink-400 font-bold text-sm">12:00 PM</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">HACKATHON BEGINS</h3>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            {/* Inauguration Ceremony */}
            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-pink-400 mr-2" />
                      <span className="text-pink-400 font-bold text-sm">09:00 AM</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">INAUGURATION CEREMONY [SIDE QUEST & MEME CONTEST]</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Lunch Break */}
            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-pink-400 mr-2" />
                      <span className="text-pink-400 font-bold text-sm">02:00 PM</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">LUNCH BREAK</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentorship Round */}
            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
                    <div className="flex items-center justify-end mb-2">
                      <Clock className="w-4 h-4 text-pink-400 mr-2" />
                      <span className="text-pink-400 font-bold text-sm">04:00 PM</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">MENTORSHIP ROUND 1 [GROUP DISCUSSION]</h3>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
