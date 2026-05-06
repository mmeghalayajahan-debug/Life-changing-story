import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const NAV_ITEMS = [
  { name: 'হোম', path: '/' },
  { name: 'মানবিক ব্লগ', path: '/humanitarian' },
  { name: 'ভ্রমণ গাইড', path: '/travel' },
  { name: 'আমাদের দল', path: '/team' },
  { name: 'প্রভাবের গল্প', path: '/impact' },
  { name: 'যোগাযোগ', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/50 group-hover:border-accent transition-colors">
            <img 
              src="/image_0.png" 
              alt="জীবন বদলের গল্প Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/logo/100/100";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bengali-text leading-tight text-primary">জীবন বদলের গল্প</span>
            <span className="text-[10px] uppercase tracking-widest text-bronze font-medium">Stories of Changing Lives</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent relative py-1",
                location.pathname === item.path ? "text-primary" : "text-stone-600"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          ))}
          <button className="p-2 text-stone-600 hover:text-primary transition-colors">
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-xl py-6 px-4"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium bengali-text",
                    location.pathname === item.path ? "text-primary" : "text-stone-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative mt-2">
                <input 
                  type="text" 
                  placeholder="অনুসন্ধান..." 
                  className="w-full bg-stone-100 rounded-full py-2 px-10 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
