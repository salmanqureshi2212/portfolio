import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("languages");

  const skillCategories: Record<string, SkillCategory> = {
    languages: {
      title: "Languages",
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 80 },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Flask", level: 80 },
        { name: "TensorFlow", level: 70 },
        { name: "Scikit-learn", level: 75 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
      ],
    },
    tools: {
      title: "Developer Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Webpack", level: 80 },
      ],
    },
    databases: {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 85 },
      ],
    },
    cloud: {
      title: "Cloud, DevOps and  MLOps",
      skills: [
        { name: "AWS (EC2, Lambda, S3)", level: 75 },
        { name: "Netlify", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Samba", level: 70 },
        { name: "FTP", level: 75 },
        { name: "NFS", level: 70 },
        { name: "Nginx", level: 70 },
      ],
    },
    other: {
      title: "Other Skills",
      skills: [
        { name: "Web Performance Optimization", level: 80 },
        { name: "Front-end & Back-end Development", level: 90 },
        { name: "Microservices", level: 75 },
        { name: "System Design", level: 80 },
        { name: "API Development", level: 85 },
        { name: "Serverless Computing", level: 75 },
      ],
    },
  };

  const tabs = Object.keys(skillCategories);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      <div className="flex justify-center mt-16 mb-12">
        <div className="flex rounded-full p-1 max-sm:overflow-auto scrollbar-hide bg-gray-100 dark:bg-gray-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-purple text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {skillCategories[tab].title}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        key={activeTab}
        className="space-y-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        {skillCategories[activeTab].skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="mb-6"
            variants={skillVariants}
            custom={index}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="progress-bar-container">
              <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-20 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center">
          My Development Philosophy
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I believe in writing clean, maintainable code that solves real-world
          problems. My approach combines technical excellence with user-centric
          design to create applications that are not only functional but also
          delightful to use.
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
