import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Send, Image as ImageIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function SubmitStory() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Humanitarian',
    excerpt: '',
    content: '',
    image: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    setError(null);

    try {
      const path = 'posts';
      await addDoc(collection(db, path), {
        ...formData,
        authorId: user.uid,
        author: user.displayName || 'Anonymous',
        createdAt: serverTimestamp(),
        status: 'published', // Automatically publish for now
      });
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'posts');
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="pt-40 pb-20 container mx-auto px-4 text-center">
        <AlertCircle className="mx-auto text-red-500 mb-4" size={48} />
        <h2 className="text-2xl font-serif text-primary mb-2 bengali-text">দয়া করে লগইন করুন</h2>
        <p className="text-stone-500 bengali-text">গল্প জমা দিতে আপনাকে অবশ্যই লগইন করতে হবে।</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12"
        >
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-serif text-primary mb-4 bengali-text">আপনার গল্পটি শেয়ার করুন</h1>
            <p className="text-stone-500 bengali-text">আপনার জীবনের অনুপ্রেরণামূলক গল্পটি আমাদের জানান</p>
          </header>

          {success ? (
            <div className="text-center py-12">
              <CheckCircle2 className="mx-auto text-green-500 mb-6" size={64} />
              <h2 className="text-2xl font-serif text-primary mb-2 bengali-text">সাফল্যের সাথে জমা দেওয়া হয়েছে!</h2>
              <p className="text-stone-500 bengali-text">আপনার গল্পটি এখন আমাদের প্ল্যাটফর্মে দৃশ্যমান হবে।</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">গল্পের শিরোনাম</label>
                <input 
                  required
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-stone-50 border-stone-100 rounded-2xl py-4 px-6 text-lg font-serif focus:outline-none focus:ring-2 focus:ring-accent/20" 
                  placeholder="আপনার গল্পের একটি সুন্দর নাম দিন" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">বিভাগ</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-stone-50 border-stone-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="Humanitarian">মানবিক</option>
                    <option value="Travel">ভ্রমণ</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">ছবির ইউআরএল (ঐচ্ছিক)</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      className="w-full bg-stone-50 border-stone-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" 
                      placeholder="https://example.com/image.jpg" 
                    />
                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">সংক্ষিপ্ত সারমর্ম</label>
                <textarea 
                  required
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full bg-stone-50 border-stone-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" 
                  placeholder="আপনার গল্পের একটি সংক্ষিপ্ত বর্ণনা"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 bengali-text">মূল গল্প</label>
                <textarea 
                  required
                  rows={8}
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="w-full bg-stone-50 border-stone-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" 
                  placeholder="বিস্তারিত আপনার জীবনের গল্পটি লিখুন..."
                ></textarea>
              </div>

              {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-2xl text-sm flex items-center gap-3">
                  <AlertCircle size={18} />
                  <span className="bengali-text">{error}</span>
                </div>
              )}

              <button 
                disabled={loading}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-xl disabled:opacity-50"
              >
                {loading ? 'প্রক্রিয়াধীন...' : (
                  <>
                    <span className="bengali-text">গল্প জমা দিন</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
