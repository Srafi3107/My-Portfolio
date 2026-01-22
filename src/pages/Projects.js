import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "FineDiningBD",
      description:
        "FineDiningBD is a modern and user-friendly restaurant landing page designed to elevate the dining experience. Built with React, it offers an elegant interface combining aesthetics with functionality.",
      techs: ["React.js", "Vanilla CSS", "HTML5"],
      codeLink: "https://github.com/Srafi3107/FineDiningBD",
      liveLink: "https://finediningbd.netlify.app/",
    },
    {
      title: "Weather App",
      description:
        "A sleek, fully responsive Weather App built with React and Tailwind CSS, delivering real-time weather data via OpenWeather API with a beautiful UI and smooth experience.",
      techs: ["React.js", "Tailwind CSS", "OpenWeather API"],
      codeLink: "https://github.com/Srafi3107/WeatherCast",
      liveLink: "https://weathercastrafi.netlify.app/",
    },
    {
      title: "HospitalPro",
      description:
        "A Java-based Hospital Management System with a layered architecture. Manages doctors, patients, and tests with CSV persistence and a robust console-based interface.",
      techs: ["Java", "OOP", "CSV", "Console I/O"],
      codeLink: "https://github.com/Srafi3107/Hospital_System",
    },
    {
      title: "MRF Car Rental",
      description:
        "A full-stack Car Rental Management System featuring secure role-based dashboards, automated rental cost calculation, and real-time vehicle availability tracking with persistent inventory management.",
      techs: ["Java", "OOP", "React", "Console I/O"],
      codeLink: "https://github.com/Srafi3107/CarRental",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="section-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ marginBottom: "60px" }}
      >
        <motion.h1
          variants={itemVariants}
          style={{ fontSize: "48px", marginBottom: "16px" }}
        >
          Featured Projects
        </motion.h1>
        <motion.p
          variants={itemVariants}
          style={{ color: "var(--text-dim)", fontSize: "18px", maxWidth: "600px" }}
        >
          A collection of my work focusing on web development, software engineering, and problem-solving.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="card"
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>{project.title}</h3>
              <p style={{ color: "var(--text-dim)", marginBottom: "24px", fontSize: "15px" }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {project.techs.map((tech, i) => (
                  <span key={i} style={{
                    fontSize: "12px",
                    padding: "4px 10px",
                    background: "rgba(59, 130, 246, 0.1)",
                    color: "var(--primary)",
                    borderRadius: "4px",
                    fontWeight: "600"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, textAlign: "center", fontSize: "14px", padding: "10px" }}>Code</a>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, textAlign: "center", fontSize: "14px", padding: "10px", background: "transparent", border: "1px solid var(--glass-border)" }}>Live Demo</a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
