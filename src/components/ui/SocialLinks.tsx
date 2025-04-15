
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="h-5 w-5" />, 
      url: 'https://www.linkedin.com/in/salman-qureshi-8ba323245/' 
    },
    { 
      name: 'GitHub', 
      icon: <Github className="h-5 w-5" />, 
      url: 'https://github.com/waisodum' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="h-5 w-5" />, 
      url: 'https://x.com/salmanq22795873' 
    },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          whileHover={{ y: -5, scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
