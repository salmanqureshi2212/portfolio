
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "React.js Intern",
      company: "DHWL Technologies",
      location: "Remote",
      period: "June 2022 - Sept 2022",
      responsibilities: [
        "Developed responsive UI components using React.js and Material-UI",
        "Collaborated with backend developers to integrate REST APIs",
        "Implemented state management using Redux and Context API",
        "Participated in code reviews and improved code quality"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      location: "Remote",
      period: "Oct 2022 - Present",
      responsibilities: [
        "Built custom websites for small businesses using modern frontend technologies",
        "Created e-commerce solutions with payment gateway integration",
        "Implemented SEO best practices to improve site rankings",
        "Provided technical consulting and maintenance services"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <h2 className="section-title">Experience</h2>

      <motion.div 
        className="mt-16 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            variants={itemVariants}
          >
            <div className="timeline-dot" />
            <div className="ml-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold gradient-text inline-block">
                {exp.title}
              </h3>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {exp.company}
              </h4>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-purple/20 text-purple mr-3 mt-0.5">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
