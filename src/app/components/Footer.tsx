import { motion } from 'motion/react';
import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-slate-400 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            © 2026 Dinakar K S. All rights reserved.
          </motion.p>
          
          <motion.p
            className="text-slate-400 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and <Code2 className="w-4 h-4 text-cyan-400" />
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
