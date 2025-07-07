
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT", 
    "TRACKS",
    "TIMELINE",
    "PRIZES",
    "SPONSORS",
    "TEAM",
    "FAQ"
  ];

  return (
    <nav className="sticky top-0  z-40 w-full py-3 sm:py-4 px-4 sm:px-6 bg-black/80 backdrop-blur-md border-b border-pink-500/10">
      <div className=" max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-xl sm:text-2xl font-bold text-pink-500 md:hidden">
          CODEZEN
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-pink-400 transition-colors duration-200 font-medium tracking-wider text-sm lg:text-base hover:scale-105 transform"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side button */}
        <div className="hidden md:flex">
          <Button 
            variant="outline" 
            className="bg-white text-black border-white hover:bg-gray-800 font-medium px-4 lg:px-6 text-sm lg:text-base hover:scale-105 transform transition-all"
          >
            📁 Go to projects
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-pink-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className={`w-full h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-full h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col py-4 px-4 space-y-4 bg-black/95 backdrop-blur-sm border-t border-pink-500/20 mt-3 rounded-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-pink-400 transition-colors duration-200 font-medium tracking-wider py-2 hover:pl-2 transform transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="bg-white text-black border-white hover:bg-gray-100 font-medium mt-4 w-full"
          >
            📁 Go to projects
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
