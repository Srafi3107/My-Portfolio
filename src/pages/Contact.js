import React, { useState } from "react";
import gmailLogo from "../assets/gmail.jpg";
import linkedinLogo from "../assets/linkedin.webp";
import githubLogo from "../assets/github.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:yourgmail@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      formData.message + "\n\nFrom: " + formData.name + " (" + formData.email + ")"
    )}`;
    window.location.href = mailtoLink;
  };

  const inputContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "100%",
  };

  const inputStyle = {
    padding: "16px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid var(--glass-border)",
    borderRadius: "12px",
    color: "var(--text-main)",
    fontSize: "16px",
    outline: "none",
    transition: "var(--transition)",
  };

  const socialLinks = [
    { name: "Gmail", icon: gmailLogo, url: "mailto:srafi3107@gmail.com" },
    { name: "LinkedIn", icon: linkedinLogo, url: "https://www.linkedin.com/in/shahriar-hossain-rafi/" },
    { name: "GitHub", icon: githubLogo, url: "https://github.com/Srafi3107" },
  ];

  return (
    <div className="section-container">
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>Let's Connect</h1>
        <p style={{ color: "var(--text-dim)", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
          Have a question or want to work together? Feel free to reach out through any of the platforms below.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px" }}>
        {/* Contact Form */}
        <div className="card">
          <h2 style={{ marginBottom: "32px", fontSize: "24px" }}>Send a Message</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "24px" }} onSubmit={handleSubmit}>
            <div style={inputContainer}>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-dim)" }}>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                onBlur={(e) => e.target.style.borderColor = "var(--glass-border)"}
                required
              />
            </div>
            <div style={inputContainer}>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-dim)" }}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                onBlur={(e) => e.target.style.borderColor = "var(--glass-border)"}
                required
              />
            </div>
            <div style={inputContainer}>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-dim)" }}>Message</label>
              <textarea
                name="message"
                placeholder="I'd like to talk about..."
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "150px", resize: "vertical" }}
                onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                onBlur={(e) => e.target.style.borderColor = "var(--glass-border)"}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%", padding: "16px" }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h2 style={{ marginBottom: "32px", fontSize: "24px" }}>Social Profiles</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px",
                  textDecoration: "none",
                  color: "var(--text-main)"
                }}
              >
                <img src={social.icon} alt={social.name} style={{ width: "40px", height: "40px", borderRadius: "8px" }} />
                <div>
                  <h4 style={{ margin: 0 }}>{social.name}</h4>
                  <p style={{ margin: 0, fontSize: "14px", color: "var(--text-dim)" }}>Connect with me</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
