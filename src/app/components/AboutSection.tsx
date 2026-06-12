import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User, Target, Rocket } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: User,
              title: "Who I Am",
              description: "Passionate Full Stack Developer with expertise in building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
              gradient: "from-purple-600 to-pink-600"
            },
            {
              icon: Target,
              title: "What I Do",
              description: "I specialize in creating scalable web applications using JavaScript, Node.js, and modern frameworks. From concept to deployment, I handle the complete development lifecycle.",
              gradient: "from-cyan-600 to-blue-600"
            },
            {
              icon: Rocket,
              title: "My Goal",
              description: "To continuously learn and adapt to new technologies while delivering high-quality solutions that make a real impact in the digital world.",
              gradient: "from-pink-600 to-purple-600"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
