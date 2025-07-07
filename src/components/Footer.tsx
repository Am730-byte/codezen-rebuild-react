
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-pink-500/20 py-12 sm:py-16 px-4 sm:px-6" 
            style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
                CODEZEN 2025
              </h3>
              <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
                Join us for an exciting journey of coding, innovation, and creativity. 
                Where innovation meets code and dreams become reality.
              </p>
            </div>
            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 font-medium px-6 py-3 rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
            >
              📁 Go to projects
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-pink-500 font-semibold mb-6 tracking-wider text-lg">QUICK LINKS</h3>
            <ul className="space-y-3">
              {['About', 'Timeline', 'Tracks', 'Prizes', 'FAQ'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-pink-400 transition-all duration-200 hover:pl-2 transform block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Connect */}
          <div>
            <h3 className="text-pink-500 font-semibold mb-6 tracking-wider text-lg">CONTACT</h3>
            <div className="space-y-4 mb-8">
              <div className="text-gray-400 flex items-center space-x-3">
                <span className="text-pink-400">📧</span>
                <span className="text-sm sm:text-base">business.codegeeks@gmail.com</span>
              </div>
              <div className="text-gray-400 flex items-center space-x-3">
                <span className="text-pink-400">📞</span>
                <span className="text-sm sm:text-base">+91 123 456 7890</span>
              </div>
              <div className="text-gray-400 flex items-center space-x-3">
                <span className="text-pink-400">📍</span>
                <span className="text-sm sm:text-base">Delhi, India</span>
              </div>
            </div>
            
            <h4 className="text-pink-500 font-semibold mb-4 tracking-wider">CONNECT WITH US</h4>
            <div className="flex space-x-3">
              {[
                { icon: '📷', label: 'Instagram' },
                { icon: '💼', label: 'LinkedIn' },
                { icon: '💬', label: 'Discord' },
                { icon: '🌐', label: 'Website' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center hover:bg-pink-500/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-500/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 <span className="text-pink-400 font-semibold">CODEZEN</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm text-center md:text-right">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by Arpit Rajput & Sudhanshu Khosla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
