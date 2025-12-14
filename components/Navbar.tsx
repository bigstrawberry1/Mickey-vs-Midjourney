import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'hero', label: 'Top' },
  { id: 'case', label: 'The Case' },
  { id: 'tech', label: 'How AI Works' },
  { id: 'legal', label: 'Legal Issues' },
  { id: 'impact', label: "Who's Affected" },
  { id: 'futures', label: 'Futures' },
  { id: 'recommendations', label: 'Recs' },
  { id: 'paper', label: 'Paper' },
  { id: 'about', label: 'About' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => scrollToSection('hero')} 
          className="font-heading font-bold text-xl text-denim cursor-pointer flex items-center gap-2"
        >
          <span className="w-3 h-3 bg-accent-purple rounded-full"></span>
          Mickey v. Midjourney
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-semibold transition-colors relative ${
                activeSection === item.id ? 'text-denim' : 'text-slate-400 hover:text-denim-light'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-purple rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Nav Button */}
        <button 
          className="lg:hidden text-denim"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-paper shadow-lg border-t border-slate-100 p-6 flex flex-col gap-4">
           {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left text-lg font-medium ${
                activeSection === item.id ? 'text-denim text-accent-purple' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;