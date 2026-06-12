import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Award, Briefcase, Presentation, Users, Shield } from 'lucide-react';

const achievements = [
  {
    icon: Shield,
    title: "Cyber Security Workshop",
    organization: "Professional Development Program",
    description: "Participated in comprehensive workshop on Cyber Security, learning security best practices, threat detection, and vulnerability assessment",
    date: "2026",
    gradient: "from-red-600 to-orange-600"
  },
  {
    icon: Trophy,
    title: "3rd Place - Make Your Network",
    organization: "Technical Event Competition",
    description: "Secured 3rd place in the technical event 'Make Your Network', demonstrating networking and technical skills",
    date: "2025",
    gradient: "from-pink-600 to-purple-600"
  },
  {
    icon: Users,
    title: "Mobile Application Development Workshop",
    organization: "Technical Training Program",
    description: "Attended hands-on workshop on Mobile Application Development, gaining expertise in mobile app design and development",
    date: "2024",
    gradient: "from-green-600 to-emerald-600"
  },
  {
    icon: Presentation,
    title: "Paper Presentation on Cloud Computing",
    organization: "Technical Symposium",
    description: "Delivered a comprehensive paper presentation on Cloud Computing, showcasing research and technical knowledge",
    date: "2024",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    icon: Award,
    title: "Data Science and Analytics Workshop",
    organization: "Professional Development Program",
    description: "Participated in comprehensive workshop on Data Science and Analytics, learning advanced data analysis techniques and tools",
    date: "2023",
    gradient: "from-cyan-600 to-blue-600"
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="achievements" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center flex-shrink-0`}>
                      <achievement.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-purple-300">{achievement.organization}</p>
                    </div>
                    <span className="text-xs text-slate-400 bg-white/10 px-3 py-1 rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}