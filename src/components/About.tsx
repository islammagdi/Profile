import { motion } from "motion/react";
import { User, Award, Heart, Zap } from "lucide-react";
import { memo } from "react";
import profileImage from "figma:asset/c029d1d7793c935c3eff8ebe975d733a5cbbd884.png";

const features = [
    {
      icon: <User className="w-8 h-8" />,
      title: "User-Centered",
      description:
        "Every design decision is made with the end user in mind",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning",
      description:
        "Recognized for outstanding design excellence and innovation",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passionate",
      description:
        "Driven by a love for creating meaningful digital experiences",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Delivery",
      description:
        "Efficient workflow ensuring timely project completion",
    },
  ];

export const About = memo(() => {
  return (
    <section id="about" data-section="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            I'm a passionate UI/UX designer with 3+ years of
            experience creating digital experiences that delight
            users and drive business results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="w-64 h-64 rounded-3xl overflow-hidden relative">
                  <img
                    src={profileImage}
                    alt="Islam Magdi - UI/UX Designer"
                    className="w-full h-full object-cover filter contrast-110 saturate-110"
                    style={{
                      filter:
                        "contrast(1.1) saturate(1.1) hue-rotate(10deg) brightness(1.05)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-pink-400/20 mix-blend-overlay rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent rounded-3xl"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-white mb-4">
              Crafting Digital Excellence
            </h3>
            <p className="text-white/70 leading-relaxed">
              With a keen eye for detail and a passion for user
              experience, I transform complex problems into
              simple, elegant solutions. My approach combines
              research-driven insights with creative innovation
              to deliver designs that not only look beautiful
              but also perform exceptionally.
            </p>
            <p className="text-white/70 leading-relaxed">
              I believe that great design is invisible – it just
              works. Every pixel, every interaction, and every
              micro-animation is carefully considered to create
              seamless experiences that users love.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                "UI Design",
                "UX Research",
                "Prototyping",
                "Design Systems",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-full text-white/80"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h4 className="text-xl text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-white/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});