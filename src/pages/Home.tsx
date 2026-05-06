import { motion } from 'motion/react';
import { ArrowRight, MapPin, Globe, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-[1.1] bengali-text">
              আপনার গল্প <span className="text-accent italic">পরিবর্তন</span> করুন। 
              <br className="hidden md:block" /> বিশ্ব অন্বেষণ করুন।
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed bengali-text">
              মানবিক কর্মকাণ্ডের সাথে বৈশ্বিক ভ্রমণের আত্মাকে যুক্ত করে এমন প্রামাণিক আখ্যানগুলি শেয়ার করতে আমাদের সাথে যোগ দিন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/humanitarian" className="bg-primary hover:bg-stone-800 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 bengali-text">
                প্রভাবের গল্প পড়ুন <ArrowRight size={18} />
              </Link>
              <Link to="/travel" className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-8 py-4 rounded-full font-bold transition-all bengali-text">
                আপনার যাত্রা পরিকল্পনা করুন
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 rounded-full bg-white/30 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Humanitarian Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs mb-4 block">গল্প যা গুরুত্বপূর্ণ</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 bengali-text">মানবিক কণ্ঠস্বর</h2>
              <p className="text-stone-600 leading-relaxed bengali-text">
                বিশ্বের দূরতম প্রান্ত থেকে স্থিতিস্থাপকতা এবং সম্প্রদায়ের ক্ষমতায়নের আখ্যানগুলি আবিষ্কার করুন। 
                আমাদের ব্লগ বাস্তব প্রভাব এবং টেকসই পরিবর্তনের উপর আলোকপাত করে।
              </p>
            </div>
            <Link to="/humanitarian" className="text-primary font-bold flex items-center gap-2 group border-b-2 border-transparent hover:border-accent pb-1 transition-all bengali-text">
              সব গল্প দেখুন <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.filter(p => p.category === 'Humanitarian').map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-md shadow-stone-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                    {post.tags[0]}
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-stone-400 group-hover:text-primary transition-colors">
                  Read More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Explore Section */}
      <section className="py-24 bg-cream relative overflow-hidden">
        {/* Subtle Tree of Life Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-[600px] h-[600px]">
          <img src="/image_0.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4 pt-12">
                  <img src="https://picsum.photos/seed/travel1/400/600" alt="Travel 1" className="rounded-3xl shadow-xl w-full aspect-[2/3] object-cover" />
                  <img src="https://picsum.photos/seed/travel2/400/400" alt="Travel 2" className="rounded-3xl shadow-xl w-full aspect-square object-cover" />
                </div>
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/travel3/400/400" alt="Travel 3" className="rounded-3xl shadow-xl w-full aspect-square object-cover" />
                  <img src="https://picsum.photos/seed/travel4/400/600" alt="Travel 4" className="rounded-3xl shadow-xl w-full aspect-[2/3] object-cover" />
                </div>
              </motion.div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent rounded-2xl text-white">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Total Destinations</p>
                    <p className="text-2xl font-serif text-primary">24+ Countries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <span className="text-bronze uppercase tracking-[0.2em] font-bold text-xs">নির্বাচিত গাইড</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary bengali-text">ভ্রমণ ও অন্বেষণ</h2>
              <p className="text-stone-600 leading-relaxed max-w-lg bengali-text">
                আমরা বিশ্বাস করি যে ভ্রমণ কেবল দর্শনীয় স্থান দেখার চেয়ে বেশি কিছু; এটি একটি ভূমি সংজ্ঞায়িত করা মানুষ এবং গল্প বোঝার বিষয়। 
                আমাদের গাইড সহানুভূতি এবং কৌতূহল দিয়ে তৈরি।
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <MapPin className="text-accent" />, title: "স্থানীয় অন্তর্দৃষ্টি", desc: "যারা গন্তব্যটিকে তাদের বাড়ি বলে ডাকে তাদের টিপস।" },
                  { icon: <Globe className="text-accent" />, title: "বৈশ্বিক ভ্রমণপথ", desc: "অর্থপূর্ণ অন্বেষণের জন্য বিস্তারিত পরিকল্পনা।" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-primary bengali-text">{item.title}</h4>
                      <p className="text-sm text-stone-500 bengali-text">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/travel" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-lg bengali-text">
                অন্বেষণ শুরু করুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Voices Testimonials */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="container mx-auto px-4 text-center mb-16">
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs mb-4 block">প্রশংসাপত্র</span>
          <h2 className="text-4xl font-serif text-primary bengali-text">সুধীজনের কথা</h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "রফিকুল ইসলাম", role: "উপকারভোগী", quote: "এখানে শেয়ার করা গল্পগুলি আমাদের গ্রামকে স্বীকৃতি দিয়েছে যা শেষ পর্যন্ত একটি লাইব্রেরি পেতে সাহায্য করেছে।" },
              { name: "এলেনা গিলবার্ট", role: "ভ্রমণপিপাসু", quote: "যারা পর্যটন ফাঁদের বাইরে আসল বিশ্ব দেখতে চান তাদের জন্য সেরা ভ্রমণ গাইড।" },
              { name: "তানভীর আহমেদ", role: "দাতা", quote: "প্রভাবের গল্পগুলো দেখার মাধ্যমে প্রতিটি অবদান অর্থপূর্ণ এবং স্বচ্ছ মনে হয়।" }
            ].map((voice, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-cream p-10 rounded-3xl relative"
              >
                <Quote size={40} className="text-accent/20 absolute top-8 right-8" />
                <p className="text-stone-700 italic mb-8 relative z-10 leading-relaxed">
                  "{voice.quote}"
                </p>
                <div>
                  <h5 className="font-bold text-primary">{voice.name}</h5>
                  <p className="text-xs text-stone-500 uppercase tracking-widest">{voice.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[40px] px-8 py-16 md:p-20 text-center text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
              <img src="https://picsum.photos/seed/texture/800/800" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight bengali-text">প্রতিটি গল্প একটি জীবন বদলে দিতে পারে। প্রতিটি যাত্রা একটি দৃষ্টিভঙ্গি বদলে দিতে পারে।</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-accent text-primary px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-xl bengali-text">
                  সাহায্য করুন
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold transition-all bengali-text">
                  আপডেটের জন্য সাবস্ক্রাইব করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
