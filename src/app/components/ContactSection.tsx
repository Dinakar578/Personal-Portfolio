import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7904556455",
      href: "tel:+917904556455",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "dinakar06dinakar06@gmail.com",
      href: "mailto:dinakar06dinakar06@gmail.com",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dinakardina007",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Dinakar578",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group block"
              >
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0`}>
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{contact.label}</p>
                      <p className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${social.gradient} rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
                >
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.a
              href="mailto:dinakar06dinakar06@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full text-white text-lg font-bold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 transition-all"
            >
              Send Me a Message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
