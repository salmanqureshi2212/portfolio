
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: "#8B5CF6" }
  };

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <h2 className="section-title">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have a project in mind or just want to say hello? Feel free to reach out to me!
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                <a 
                  href="mailto:salman.iqureshi04@gmail.com" 
                  className="font-medium text-gray-900 dark:text-white hover:text-purple dark:hover:text-purple transition-colors"
                >
                  salman.iqureshi04@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  +91 70216 20659
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-lg font-semibold mb-4">Follow me on</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/salman-qureshi-8ba323245/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center hover:bg-purple/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-5 w-5 text-purple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://x.com/salmanq22795873"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center hover:bg-purple/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-5 w-5 text-purple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.038 10.038 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://github.com/salmanqureshi2212"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center hover:bg-purple/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-5 w-5 text-purple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple/50 dark:bg-gray-700 dark:text-white"
              whileFocus={inputVariants.focus}
              placeholder="John Doe"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple/50 dark:bg-gray-700 dark:text-white"
              whileFocus={inputVariants.focus}
              placeholder="john.doe@example.com"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple/50 resize-none dark:bg-gray-700 dark:text-white"
              whileFocus={inputVariants.focus}
              placeholder="Hello, I'd like to talk about..."
            />
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-purple text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-purple-dark"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4 ml-2" />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
