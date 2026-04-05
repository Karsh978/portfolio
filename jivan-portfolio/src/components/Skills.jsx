import { useEffect, useRef } from "react";
import "./Skills.css";

const skillCategories = [
  {
    icon: "🎨",
    title: "Frontend",
    color: "#1a56db",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    color: "#0a1628",
    skills: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT Auth"],
  },
  {
    icon: "🗄️",
    title: "Database",
    color: "#0891b2",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    icon: "🛠️",
    title: "Tools & Others",
    color: "#7c3aed",
    skills: ["Git", "GitHub", "VS Code", "Figma (Basic)", "Vue.js (Learning)", "Postman", "Linux"],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".skill-card, .fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-inner">
        <div className="skills-header fade-up">
          <span className="section-tag">My Expertise</span>
          <h2 className="section-title">
            Technical <span className="highlight">Skills</span>
          </h2>
          <p className="skills-sub">Technologies I know and work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              className="skill-card fade-up"
              key={i}
              style={{ animationDelay: `${i * 0.1}s`, "--cat-color": cat.color }}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-chips">
                {cat.skills.map((s, j) => (
                  <span className="skill-chip" key={j} style={{ "--chip-color": cat.color }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}