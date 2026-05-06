import { motion } from 'motion/react';
import { Heart, Globe, Star } from 'lucide-react';

export default function ImpactStories() {
  const stories = [
    { id: 1, title: " ৫০০ পরিবারের জন্য বিশুদ্ধ পানি", impact: "স্বাস্থ্য উন্নতি", location: "রংপুর", image: "https://picsum.photos/seed/imp1/800/600" },
    { id: 2, title: "১০০ জন মেয়ে স্কুলে ফিরল", impact: "শিক্ষা অ্যাক্সেস", location: "বরিশাল", image: "https://picsum.photos/seed/imp2/800/600" },
    { id: 3, title: "টেকসই কৃষিকাজ উদ্যোগ", impact: "জীবিকা সহায়তা", location: "বগুড়া", image: "https://picsum.photos/seed/imp3/800/600" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs mb-4 block">আমাদের প্রভাব</span>
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6 bengali-text">পরিবর্তনের গল্প</h1>
          <p className="text-stone-500 bengali-text">
            সম্প্রদায়ের শক্তির একটি প্রমাণ। আমাদের গল্প বলা এবং মানবিক প্রচেষ্টা বাস্তব জীবনে যে পরিমাপযোগ্য প্রভাব ফেলেছে তা অন্বেষণ করুন।
          </p>
        </header>

        <div className="space-y-24">
          {stories.map((story, i) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-[40px] shadow-2xl">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                 <div className="flex items-center gap-2 text-bronze">
                    <Star size={20} fill="currentColor" />
                    <span className="font-bold uppercase tracking-widest text-[10px] bengali-text">{story.impact}</span>
                 </div>
                 <h2 className="text-4xl font-serif text-primary leading-tight bengali-text">{story.title}</h2>
                 <p className="text-stone-600 leading-relaxed bengali-text">
                   নিবেদিত প্রচেষ্টা এবং আমাদের পাঠকদের সহযোগিতায় আমরা {story.location}-এ উল্লেখযোগ্য পরিবর্তন আনতে সক্ষম হয়েছি। 
                   এই প্রকল্পটি দীর্ঘমেয়াদী টেকসইতা এবং সম্প্রদায়ের মালিকানার উপর দৃষ্টি নিবদ্ধ করে।
                 </p>
                 <div className="flex gap-8 pt-4">
                    <div>
                      <p className="text-2xl font-serif text-primary bengali-text">৫০০+</p>
                      <p className="text-[10px] uppercase text-stone-400 font-bold tracking-widest bengali-text">জীবন স্পৃষ্ট</p>
                    </div>
                    <div className="w-px h-10 bg-stone-200"></div>
                    <div>
                      <p className="text-2xl font-serif text-primary bengali-text">১০০%</p>
                      <p className="text-[10px] uppercase text-stone-400 font-bold tracking-widest bengali-text">টেকসই</p>
                    </div>
                 </div>
                 <button className="text-primary font-bold border-b-2 border-accent pb-1 text-sm hover:text-accent transition-colors bengali-text">
                    বিস্তারিত রিপোর্ট পড়ুন
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
