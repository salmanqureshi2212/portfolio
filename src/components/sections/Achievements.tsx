
import { motion } from "framer-motion";
import { Award, Trophy, Flag } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "GDG On Campus Leader",
      description: "Led the Google Developer Group on campus, organizing workshops, hackathons, and tech talks for students.",
      icon: <Flag className="h-8 w-8 text-purple" />
    },
    {
      title: "Hackathon Runner-up",
      description: "Secured second place in the national-level hackathon for innovative solutions to real-world problems.",
      icon: <Trophy className="h-8 w-8 text-purple" />
    },
    {
      title: "Fundraising for Students",
      description: "Successfully raised funds to provide technical education resources for underprivileged students.",
      icon: <Award className="h-8 w-8 text-purple" />
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">Achievements</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="h-20 w-20 rounded-full bg-purple/20 flex items-center justify-center mb-6"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {achievement.icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-3 gradient-text inline-block">
              {achievement.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
