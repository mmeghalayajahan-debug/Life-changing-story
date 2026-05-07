import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <img 
                  src="/image_0.png" 
                  alt="لوگو" 
                  className="w-full h-full object-cover grayscale brightness-150"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/logo/100/100";
                  }}
                />
              </div>
              <span className="text-xl font-bold bengali-text text-white">জীবন বদলের গল্প</span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              গল্প বলার শক্তির মাধ্যমে জীবন পরিবর্তনের একটি ডিজিটাল মাধ্যম। 
              আমরা মানুষের স্থিতিস্থাপকতা এবং বৈশ্বিক সংস্কৃতির সন্ধিস্তল অন্বেষণ করি।
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-fb-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-stone-100 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/humanitarian" className="hover:text-accent transition-colors">মানবিক ব্লগ</Link></li>
              <li><Link to="/travel" className="hover:text-accent transition-colors">ভ্রমণ গাইড</Link></li>
              <li><Link to="/impact" className="hover:text-accent transition-colors">প্রভাতের গল্প</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">আমাদের সাহায্য করুন</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">বিভাগসমূহ</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">সামাজিক প্রভাব</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">পরিবেশবান্ধব ভ্রমণ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">সম্প্রদায় কল্যাণ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">বিশ্ব অন্বেষণ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">নিউজলেটার</h4>
            <p className="text-xs text-stone-500 mb-4 uppercase tracking-widest">অনুপ্রাণিত থাকুন</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="আপনার ইমেল" 
                className="bg-stone-800 border-none rounded-l-md px-4 py-2 w-full text-sm focus:ring-1 focus:ring-accent"
              />
              <button className="bg-accent text-primary font-bold px-4 py-2 rounded-r-md text-sm hover:bg-bronze transition-colors">
                যোগ দিন
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© ২০২৪ জীবন বদলের গল্প। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">গোপনীয়তা নীতি</a>
            <a href="#" className="hover:text-white transition-colors">পরিষেবার শর্তাবলী</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
