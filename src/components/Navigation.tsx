
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

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
    <nav className="sticky top-0 z-50 w-full py-4 px-6 bg-black/80 backdrop-blur-md border-b border-pink-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-pink-400 transition-colors duration-200 font-medium tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button 
            variant="outline" 
            className="bg-white text-black border-white hover:bg-gray-100 font-medium px-6"
          >
            📁 Go to projects
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-pink-500/20">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-pink-400 transition-colors duration-200 font-medium tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
