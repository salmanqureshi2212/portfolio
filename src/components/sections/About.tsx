
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../ui/AnimatedText";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="section-container py-20"
      style={{ opacity, y }}
    >
      <h2 className="section-title">About Me</h2>

      <div className="flex flex-col md:flex-row gap-12 items-center mt-16">
        <motion.div 
          className="flex-1 order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text inline-block">
            Hi, I'm Salman!
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            A React.js developer with experience in building scalable full-stack applications and AI-integrated platforms. I'm passionate about creating elegant solutions to complex problems.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            With a background in both frontend and backend development, I specialize in creating responsive, user-friendly interfaces that provide a seamless experience across all devices.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I love exploring new technologies and leveraging them to build innovative products that make a difference.
          </p>

          <div className="mt-8 space-x-4">
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple to-purple-dark p-1"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden">
              <img 
                src="/pfp.jpg"
                 
                alt="Salman Qureshi" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
