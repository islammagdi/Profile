import { motion } from "motion/react";
import { ExternalLink, Eye, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Portfolio() {
  const [selectedProject, setSelectedProject] =
    useState<null | {
      title: string;
      image: string;
    }>(null);

  const openImageModal = (
    project: { title: string; image: string },
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setSelectedProject(project);
  };

  const closeImageModal = () => {
    setSelectedProject(null);
  };

  const openProjectBehance = (
    behanceUrl: string,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    window.open(behanceUrl, "_blank", "noopener,noreferrer");
  };

  const openBehanceProject = (behanceUrl: string) => {
    window.open(behanceUrl, "_blank", "noopener,noreferrer");
  };

  const openAllProjects = () => {
    window.open("https://www.behance.net/islammagdi", "_blank", "noopener,noreferrer");
  };

  const projects = [
    {
      id: 1,
      title: "Waseela Dashboard",
      category: "Dashboard Website",
      description:
        "A UI design for the Waseela app featuring an intuitive dashboard for managing financial transactions. The design emphasizes simplicity and seamless navigation to help users easily track and analyze their financial data.",
      image:
        "https://res.cloudinary.com/dwi30ki0t/image/upload/v1758453430/Waseela_wqsrmr.jpg",
      gradient: "from-purple-500 to-pink-500",
      behanceUrl:
        "https://www.behance.net/gallery/219961133/Waseela-LMS-Dashboard", // Replace with actual Behance URL
    },
    {
      id: 2,
      title: "Himma Application",
      category: "Mobile App Design",
      description:
        "Himma project is a mobile app designed to rehabilitate children with hearing impairments following cochlear implant surgery. It provides interactive training tools to help them develop their hearing and speech skills, focusing on creating a supportive and engaging learning environment to accelerate their rehabilitation process.",
      image:
        "https://res.cloudinary.com/dwi30ki0t/image/upload/v1758453631/himma_ebtbxc.png",
      gradient: "from-blue-500 to-purple-500",
      behanceUrl:
        "https://www.behance.net/gallery/218461547/Hemma-Mobile-App-UI", // Replace with actual Behance URL
    },
    {
      id: 3,
      title: "3la Gnb Mobile App",
      category: "Website Design",
      description:
        "3la Gnb is an app designed to provide comprehensive and accurate information about various transportation options in Cairo, including the metro, buses, taxis, and ride-hailing services. It offers users maps, schedules, and route evaluations to help them choose the most efficient and convenient travel option within the city.",
      image:
        "https://res.cloudinary.com/dwi30ki0t/image/upload/v1758453819/3lagnb_qwtcuv.png",
      gradient: "from-green-500 to-blue-500",
      behanceUrl:
        "https://www.behance.net/gallery/117657589/3lagnbcom-UI-Web-Design", // Replace with actual Behance URL
    },
    {
      id: 4,
      title: "Park It App",
      category: "Mobile Design",
      description:
        "Park It is a mobile application designed for drivers to easily find available parking spaces in real-time. The app provides users with a map of nearby parking lots, street parking, and other parking options, helping them save time and avoid the frustration of searching for a spot. It also offers features like real-time availability updates, pricing details, and navigation to the selected parking location.",
      image:
        "https://res.cloudinary.com/dwi30ki0t/image/upload/v1758453819/parkit_ubsbyg.png",
      gradient: "from-orange-500 to-red-500",
      behanceUrl:
        "https://www.behance.net/gallery/218403201/Park-It-Case-Study", // Replace with actual Behance URL
    },
    {
      id: 5,
      title: "Madd Store",
      category: "Mobile Design",
      description:
        "Madd Store is a mobile application dedicated to providing a wide range of laptop accessories. It offers users a convenient shopping experience for products such as laptop sleeves, stands, chargers, keyboard covers, and more. The app features an easy-to-use interface, secure payment options, and fast delivery services, making it the go-to platform for all laptop accessory needs.",
      image:
        "https://res.cloudinary.com/dwi30ki0t/image/upload/v1758454170/madd_oi7m3f.png",
      gradient: "from-pink-500 to-purple-500",
      behanceUrl:
        "https://www.behance.net/gallery/116754383/MADD-Store-App-UI-Design", // Replace with actual Behance URL
    },
    {
      id: 6,
      title: "Color Remix Logo",
      category: "Logo Design",
      description:
        "Color Remix is a team specializing in advertising and development, and the logo design reflects creativity and innovation in their work. The logo combines vibrant, harmonious colors symbolizing diversity and continuous renewal in their advertising and development campaigns. It represents their ability to mix ideas and execute them in a unique way, focusing on providing innovative solutions for their clients.",
      image:
        "https://res.cloudinary.com/dwi30ki0t/image/upload/v1758454332/cr_ki7obe.png",
      gradient: "from-indigo-500 to-blue-500",
      behanceUrl:
        "https://www.behance.net/gallery/110969383/Color-Remix-Logo", // Replace with actual Behance URL
    },
  ];

  return (
    <section id="portfolio" data-section="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A collection of projects that showcase my passion
            for creating exceptional user experiences
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() =>
                openBehanceProject(project.behanceUrl)
              }
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex gap-4">
                    <motion.button
                      onClick={(e) =>
                        openImageModal(
                          {
                            title: project.title,
                            image: project.image,
                          },
                          e,
                        )
                      }
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      onClick={(e) =>
                        openProjectBehance(
                          project.behanceUrl,
                          e,
                        )
                      }
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-white/20 rounded-full mb-3`}
                >
                  {project.category}
                </span>
                <h3 className="text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={openAllProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeImageModal}
              className="absolute -top-4 -right-4 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl text-white text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}