import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../constants';
import { Heart, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/about-bg/1920/1080" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8 bengali-text"
          >
            আমাদের গল্প (Our Story)
          </motion.h1>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8 bengali-text">গল্পের মাধ্যমে জীবন পরিবর্তন</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-12 bengali-text">
            "জীবন বদলের গল্প" গ্রামীণ বাংলার অগণিত বীরদের নথিভুক্ত করার একটি ছোট উদ্যোগ হিসেবে শুরু হয়েছিল। 
            আমরা বিশ্বাস করি যে প্রতিটি জীবনের একটি আখ্যান রয়েছে যা শোনার যোগ্য এবং সেই আখ্যানগুলির মধ্যেই পরিবর্তনের বীজ নিহিত রয়েছে। 
            আমাদের লক্ষ্য হলো যারা সাহায্য করতে চান এবং যারা তৃণমূল পর্যায়ে কাজ করছেন তাদের মধ্যে একটি সেতুবন্ধন তৈরি করা।
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-stone-100">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-accent mb-6">
                <Heart size={32} />
              </div>
              <h4 className="font-bold text-primary mb-2 bengali-text">সহানুভূতি প্রথম</h4>
              <p className="text-sm text-stone-500 bengali-text">আমরা মানুষের সংযোগ এবং আবেগগত সত্যকে অগ্রাধিকার দিই।</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-accent mb-6">
                <Globe size={32} />
              </div>
              <h4 className="font-bold text-primary mb-2 bengali-text">বৈশ্বিক দৃষ্টিভঙ্গি</h4>
              <p className="text-sm text-stone-500 bengali-text">স্থানীয় গল্পগুলোকে বিশ্বব্যাপী দর্শকদের সাথে সংযুক্ত করছি।</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-accent mb-6">
                <Users size={32} />
              </div>
              <h4 className="font-bold text-primary mb-2 bengali-text">সম্প্রদায় চালিত</h4>
              <p className="text-sm text-stone-500 bengali-text">আমরা যাদের সেবা করি তাদের জন্য এবং তাদের দ্বারাই নির্মিত।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary bengali-text">আমাদের দল</h2>
            <p className="text-stone-500 mt-4 uppercase tracking-[0.2em] font-bold text-xs bengali-text">গল্পের নেপথ্যের কারিগর</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <motion.div 
                key={member.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[40px] overflow-hidden shadow-xl"
              >
                <div className="aspect-square relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="text-sm uppercase tracking-widest text-accent font-bold mb-1 bengali-text">{member.role}</p>
                    <h3 className="text-2xl font-serif bengali-text">{member.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-stone-600 leading-relaxed text-sm bengali-text">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story Context */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <img src="https://picsum.photos/seed/story-impact/800/800" alt="Impact" className="rounded-3xl shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-serif text-primary bengali-text">কীভাবে গল্প জীবন বদলে দেয়</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed bengali-text">
              <p>
                যখন আমরা এমন এক মেয়ের গল্প শেয়ার করি যে বাল্যবিবাহ জয় করে শিক্ষিকা হয়েছে, তখন আমরা কেবল ঘটনার পরিক্রমা বর্ণনা করি না। 
                আমরা তার অবস্থানে থাকা অন্যদের জন্য একটি পথনির্দেশিকা প্রদান করি।
              </p>
              <p>
                যখন আমরা পার্বত্য চট্টগ্রামের একটি লুকানো ঝরনার সৌন্দর্য দেখাই, তখন আমরা টেকসই পর্যটনকে উৎসাহিত করি যা স্থানীয় আদিবাসী সম্প্রদায়ের জীবিকা নির্বাহে সাহায্য করে।
              </p>
              <p className="font-bold text-primary italic bengali-text">
                গল্প বলা হলো সহানুভূতির জ্বালানি, আর সহানুভূতি হলো পরিবর্তনের ইঞ্জিন।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
