
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Squid Game geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-8 h-8 rotate-45" 
             style={{ backgroundColor: 'hsl(var(--squid-green) / 0.1)' }}></div>
        <div className="absolute top-40 right-32 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent" 
             style={{ borderBottomColor: 'hsl(var(--accent-color) / 0.1)' }}></div>
        <div className="absolute bottom-32 left-40 w-12 h-12 rounded-full" 
             style={{ backgroundColor: 'hsl(var(--squid-red) / 0.1)' }}></div>
      </div>

      {/* Main Title */}
      <div className="mb-8 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span style={{ color: 'hsl(var(--accent-color))' }}>CODE</span>
          <span style={{ color: 'hsl(var(--accent-color))' }}>-</span>
          <span style={{ color: 'hsl(var(--accent-color))' }}>ZE</span>
          <span style={{ color: 'hsl(var(--accent-color))' }}>N</span>
          <span className="ml-4" style={{ color: 'hsl(var(--text-primary))' }}>2025</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6"
            style={{ color: 'hsl(var(--text-primary) / 0.8)' }}>
          36-HOUR SURVIVAL CHALLENGE
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
           style={{ color: 'hsl(var(--text-primary) / 0.7)' }}>
          Enter the game where only the strongest coders survive
        </p>
      </div>

      {/* Event Details with Squid Game styling */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mb-16">
        <div className="flex items-center space-x-2" style={{ color: 'hsl(var(--accent-color))' }}>
          <span className="text-xl">⏱️</span>
          <span className="font-medium">Feb 28 - Mar 1, 2025</span>
        </div>
        
        <div className="flex items-center space-x-2" style={{ color: 'hsl(var(--squid-green))' }}>
          <span className="text-xl">🎯</span>
          <span className="font-medium">36 Hours</span>
        </div>
        
        <div className="flex items-center space-x-2" style={{ color: 'hsl(var(--squid-red))' }}>
          <span className="text-xl">🏢</span>
          <span className="font-medium">Delhi, India</span>
        </div>
      </div>

      {/* Action Buttons with Squid Game styling */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg"
          className="font-medium px-8 py-3 border-2 transition-all duration-300 hover:scale-105"
          style={{ 
            backgroundColor: 'hsl(var(--text-primary))', 
            color: 'hsl(var(--bg-primary))',
            borderColor: 'hsl(var(--text-primary))'
          }}
        >
          🎮 ENTER THE GAME
        </Button>
        
        <Button 
          size="lg"
          variant="outline"
          className="font-medium px-8 py-3 border-2 transition-all duration-300 hover:scale-105"
          style={{ 
            borderColor: 'hsl(var(--accent-color))', 
            color: 'hsl(var(--accent-color))',
            backgroundColor: 'transparent'
          }}
        >
          📋 GAME RULES
        </Button>
      </div>
    </section>
  );
};

export default Hero;
