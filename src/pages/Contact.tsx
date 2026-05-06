import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs mb-4 block">যোগাযোগ করুন</span>
          <h1 className="text-5xl font-serif text-primary mb-6 bengali-text">আমাদের সাথে যোগাযোগ করুন</h1>
          <p className="text-stone-500 bengali-text">
            আপনার কাছে কি শেয়ার করার মতো কোনো গল্প আছে অথবা আমাদের কোনো প্রজেক্টে পার্টনার হতে চান? আমরা আপনার কথা শুনতে আগ্রহী।
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cream p-8 rounded-3xl">
                <Mail className="text-accent mb-4" size={24} />
                <h4 className="font-bold text-primary mb-1 bengali-text">ইমেল করুন</h4>
                <p className="text-sm text-stone-500">info@jibonbodolergolpo.com</p>
              </div>
              <div className="bg-cream p-8 rounded-3xl">
                <Phone className="text-accent mb-4" size={24} />
                <h4 className="font-bold text-primary mb-1 bengali-text">কল করুন</h4>
                <p className="text-sm text-stone-500">+৮৮০ ১২৩৪ ৫৬৭ ৮৯০</p>
              </div>
            </div>
            
            <div className="bg-cream p-8 rounded-3xl flex gap-6 items-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex flex-shrink-0 items-center justify-center text-accent shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1 bengali-text">আমাদের স্টুডিও</h4>
                <p className="text-sm text-stone-500 bengali-text">বনানী, ঢাকা, বাংলাদেশ</p>
              </div>
            </div>

            <div className="p-8 border border-accent/20 rounded-3xl bg-accent/5">
              <h4 className="font-bold text-primary mb-4 bengali-text">আমাদের সাহায্য করুন</h4>
              <p className="text-sm text-stone-600 leading-relaxed mb-6 bengali-text">
                আপনার অবদান আমাদের আরও মানুষের কাছে পৌঁছাতে এবং আরও প্রভাবশালী গল্প শেয়ার করতে সাহায্য করে। আজই দান করার কথা বিবেচনা করুন।
              </p>
              <button className="bg-accent text-primary px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-white transition-all bengali-text">
                এখনই দান করুন
              </button>
            </div>
          </div>

          <form className="bg-white p-10 rounded-[40px] shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">পুরো নাম</label>
                <input type="text" className="w-full bg-stone-50 border-stone-100 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 bengali-text" placeholder="জন ডো" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">ইমেল ঠিকানা</label>
                <input type="email" className="w-full bg-stone-50 border-stone-100 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">বিষয়</label>
              <select className="w-full bg-stone-50 border-stone-100 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 bengali-text">
                <option>মানবিক প্রজেক্ট প্রস্তাব</option>
                <option>ভ্রমণ গল্পের সাবমিশন</option>
                <option>মিডিয়া অনুসন্ধান</option>
                <option>অন্যান্য</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">আপনার বার্তা</label>
              <textarea rows={6} className="w-full bg-stone-50 border-stone-100 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 bengali-text" placeholder="আপনার গল্পটি বলুন..."></textarea>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-xl bengali-text">
              বার্তা পাঠান <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
