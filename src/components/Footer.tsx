
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-pink-500/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Description */}
          <div className="md:col-span-2">
            <p className="text-gray-300 mb-6 max-w-md">
              Join us for an exciting journey of coding, innovation, and creativity. 
              Where innovation meets code and dreams become reality.
            </p>
            <Button 
              className="bg-gray-700 text-white hover:bg-gray-600 font-medium"
            >
              📁 Go to projects
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-pink-500 font-semibold mb-4 tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#timeline" className="text-gray-400 hover:text-pink-400 transition-colors">Timeline</a></li>
              <li><a href="#tracks" className="text-gray-400 hover:text-pink-400 transition-colors">Tracks</a></li>
              <li><a href="#prizes" className="text-gray-400 hover:text-pink-400 transition-colors">Prizes</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-pink-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Connect */}
          <div>
            <h3 className="text-pink-500 font-semibold mb-4 tracking-wider">CONTACT</h3>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400 flex items-center space-x-2">
                <span>📧</span>
                <span>business.codegeeks@gmail.com</span>
              </p>
              <p className="text-gray-400 flex items-center space-x-2">
                <span>📞</span>
                <span>+91 123 456 7890</span>
              </p>
              <p className="text-gray-400 flex items-center space-x-2">
                <span>📍</span>
                <span>Delhi, India</span>
              </p>
            </div>
            
            <h4 className="text-pink-500 font-semibold mb-3 tracking-wider">CONNECT WITH US</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <div className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center">📷</div>
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <div className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center">💼</div>
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <div className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center">💬</div>
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <div className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center">🌐</div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 <span className="text-pink-400">CODEZEN</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ by Arpit Rajput & Sudhanshu Khosla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
