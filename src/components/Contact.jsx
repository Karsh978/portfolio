import { useState, useEffect, useRef } from "react";
import "./Contact.css";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", address: "", number: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "05984c6f-7f9a-4aef-82e5-9c20627a324c",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", address: "", number: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setSending(false);
    setTimeout(() => setStatus(""), 5000);
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "jivankarsh2021@gmail.com", href: "mailto:jivankarsh2021@gmail.com" },
    { icon: "📍", label: "Location", value: "Kosir Sarangarh, CG, India", href: null },
    { icon: "🐙", label: "GitHub", value: "github.com/Karsh978", href: "https://github.com/Karsh978" },
    { icon: "💼", label: "LinkedIn", value: "in/jiwan-karsh-b03084345", href: "https://www.linkedin.com/in/jiwan-karsh-b03084345" },
  ];

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-inner">
        <div className="contact-header fade-up">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span className="highlight">Together</span>
          </h2>
          <p className="contact-sub">
            I'm actively looking for internship opportunities. Have a project or opportunity? Let's connect!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-left fade-up">
            <h3 className="contact-side-title">Contact Information</h3>
            <p className="contact-side-desc">
              Feel free to reach out through any of these channels. I respond within 24 hours!
            </p>

            <div className="contact-links">
              {contactInfo.map((c, i) => (
                <a
                  key={i}
                  href={c.href || undefined}
                  target={c.href ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`contact-link ${c.href ? "clickable" : ""}`}
                >
                  <div className="clink-icon">{c.icon}</div>
                  <div>
                    <div className="clink-label">{c.label}</div>
                    <div className="clink-value">{c.value}</div>
                  </div>
                  {c.href && (
                    <svg className="clink-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>

            <div className="availability-card">
              <div className="av-dot" />
              <div>
                <div className="av-title">Available for Internship</div>
                <div className="av-sub">Open to Frontend / Full Stack roles</div>
              </div>
            </div>
          </div>

          <div className="contact-right fade-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your city / company"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="number"
                    placeholder="10-digit number"
                    value={form.number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group full">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about the project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === "success" && (
                <div className="form-alert success">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="form-alert error">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" className="btn-primary submit-btn" disabled={sending}>
                {sending ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}