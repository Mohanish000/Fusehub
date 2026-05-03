import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import './Hero.css';

export default function Hero() {
  const stats = [
    { number: '50+', label: 'Creators' },
    { number: '15M+', label: 'Reach' },
    { number: '200+', label: 'Campaigns' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="hero section" id="hero">
      <div className="hero-blob"></div>
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            Connect Your Brand With India's Top JEE & Tech Creators
          </motion.h1>

          <motion.p className="hero-subheadline" variants={itemVariants}>
            FuseHub Media bridges brands with 5M+ student audiences through authentic creator collaborations on YouTube & Instagram.
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants}>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <button className="btn btn-primary">Start a Campaign</button>
            </ScrollLink>
            <button className="btn btn-outline">Join as Creator</button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={floatVariants}
                initial="initial"
                animate="animate"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
