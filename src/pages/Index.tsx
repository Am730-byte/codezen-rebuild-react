
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

const Index = () => {
  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out overflow-x-hidden" 
         style={{
           backgroundColor: 'hsl(var(--bg-primary))',
           color: 'hsl(var(--text-primary))'
         }}>
      <div className="relative">
        {/* Enhanced background gradient overlay */}
        <div 
          className="fixed inset-0 pointer-events-none transition-all duration-1000 ease-in-out" 
          style={{
            background: `radial-gradient(circle at 20% 50%, hsl(var(--gradient-from)) 0%, transparent 50%), 
                        radial-gradient(circle at 80% 20%, hsl(var(--gradient-to)) 0%, transparent 50%), 
                        radial-gradient(circle at 40% 80%, hsl(var(--accent-color)) 0%, transparent 70%)`
          }}
        />
        
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
      </div>
    </div>
  );
};

export default Index;
