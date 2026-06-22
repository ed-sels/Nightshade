"use client";
import { profile } from "../data";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    icon: <MdOutlineMailOutline />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/ed-sels",
    href: profile.github,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Edwin Selorm Mottey",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "100px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        {/* Header */}
        <p className="section-label" style={{ marginBottom: "12px" }}>
          Let&apos;s Connect
        </p>
        <h2 className="section-heading" style={{ marginBottom: "20px" }}>
          Say <span className="gradient-text">Hello</span>
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 auto 48px",
            fontSize: "0.975rem",
          }}
        >
          Whether you&apos;re looking to collaborate, hire, or just have a conversation about tech
          in Ghana — my inbox is always open.
        </p>

        {/* Contact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card"
              style={{
                padding: "24px 20px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {c.label}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--accent)",
                  fontWeight: 500,
                  wordBreak: "break-all",
                }}
              >
                {c.value}
              </div>
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a href={`mailto:${profile.email}`} className="btn-primary" style={{ fontSize: "1rem" }}>
          Send Me a Message
        </a>
      </div>
    </section>
  );
}
