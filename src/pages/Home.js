import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const heroSection = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 24px",
    marginTop: "0",
    position: "relative",
    overflow: "hidden",
  };

  const badgeStyle = {
    background: "rgba(59, 130, 246, 0.1)",
    color: "var(--primary)",
    padding: "8px 16px",
    borderRadius: "100px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "24px",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    display: "inline-block",
  };

  const titleStyle = {
    fontSize: "clamp(48px, 8vw, 84px)",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "24px",
    maxWidth: "900px",
  };

  const subTitleStyle = {
    fontSize: "clamp(18px, 2vw, 20px)",
    color: "var(--text-dim)",
    maxWidth: "600px",
    marginBottom: "40px",
  };

  const ctaContainerStyle = {
    display: "flex",
    gap: "16px",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div style={{ marginLeft: "-20px", marginRight: "-20px", marginTop: "-20px" }}>
      <section style={heroSection}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <motion.div variants={itemVariants} style={badgeStyle}>
            Available for Opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} style={titleStyle}>
            Shahriar <span style={{ color: "var(--primary)" }}>Hossain Rafi</span>
          </motion.h1>

          <motion.p variants={itemVariants} style={subTitleStyle}>
          I am a Computer Science graduate dedicated to creating seamless digital products.
          Check out my skills and projects to see how I contribute to the tech landscape.
          </motion.p>

          <motion.div variants={itemVariants} style={ctaContainerStyle}>
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <Link to="/about" className="btn-primary" style={{ background: "transparent", border: "1px solid var(--glass-border)" }}>About Me</Link>
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-container"
        style={{ textAlign: "center" }}
      >
        
      </motion.div>
    </div>
  );
}

export default Home;
