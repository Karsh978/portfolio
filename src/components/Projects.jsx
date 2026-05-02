import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
 {
    title: "Edu-Tracker Student Management",
    emoji: "🎓",
    desc: "Edu Tracker is a web-based application that helps students track their learning progress, manage study tasks, and organize academic activities efficiently. It allows users to monitor completed topics, upcoming tasks, and overall progress in a structured way.",
    tags: ["React", "nodejs", "JavaScript", "API",'express','mongodb','jwt-token'],
    live: "https://edu-tracker-rho.vercel.app/",
    github: "https://github.com/Karsh978/edu_tracker",
    color: "#0891b2",
  },
   {
    title: "Notes App",
    emoji: "📝",
    desc: "Notes App is a simple web application that allows users to create, edit, and delete notes. It helps users store important information and manage their daily notes in an organized and user-friendly interface.",
    tags: ["Nodejs", "Express", "JavaScript", "API",'jwt-token'],
    live: "https://notesapp-two-olive.vercel.app/",
    github: "https://github.com/Karsh978/notesflow",
    color: "#d97706",
  },
  {
    title: "Tic-Tac-Toe Game",
    emoji: "🎮",
    desc: "Classic two-player Tic-Tac-Toe game with win detection, score tracking, and smooth animations. Fun and interactive!",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://tictoctoebyjivan.netlify.app/",
    github: "https://github.com/Karsh978",
    color: "#7c3aed",
    //featured: true,
  },
  {
    title: "Power Gym Website",
    emoji: "💪",
    desc: "A responsive gym landing page with modern design, services section, membership plans, and contact form.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://powergymcom.netlify.app/",
    github: "https://github.com/Karsh978",
    color: "#dc2626",
  },
  {
    title: "Expense Tracker",
    emoji: "💰",
    desc: "Personal finance tracker to manage income and expenses with real-time balance calculation and category-wise breakdown.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://expensetrackerbyjivan.netlify.app/",
    github: "https://github.com/Karsh978",
    color: "#059669",
  },
    {
    title: "Mess Management system",
    emoji: "🥗",
    desc: "time meal tracking (Breakfast/Lunch/Dinner), dynamic PDF receipt generation, unique student login links, aur direct UPI payment integration.",
    tags: ["react", "node js", "express js","mongodb",],
    live: "https://mess-ease-fawn.vercel.app/",
    github: "https://github.com/Karsh978",
    color: "#1a56db",
    //featured: true,
  },
 
 
];

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up, .project-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-inner">
        <div className="projects-header fade-up">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="projects-sub">
            Real projects I've built — all live and functional!
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className={`project-card fade-up ${p.featured ? "featured" : ""}`}
              key={i}
              style={{ animationDelay: `${i * 0.1}s`, "--proj-color": p.color }}
            >
              {p.featured && <div className="featured-tag">⭐ Featured</div>}

              <div className="proj-thumb" style={{ background: `${p.color}15` }}>
                <span className="proj-emoji">{p.emoji}</span>
                <div className="proj-glow" style={{ background: p.color }} />
              </div>

              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>

                <div className="proj-tags">
                  {p.tags.map((t, j) => (
                    <span className="proj-tag" key={j} style={{ borderColor: `${p.color}40`, color: p.color, background: `${p.color}10` }}>{t}</span>
                  ))}
                </div>

                <div className="proj-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link-btn live">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link-btn github">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta fade-up">
          <p>Want to see more? Check out my GitHub for all projects!</p>
          <a href="https://github.com/Karsh978" target="_blank" rel="noreferrer">
            <button className="btn-primary">View GitHub Profile →</button>
          </a>
        </div>
      </div>
    </section>
  );
}