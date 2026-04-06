import { useState, useEffect } from "react";
import "./Hero.css";

const roles = ["Frontend Developer", "Full Stack Developer", "React Developer", "UI/UX Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-wave" />
        <div className="floating-shapes">
          <div className="shape s1" />
          <div className="shape s2" />
          <div className="shape s3" />
          <div className="shape s4" />
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="pulse-dot" />
            Available for Internship & Work
          </div>

          <h1 className="hero-name">
            Hey, I'm <br />
            <span className="name-highlight">Jivan Karsh</span>
          </h1>

          <h2 className="hero-role">
            I'm a <span className="typing-text">{displayed}<span className="cursor">|</span></span>
          </h2>

          <p className="hero-desc">
            Passionate Frontend Developer & Full Stack Fresher from BIT Durg. I craft
            responsive, beautiful web experiences and love turning ideas into reality
            through clean code. Currently seeking my first internship to grow and contribute.
          </p>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/jiwan-karsh-b03084345" target="_blank" rel="noreferrer" className="social-btn linkedin" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/Karsh978" target="_blank" rel="noreferrer" className="social-btn github" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://x.com/JivanKarsh" target="_blank" rel="noreferrer" className="social-btn twitter" title="Twitter/X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-btn instagram" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>

          <div className="hero-btns">
            <a href="mailto:jivankarsh2021@gmail.com?subject=Hiring%20Enquiry%20from%20Portfolio&body=Hello%20Jivan,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you...">
              <button className="btn-primary">Hire Me 🚀</button>
            </a>
            <a href="#contact">
              <button className="btn-outline">Contact Me</button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-ring">
            <div className="avatar-outer">
              <div className="avatar-inner">
                <span className="avatar-emoji">👨‍💻</span>
              </div>
            </div>
            <div className="orbit orbit1">
              <div className="orbit-dot dot-react">⚛️</div>
            </div>
            <div className="orbit orbit2">
              <div className="orbit-dot dot-node">🟢</div>
            </div>
            <div className="orbit orbit3">
              <div className="orbit-dot dot-js">🟡</div>
            </div>
          </div>

          <div className="hero-card card1">
            <div className="card-icon">🎓</div>
            <div>
              <div className="card-title">BIT Durg</div>
              <div className="card-sub">B.Tech CS</div>
            </div>
          </div>

          <div className="hero-card card2">
            <div className="card-icon">📍</div>
            <div>
              <div className="card-title">Sarangarh, CG</div>
              <div className="card-sub">India 🇮🇳</div>
            </div>
          </div>

          <div className="hero-card card3">
            <div className="card-icon">✅</div>
            <div>
              <div className="card-title">Open to Work</div>
              <div className="card-sub">Fresher</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </a>
    </section>
  );
}