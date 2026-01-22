import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/rafi.jpg";
import schoolLogo from "../assets/drmc.png";
import collegeLogo from "../assets/drmc.png";
import uniLogo from "../assets/aiub.png";
import cvFile from "../assets/Shahriar_Hossain_Rafi_CV.pdf";

const SkillBar = ({ name, level, color }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <span style={{ fontSize: "15px", fontWeight: "500" }}>{name}</span>
        <span style={{ marginLeft: "auto", fontSize: "14px", color: "var(--text-dim)" }}>{level}%</span>
      </div>
      <div style={{
        height: "8px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "4px",
        overflow: "hidden",
        border: "1px solid var(--glass-border)"
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            height: "100%",
            background: color,
            boxShadow: `0 0 10px ${color}44`
          }}
        />
      </div>
    </div>
  );
};

function About() {
  const badgeStyle = {
    background: "rgba(59, 130, 246, 0.1)",
    color: "var(--primary)",
    padding: "6px 12px",
    borderRadius: "100px",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "12px",
    display: "inline-block",
    border: "1px solid rgba(59, 130, 246, 0.2)",
  };

  const skillGroups = [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", color: "#f7df1e", level: 85 },
        { name: "C++", color: "#00599C", level: 75 },
      ],
    },
    {
      category: "Web & Frameworks",
      skills: [
        { name: "React", color: "#61dafb", level: 80 },
        { name: "ASP.NET MVC", color: "#512bd4", level: 70 },
      ],
    },
    {
      category: "Testing & QA",
      skills: [
        { name: "Postman", color: "#FF6C37", level: 85 },
        { name: "Jira", color: "#0052CC", level: 75 },
      ],
    },
    {
      category: "Tools & DB",
      skills: [
        { name: "Git", color: "#F05032", level: 80 },
        { name: "MySQL", color: "#4479A1", level: 70 },
        { name: "MS Office", color: "#D83B01", level: 90 },
      ],
    },
  ];

  return (
    <div className="section-container">
      {/* Summary Section */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center", marginBottom: "100px" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ position: "relative" }}
        >
          <img
            src={myPhoto}
            alt="Shahriar Hossain Rafi"
            style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          />
          <div className="glass" style={{ position: "absolute", bottom: "-20px", right: "-20px", padding: "20px", borderRadius: "12px" }}>
            <h3 style={{ margin: 0, fontSize: "24px" }}>3+ Years</h3>
            <p style={{ margin: 0, color: "var(--text-dim)", fontSize: "14px" }}>Of Learning & Building</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={badgeStyle}>Software Engineer / QA</div>
          <h1 style={{ fontSize: "40px", marginBottom: "24px" }}>Shahriar Hossain Rafi</h1>
          <p style={{ color: "var(--text-dim)", fontSize: "18px", marginBottom: "32px" }}>
            I am a Computer Science graduate passionate about building responsive web applications and validating APIs.
            With experience in React, SQL, and Agile QA practices, I combine analytical thinking
            with clear communication to deliver reliable, high-quality results.
          </p>
          <div id="cv">
            <a href={cvFile} download className="btn-primary">Download My Resume</a>
          </div>
        </motion.div>
      </section>

      {/* Education & Skills Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", marginBottom: "100px" }}>
        <section>
          <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>Education</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { logo: uniLogo, title: "AIUB", degree: "BSc in Computer Science and Engineering", date: "2020 - 2023" },
              { logo: collegeLogo, title: "DRMC", degree: "Higher School Certificate", date: "2019" },
              { logo: schoolLogo, title: "DRMC", degree: "Secondary School Certificate", date: "2017" },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <img src={edu.logo} alt={edu.title} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
                <div>
                  <h4 style={{ margin: "0 0 4px 0" }}>{edu.title}</h4>
                  <p style={{ margin: "0 0 4px 0", fontSize: "14px" }}>{edu.degree}</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "var(--text-dim)" }}>{edu.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>Skills & Expertise</h2>
          <div className="card" style={{ height: "calc(100% - 70px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {skillGroups.map((group, i) => (
                <div key={i}>
                  <p style={{ margin: "0 0 16px 0", fontWeight: "600", fontSize: "14px", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {group.category}
                  </p>
                  <div>
                    {group.skills.map((skill, si) => (
                      <SkillBar key={si} {...skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* LeetCode & Certs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card" style={{ textAlign: "center", background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)" }}
        >
          <h2 style={{ margin: "0 0 12px 0" }}>LeetCode Profile</h2>
          <p style={{ fontSize: "48px", fontWeight: "800", margin: "10px 0", color: "var(--primary)" }}>57</p>
          <p style={{ margin: "0 0 24px 0", color: "var(--text-dim)" }}>Problems Solved</p>
          <a href="https://leetcode.com/u/ShahriarRafi/" target="_blank" rel="noreferrer" className="btn-primary" style={{ width: "100%" }}>View Profile</a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card"
        >
          <h2 style={{ margin: "0 0 24px 0", fontSize: "24px" }}>Certifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Machine Learning A-Z", org: "Udemy", date: "2024" },
              { title: "Supervised Machine Learning", org: "Coursera", date: "2024" }
            ].map((cert, i) => (
              <div key={i} style={{ paddingBottom: "16px", borderBottom: i === 0 ? "1px solid var(--glass-border)" : "none" }}>
                <h4 style={{ margin: "0 0 4px 0" }}>{cert.title}</h4>
                <p style={{ margin: 0, fontSize: "14px", color: "var(--text-dim)" }}>{cert.org} • {cert.date}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;
