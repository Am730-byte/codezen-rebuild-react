
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full border-pink-500/30 hover:border-pink-500/60 bg-gray-900/80 backdrop-blur-md hover:bg-gray-800/90 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/20"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-pink-400 hover:text-yellow-400 transition-colors" />
        ) : (
          <Moon className="h-5 w-5 text-pink-400 hover:text-blue-400 transition-colors" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
