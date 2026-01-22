import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    height: "80px",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
  };

  const nameStyle = {
    fontSize: "24px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textDecoration: "none",
    letterSpacing: "-0.02em",
  };

  const linksContainer = {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  };

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? "var(--primary)" : "var(--text-dim)",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "var(--transition)",
    position: "relative",
  });

  return (
    <nav style={navStyle} className="glass">
      <Link style={nameStyle} to="/">SHR.</Link>
      <div style={linksContainer}>
        <Link style={getLinkStyle("/about")} to="/about">About</Link>
        <Link style={getLinkStyle("/projects")} to="/projects">Projects</Link>
        <Link style={getLinkStyle("/contact")} to="/contact">Contact</Link>
       
      </div>
    </nav>
  );
}

export default Navbar;
