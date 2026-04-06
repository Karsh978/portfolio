import { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: "6+", label: "Projects Built" },
    { num: "2+", label: "Years Learning" },
    { num: "100%", label: "Dedication" },
    { num: "∞", label: "Growth Mindset" },
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-inner">
        <div className="about-left fade-up">
          <div className="about-img-wrap">
            <div className="about-img-bg" />
            <div className="about-img-box">
              <span className="about-avatar">👨‍💻</span>
            </div>
            <div className="exp-badge">
              <div className="exp-num">Fresher</div>
              <div className="exp-lbl">Ready to Learn</div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="fade-up">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Frontend Developer &<br />
              <span className="highlight">Full Stack Learner</span>
            </h2>
          </div>

          <p className="about-desc fade-up">
            I'm <strong>Jivan Karsh</strong>, a passionate Frontend Developer and Full Stack fresher
            from <strong>Bhilai Institute of Technology, Durg (BIT Durg)</strong>. I enjoy creating
            beautiful, responsive websites using HTML, CSS, JavaScript, and React.
          </p>
          <p className="about-desc fade-up" style={{ animationDelay: "0.1s" }}>
            I'm currently looking for an internship opportunity where I can learn from experienced
            developers, gain real-world experience, and contribute to meaningful projects.
            I believe in learning by doing — all my projects are built from scratch!
          </p>

          <div className="about-info fade-up">
            <div className="info-row">
              <span className="info-label">📧 Email</span>
              <a href="mailto:jivankarsh2021@gmail.com" className="info-value">jivankarsh2021@gmail.com</a>
            </div>
            <div className="info-row">
              <span className="info-label">📍 Location</span>
              <span className="info-value">Kosir Sarangarh, Chhattisgarh</span>
            </div>
            <div className="info-row">
              <span className="info-label">🎓 College</span>
              <span className="info-value">BIT Durg, C.G.</span>
            </div>
            <div className="info-row">
              <span className="info-label">💼 Status</span>
              <span className="info-value status-open">● Open to Internship</span>
            </div>
          </div>

          <div className="about-btns fade-up">
            <a href="resume2.pdf" target="_blank" rel="noreferrer">
              <button className="btn-primary">Download CV 📄</button>
            </a>
            <a href="#contact">
              <button className="btn-outline">Let's Talk</button>
            </a>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        {stats.map((s, i) => (
          <div className="stat-item fade-up" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}