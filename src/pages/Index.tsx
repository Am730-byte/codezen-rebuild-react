
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import CursorEffect from "@/components/CursorEffect";
import SquidGameMask from "@/components/SquidGameMask";

const Index = () => {
  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out overflow-x-hidden" 
         style={{
           backgroundColor: 'hsl(var(--bg-primary))',
           color: 'hsl(var(--text-primary))'
         }}>
      <div className="relative">
        {/* Enhanced Squid Game background gradient overlay */}
        <div 
          className="fixed inset-0 pointer-events-none transition-all duration-1000 ease-in-out" 
          style={{
            background: `radial-gradient(circle at 20% 50%, hsl(var(--gradient-from)) 0%, transparent 50%), 
                        radial-gradient(circle at 80% 20%, hsl(var(--gradient-to)) 0%, transparent 50%), 
                        radial-gradient(circle at 40% 80%, hsl(var(--accent-color) / 0.1) 0%, transparent 70%)`
          }}
        />
        
        {/* Squid Game geometric animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Triangle */}
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent opacity-5"
                 style={{ borderBottomColor: 'hsl(var(--accent-color))' }}></div>
          </div>
          
          {/* Circle */}
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full opacity-5 animate-pulse delay-1000"
               style={{ backgroundColor: 'hsl(var(--squid-green))' }}></div>
          
          {/* Square */}
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rotate-45 opacity-5 animate-pulse delay-500"
               style={{ backgroundColor: 'hsl(var(--squid-red))' }}></div>
        </div>

        <Navigation />
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Sponsors />
        <Team />
        <FAQ />
        <Footer />
        <ThemeToggle />
        <CursorEffect />
        <SquidGameMask />
      </div>
    </div>
  );
};

export default Index;
