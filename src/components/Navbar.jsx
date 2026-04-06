import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrollY }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 50;

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="logo">
          <span className="logo-bracket">&lt;</span>
          JK
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/resumeorignal.pdf" target="_blank" rel="noreferrer">
            <button className="btn-cv">Get CV</button>
          </a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? "bar open" : "bar"} />
          <span className={menuOpen ? "bar open" : "bar"} />
          <span className={menuOpen ? "bar open" : "bar"} />
        </button>
      </div>
    </header>
  );
}