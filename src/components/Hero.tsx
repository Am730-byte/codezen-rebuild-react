
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Main Title */}
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="text-pink-500">CODE</span>
          <span className="text-pink-500">-</span>
          <span className="text-pink-500">ZE</span>
          <span className="text-pink-500">N</span>
          <span className="text-white ml-4">2025</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light text-gray-300 tracking-widest mb-6">
          36-HOUR HACKATHON
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Join us for an exciting journey of coding, innovation, and creativity
        </p>
      </div>

      {/* Event Details */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mb-16">
        <div className="flex items-center space-x-2 text-pink-400">
          <span className="text-xl">📅</span>
          <span className="font-medium">Feb 28 - Mar 1, 2025</span>
        </div>
        
        <div className="flex items-center space-x-2 text-pink-400">
          <span className="text-xl">⏰</span>
          <span className="font-medium">36 Hours</span>
        </div>
        
        <div className="flex items-center space-x-2 text-pink-400">
          <span className="text-xl">📍</span>
          <span className="font-medium">Delhi, India</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3"
        >
          📁 Go to projects
        </Button>
        
        <Button 
          size="lg"
          variant="outline"
          className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-medium px-8 py-3"
        >
          Dive In
        </Button>
      </div>
    </section>
  );
};

export default Hero;
