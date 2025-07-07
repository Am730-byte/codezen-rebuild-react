
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="border-pink-500/20 hover:border-pink-500/40 bg-gray-900/50 backdrop-blur-sm"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-pink-400" />
      ) : (
        <Moon className="h-4 w-4 text-pink-400" />
      )}
    </Button>
  );
};

export default ThemeToggle;
