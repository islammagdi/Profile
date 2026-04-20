import { motion } from "motion/react";
import { Palette, Smartphone, Monitor, Users, Figma, Zap } from "lucide-react";

export function Skills() {
  const skills = [
    { name: "UI Design", level: 95, icon: <Palette className="w-6 h-6" />, color: "from-purple-400 to-pink-400" },
    { name: "UX Research", level: 90, icon: <Users className="w-6 h-6" />, color: "from-blue-400 to-purple-400" },
    { name: "Mobile Design", level: 88, icon: <Smartphone className="w-6 h-6" />, color: "from-green-400 to-blue-400" },
    { name: "Web Design", level: 92, icon: <Monitor className="w-6 h-6" />, color: "from-orange-400 to-red-400" },
    { name: "Prototyping", level: 85, icon: <Figma className="w-6 h-6" />, color: "from-pink-400 to-purple-400" },
    { name: "Design Systems", level: 87, icon: <Zap className="w-6 h-6" />, color: "from-indigo-400 to-blue-400" }
  ];

  const tools = [
    "Figma", "Adobe XD", "Sketch", "Principle", "Framer", "InVision",
    "Adobe Creative Suite", "Zeplin", "Miro", "Notion", "Slack", "Jira"
  ];

  return (
    <section id="skills" data-section="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive set of design skills honed through years of experience and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-white mb-8">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-white">{skill.name}</span>
                    </div>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-white mb-8">Tools & Software</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl text-white mb-4">Design Philosophy</h4>
              <p className="text-white/70 leading-relaxed">
                "Design is not just what it looks like and feels like. Design is how it works. I believe in creating experiences that are not only visually stunning but also intuitive, accessible, and meaningful to the people who use them."
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "Projects Completed", gradient: "from-purple-400 to-pink-400" },
            { number: "3+", label: "Years Experience", gradient: "from-blue-400 to-purple-400" },
            { number: "30+", label: "Happy Clients", gradient: "from-green-400 to-blue-400" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`text-5xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}