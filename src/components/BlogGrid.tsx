import { Post } from '../types';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogGridProps {
  posts: Post[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.map((post, i) => (
        <motion.article 
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-stone-400 mb-4 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
          </div>

          <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-stone-600 text-sm mb-6 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-stone-900 group-hover:text-accent transition-colors font-bold uppercase text-[10px] tracking-widest bengali-text">
            বিস্তারিত পড়ুন <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
