import { motion } from 'motion/react';
import { Code2, Sparkles, Laptop } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-blue-950/20 pointer-events-none" />

      {/* Floating 3D objects */}
      <motion.div
        className="absolute top-20 left-20 text-purple-400"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Laptop className="w-20 h-20 opacity-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-40 text-cyan-400"
        animate={{
          y: [0, 40, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code2 className="w-24 h-24 opacity-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 text-pink-400"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-16 h-16 opacity-20" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          className="text-cyan-400 text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to my portfolio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Dinakar K S
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full Stack Web Developer crafting beautiful, interactive experiences with modern technologies and cutting-edge animations
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-purple-500 rounded-lg text-white font-semibold hover:bg-purple-500/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Technology badges */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'].map((tech, index) => (
            <motion.div
              key={tech}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-slate-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
