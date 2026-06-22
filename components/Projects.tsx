"use client";
import { projects, publications } from "../data";
import { TfiWrite } from "react-icons/tfi";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            What I&apos;ve Built
          </p>
          <h2 className="section-heading">
            Projects &amp; <span className="gradient-text">Publications</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.name}
              className="card"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {p.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    background: "var(--accent-glow)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Featured
                </span>
              )}

              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                  }}
                >
                  {p.desc}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.75rem",
                        padding: "3px 10px",
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        borderRadius: "999px",
                        color: "var(--text-muted)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  style={{
                    color: "var(--accent)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontFamily: "'Space Grotesk', sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    transition: "gap 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = "8px")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = "4px")
                  }
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "1.2rem",
              color: "var(--text-primary)",
              marginBottom: "20px",
            }}
          >
            <TfiWrite /> Technical Publications
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="card"
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {pub.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {pub.platform} · {pub.date}
                  </div>
                </div>
                <a
                  href={pub.link}
                  className="btn-outline"
                  style={{ fontSize: "0.8rem", padding: "8px 16px", whiteSpace: "nowrap" }}
                >
                  Read ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
