import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const skills = [
  { name: "HTML", level: 95, color: "from-orange-600 to-red-600" },
  { name: "CSS", level: 90, color: "from-blue-600 to-cyan-600" },
  { name: "JavaScript", level: 88, color: "from-yellow-600 to-amber-600" },
  { name: "React", level: 87, color: "from-cyan-600 to-blue-600" },
  { name: "Next.js", level: 85, color: "from-slate-600 to-gray-600" },
  { name: "Node.js", level: 85, color: "from-green-600 to-emerald-600" },
  { name: "Express.js", level: 82, color: "from-slate-600 to-gray-600" },
  { name: "REST API", level: 75, color: "from-orange-600 to-red-600" },
  { name: "MongoDB Atlas", level: 80, color: "from-green-600 to-teal-600" },
  { name: "MongoDB Compass", level: 85, color: "from-blue-600 to-sky-600" },
  { name: "Cloudinary", level: 82, color: "from-blue-600 to-sky-600" },
  { name: "Emailjs", level: 88, color: "from-yellow-600 to-amber-600" },
  { name: "Node Mailer", level: 87, color: "from-cyan-600 to-blue-600" },
  { name: "Git", level: 88, color: "from-red-600 to-orange-600" },
  { name: "GitHub", level: 85, color: "from-purple-600 to-pink-600" },
  { name: "VS Code", level: 90, color: "from-blue-600 to-indigo-600" },
  { name: "Figma", level: 75, color: "from-purple-600 to-violet-600" },
  { name: "v0/Vercel", level: 80, color: "from-indigo-600 to-purple-600" },
  { name: "Canva", level: 78, color: "from-pink-600 to-rose-600" },
  { name: "Netlify", level: 80, color: "from-green-600 to-teal-600" },
];

function CircularProgress({ skill, index, isInView }: { skill: typeof skills[0], index: number, isInView: boolean }) {
  const [progress, setProgress] = useState(0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-36 h-36">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="72"
            cy="72"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-white/10"
          />
          {/* Progress circle */}
          <motion.circle
            cx="72"
            cy="72"
            r={radius}
            stroke="url(#gradient-${index})"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={`text-purple-500`} style={{ stopColor: 'currentColor' }} />
              <stop offset="100%" className={`text-cyan-500`} style={{ stopColor: 'currentColor' }} />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{Math.round(progress)}%</span>
        </div>

        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 rounded-full`} />
      </div>
      
      <motion.p
        className="mt-4 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <CircularProgress key={index} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
