import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Proctor Plus",
      description:
        "AI-powered skill assessment platform with facial verification, tab-switch/speech detection, Hugging Face behavioral AI, and analytics dashboard.",
      image: "/proctorplus.png",
      technologies: ["Django", "Next.js", "FaceApi.js", "Hugging Face"],
      liveUrl: "https://proctorplus.netlify.app/",
      sourceUrl: "https://github.com/waisodum/proctorPlus",
    },
    {
      title: "Chatliee",
      description:
        "Real-time one-to-one chat app with JWT Auth, friend system, live chat, and MongoDB optimization.",
      image: "chatliee.png",
      technologies: ["MERN Stack", "Socket.IO", "JWT", "MongoDB"],
      liveUrl: "https://chatliee.netlify.app",
      sourceUrl: "https://github.com/waisodum/chatliee",
    },
    {
      title: "J&k Treasure",
      description:
        "A vibrant e-commerce site supporting local sellers with product management, order tracking, and payment integration.",
      image: "kashmir.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      // liveUrl: "#",
      sourceUrl: "https://github.com/AryavJain17/Smart-India-Hackathon",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
      className="section-container bg-gray-50 dark:bg-gray-900/50"
    >
      <h2 className="section-title">Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card h-full flex flex-col"
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple/10 text-purple dark:text-purple-light text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.liveUrl ? (
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center text-purple hover:text-purple-dark dark:text-purple-light dark:hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>Live Demo</span>
                  </motion.a>
                ) : (
                  <></>
                )}

                {project.sourceUrl ? (
                  <motion.a
                    href={project.sourceUrl}
                    className="flex items-center text-purple hover:text-purple-dark dark:text-purple-light dark:hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span>Source</span>
                  </motion.a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
