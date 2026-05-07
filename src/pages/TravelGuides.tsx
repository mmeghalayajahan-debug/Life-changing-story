import BlogGrid from '../components/BlogGrid';
import { Map as MapIcon, Compass, Plane } from 'lucide-react';
import { motion } from 'motion/react';
import { usePosts } from '../hooks/usePosts';
import { BLOG_POSTS } from '../constants';

export default function TravelGuides() {
  const { posts: firebasePosts, loading } = usePosts('Travel');
  const staticPosts = BLOG_POSTS.filter(p => p.category === 'Travel');
  const posts = [...firebasePosts, ...staticPosts];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <span className="text-bronze uppercase tracking-[0.2em] font-bold text-xs mb-4 block">অন্বেষণ</span>
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6 bengali-text">ভ্রমণ ও বিশ্ব দর্শন</h1>
          <p className="text-stone-500 max-w-2xl mx-auto bengali-text">
            আত্মিক ভ্রমণপিপাসুদের জন্য কিউরেটেড গাইড। সিলেটের পান্না সবুজ পাহাড় থেকে শুরু করে বিশ্বের বড় শহরগুলোর ব্যস্ত রাস্তা পর্যন্ত।
          </p>
        </header>

        {/* Map Placeholder */}
        <section className="mb-24">
          <div className="bg-primary rounded-[48px] overflow-hidden relative shadow-2xl h-[500px] flex items-center justify-center group cursor-crosshair">
             {/* Abstract Map Background */}
             <div className="absolute inset-0 opacity-20 transition-all duration-1000 group-hover:scale-110">
               <img src="https://picsum.photos/seed/worldmap/1600/800" alt="Map" className="w-full h-full object-cover" />
             </div>
             
             <div className="relative z-10 text-center text-white p-8 max-w-lg">
                <MapIcon className="mx-auto mb-6 text-accent animate-pulse" size={48} />
                <h3 className="text-3xl font-serif mb-4 bengali-text">ইন্টারেক্টিভ গ্লোব</h3>
                <p className="text-white/70 text-sm mb-8 bengali-text">
                  প্রতিটি স্থানের কিউরেটেড গাইড অন্বেষণ করতে পিনগুলিতে ক্লিক করুন। (ইউআই ওয়্যারফ্রেমের জন্য ফিল্টার প্লেসহোল্ডার)
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   {['সিলেট', 'ঢাকা', 'বান্দরবান', 'প্যারিস', 'নিউ ইয়র্ক'].map(city => (
                     <div key={city} className="bg-white/10 backdrop-blur px-4 py-2 rounded-2xl border border-white/20 text-xs font-bold hover:bg-accent hover:text-primary transition-all cursor-pointer bengali-text">
                        {city}
                     </div>
                   ))}
                </div>
             </div>

             {/* Interactive Pins (Visual only) */}
             <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ repeat: Infinity, duration: 2 }}
               className="absolute top-1/4 left-1/3 text-accent"
             >
               <MapPinIcon />
             </motion.div>
             <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
               className="absolute top-1/2 left-1/2 text-white"
             >
               <MapPinIcon />
             </motion.div>
             <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ repeat: Infinity, duration: 2, delay: 1 }}
               className="absolute top-1/3 right-1/4 text-bronze"
             >
               <MapPinIcon />
             </motion.div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
           <div className="bg-cream p-10 rounded-3xl border border-stone-200">
              <Compass className="text-accent mb-6" size={32} />
              <h4 className="text-xl font-serif text-primary mb-3 bengali-text">প্রামাণিক ভ্রমণপথ</h4>
              <p className="text-sm text-stone-500 leading-relaxed bengali-text">
                সাধারণ পর্যটন কেন্দ্রের চেয়ে স্থানীয় সংস্কৃতি এবং টেকসই বিষয়গুলোকে অগ্রাধিকার দেওয়া পরিকল্পনা।
              </p>
           </div>
           <div className="bg-cream p-10 rounded-3xl border border-stone-200">
              <Plane className="text-accent mb-6" size={32} />
              <h4 className="text-xl font-serif text-primary mb-3 bengali-text">ভ্রমণ লজিস্টিকস</h4>
              <p className="text-sm text-stone-500 leading-relaxed bengali-text">
                ভিসা, স্থানীয় পরিবহন এবং ঋতুগত বিবেচনার বিষয়ে বাস্তবসম্মত পরামর্শ।
              </p>
           </div>
           <div className="bg-cream p-10 rounded-3xl border border-stone-200">
              <MapIcon className="text-accent mb-6" size={32} />
              <h4 className="text-xl font-serif text-primary mb-3 bengali-text">লুকানো রত্ন</h4>
              <p className="text-sm text-stone-500 leading-relaxed bengali-text">
                এমন সব স্থান আবিষ্কার করুন যা প্রায়শই মূলধারার ভ্রমণ মিডিয়া দ্বারা উপেক্ষা করা হয়।
              </p>
           </div>
        </div>

        <h2 className="text-4xl font-serif text-primary mb-12 bengali-text">নির্বাচিত গাইডসমূহ</h2>
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <div className="relative">
      <div className="w-8 h-8 rounded-full bg-current rounded-bl-none rotate-45 flex items-center justify-center">
         <div className="-rotate-45 w-2 h-2 rounded-full bg-primary"></div>
      </div>
      <div className="w-12 h-6 bg-current/20 blur-md absolute -bottom-2 -left-2 scale-y-50 rounded-full"></div>
    </div>
  );
}
