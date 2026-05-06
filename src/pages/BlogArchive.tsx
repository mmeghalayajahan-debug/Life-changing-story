import { BLOG_POSTS } from '../constants';
import BlogGrid from '../components/BlogGrid';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

export default function BlogArchive() {
  const [filter, setFilter] = useState('All');
  const posts = BLOG_POSTS.filter(p => p.category === 'Humanitarian');
  
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs mb-4 block">আর্কাইভ</span>
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6 bengali-text">মানবিক গল্পসমূহ</h1>
          <p className="text-stone-500 max-w-2xl mx-auto bengali-text">
            সারা বিশ্বের আশা, স্থিতিস্থাপকতা এবং রূপান্তরের গল্পগুলি অন্বেষণ করছি।
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 py-6 border-y border-stone-100">
           <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
              {['সব', 'শিক্ষা', 'স্বাস্থ্য', 'টেকসই', 'সম্প্রদায়'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap bengali-text ${
                    filter === cat ? 'bg-primary text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
           <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="ব্লগ অনুসন্ধান করুন..." 
                className="w-full bg-stone-50 border border-stone-100 rounded-full py-2.5 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 bengali-text"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
           </div>
        </div>

        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
