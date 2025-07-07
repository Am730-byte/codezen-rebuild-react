
import { useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(1);

  const day1Events = [
    {
      time: "07:00 AM",
      title: "REGISTRATION STARTS",
      side: "left" as const
    },
    {
      time: "12:00 PM",
      title: "HACKATHON BEGINS",
      side: "left" as const
    },
    {
      time: "04:00 PM",
      title: "MENTORSHIP ROUND 1 [GROUP DISCUSSION]",
      side: "left" as const
    }
  ];

  const day2Events = [
    {
      time: "09:00 AM",
      title: "INAUGURATION CEREMONY [SIDE QUEST & MEME CONTEST]",
      side: "right" as const
    },
    {
      time: "02:00 PM",
      title: "LUNCH BREAK",
      side: "right" as const
    },
    {
      time: "06:00 PM",
      title: "FINAL PRESENTATIONS",
      side: "right" as const
    },
    {
      time: "08:00 PM",
      title: "WINNER ANNOUNCEMENT",
      side: "right" as const
    }
  ];

  const currentEvents = activeDay === 1 ? day1Events : day2Events;

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

        {/* Day Selector Buttons */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex space-x-4">
            <Button
              onClick={() => setActiveDay(1)}
              variant={activeDay === 1 ? "default" : "outline"}
              className={`px-8 py-3 font-bold text-lg ${
                activeDay === 1 
                  ? "bg-pink-500 text-white hover:bg-pink-600" 
                  : "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
              }`}
            >
              Day 1
            </Button>
            <Button
              onClick={() => setActiveDay(2)}
              variant={activeDay === 2 ? "default" : "outline"}
              className={`px-8 py-3 font-bold text-lg ${
                activeDay === 2 
                  ? "bg-pink-500 text-white hover:bg-pink-600" 
                  : "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
              }`}
            >
              Day 2
            </Button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-500"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {currentEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className="flex items-center">
                  {event.side === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
                          <div className="flex items-center justify-end mb-2">
                            <Clock className="w-4 h-4 text-pink-400 mr-2" />
                            <span className="text-pink-400 font-bold text-sm">{event.time}</span>
                          </div>
                          <h3 className="text-white font-bold text-lg">{event.title}</h3>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300">
                          <div className="flex items-center mb-2">
                            <Clock className="w-4 h-4 text-pink-400 mr-2" />
                            <span className="text-pink-400 font-bold text-sm">{event.time}</span>
                          </div>
                          <h3 className="text-white font-bold text-lg">{event.title}</h3>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
