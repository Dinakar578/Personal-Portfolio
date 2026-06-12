
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, Shield } from 'lucide-react';

const experiences = [
  {
      title: 'Full Stack Web Development Internship',
      organization: 'Professional Training',
      duration: '1 Month Intern + 3 Months Work Experience',
      description: 'Acquired hands-on experience in building scalable web applications using Node.js, Express.js, and MongoDB. Worked on real-world projects implementing full-stack features.',
      icon: Briefcase,
       points: [
      "Intensive hands-on training in modern web development technologies including HTML5, CSS3, JavaScript, and React",
      "Built multiple real-world projects demonstrating full-stack development capabilities",
      "Learned industry best practices, version control with Git, and deployment workflows"
    ]
    },
  {
    title: "Web Development Course",
    organization: "Professional Training Program",
    duration: "3 Months",
    gradient: "from-purple-600 to-cyan-600",
    icon: Briefcase,
    points: [
      "Intensive hands-on training in modern web development technologies including HTML5, CSS3, JavaScript, and React",
      "Built multiple real-world projects demonstrating full-stack development capabilities",
      "Learned industry best practices, version control with Git, and deployment workflows"
    ]
  }
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center flex-shrink-0`}>
                      <experience.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-xl text-purple-300 mb-4">
                        {experience.organization}
                      </p>

                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Calendar className="w-5 h-5 text-cyan-400" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {experience.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-cyan-400' : i === 1 ? 'bg-purple-400' : 'bg-pink-400'} mt-2 flex-shrink-0`} />
                            <p className="text-slate-300">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
