import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import aiVoiceImage from 'figma:asset/a3ae403935970831a067b32c5aaa580f4b834c8c.png';

const projects = [
  {
    title: "Catering Business Portfolio Website",
    description: "A professional portfolio website for a catering business showcasing services, menus, gallery, and customer testimonials with online booking functionality.",
    tech: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    gradient: "from-purple-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    liveDemo: "https://catering-business-portfolio.netlify.app/",
    github: "https://github.com/Dinakar578/catering-business-portfolio"
  },
  {
    title: "E-Commerce Website - Top 12 Brands",
    description: "Full-featured e-commerce platform featuring top 12 brand dresses for men and women, and footwear with payment integration, cart, and order management.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Cloudinary"],
    gradient: "from-cyan-600 to-blue-600",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    liveDemo: "https://luxora-97wh.vercel.app",
    github: "https://github.com/Dinakar578/Luxora"
  },
  {
    title: "AI Chatbot with Link Solutions",
    description: "Intelligent AI chatbot that provides solutions through relevant links based on user queries, powered by natural language processing and web scraping.",
    tech: ["JavaScript", "OpenAI API", "Node.js", "React"],
    gradient: "from-green-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?auto=format&fit=crop&w=900&q=80",
    github: "https://github.com/Dinakar578/Lyra-Telegram-Chatbot"
  },
  {
    title: "Personal Portfolio",
    description: "Modern, interactive personal portfolio website with smooth animations, project showcases, and contact form integration.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-pink-600 to-purple-600",
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    liveDemo: "https://personal-portfolio-pearl-nu-26.vercel.app/",
    github: "https://github.com/yourusername/personal-portfolio"
  },
  {
    title: "Employee Daily Report System",
    description: "Real-time reporting system for tracking daily employee activities, tasks, and productivity metrics with analytics dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    gradient: "from-orange-600 to-red-600",
   image:'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
    liveDemo: "https://employee-daily-report.onrender.com/",
    github: "https://github.com/Dinakar578/Employee-daily-report"
  },
  {
    title: "Employee & Student Register Portal",
    description: "A comprehensive registration system for managing employee and student data with authentication, CRUD operations, and role-based access control.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    gradient: "from-indigo-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    liveDemo: "https://register-portal-b25e.vercel.app/",
    github: "https://github.com/Dinakar578/Register-Portal"
  },
  {
    title: "Smart Complaint Management System",
    description: "Comprehensive complaint tracking and resolution system with automated workflows, status updates, and notification features for efficient issue management.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    gradient: "from-teal-600 to-green-600",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80",
    liveDemo: "https://online-complaint-management-system-virid.vercel.app/",
    github: "https://github.com/Dinakar578/Online-Complaint-Management-System"
  },
  {
    title: "Crop Disease Detection",
    description: "AI-powered application to detect crop diseases using image recognition and machine learning algorithms for early diagnosis.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    gradient: "from-lime-600 to-green-600",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    liveDemo: "https://crop-disease-detection-vert.vercel.app/",
    github: "https://github.com/Dinakar578/Crop-Disease-Detection"
  },
  
  {
    title: "Login Panel",
    description: "Secure authentication system with user login, registration, password recovery, and session management featuring modern UI design and form validation.",
    tech: ["React", "Node.js", "Express.js", "JWT"],
    gradient: "from-violet-600 to-fuchsia-600",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80",
    liveDemo: "https://login-panel-q49h.vercel.app/login",
    github: "https://github.com/Dinakar578/Login-panel"
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-30 transition-opacity`} />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold border border-white/20"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}