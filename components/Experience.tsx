"use client";
import { useState } from "react";
import { experiences } from "../data";

const typeColors: Record<string, string> = {
  work: "#0066FF",
  award: "#F59E0B",
  training: "#10B981",
};

const typeLabels: Record<string, string> = {
  work: "Work",
  award: "Award",
  training: "Training",
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      style={{ padding: "100px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            My Journey
          </p>
          <h2 className="section-heading">
            Experience <span className="gradient-text">Roadmap</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginTop: "12px",
              fontSize: "0.9rem",
              maxWidth: "400px",
              margin: "12px auto 0",
            }}
          >
            Each stop shaped the engineer and mentor I&apos;m becoming.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, transparent, var(--accent) 10%, var(--accent) 90%, transparent)",
              opacity: 0.4,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {experiences.map((exp, i) => {
              const nodeColor = typeColors[exp.type] || "var(--accent)";
              const isActive = activeIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "32px",
                    alignItems: "flex-start",
                    paddingLeft: "8px",
                  }}
                >
                  {/* Node */}
                  <div
                    style={{
                      flexShrink: 0,
                      position: "relative",
                      width: "24px",
                      height: "24px",
                      marginTop: "18px",
                    }}
                  >
                    {isActive && (
                      <div
                        style={{
                          position: "absolute",
                          inset: "-6px",
                          borderRadius: "50%",
                          border: `2px solid ${nodeColor}`,
                          opacity: 0.5,
                          animation: "ping 1.5s ease-out infinite",
                        }}
                      />
                    )}
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "var(--bg-card)",
                        border: `2.5px solid ${nodeColor}`,
                        boxShadow: isActive ? `0 0 16px ${nodeColor}55` : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "box-shadow 0.3s ease",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: nodeColor,
                          transition: "transform 0.2s ease",
                          transform: isActive ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    style={{
                      flex: 1,
                      background: "var(--bg-card)",
                      border: `1px solid ${isActive ? nodeColor + "66" : "var(--border)"}`,
                      borderRadius: "14px",
                      padding: "20px 24px",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      marginBottom: "8px",
                      boxShadow: isActive ? `0 4px 24px ${nodeColor}22` : "var(--shadow)",
                    }}
                  >
                    {/* Top row */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: isActive ? "16px" : "8px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: "var(--text-primary)",
                            marginBottom: "2px",
                          }}
                        >
                          {exp.title}
                        </div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--accent)",
                            fontWeight: 500,
                          }}
                        >
                          {exp.org}
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                        <span
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.period}
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: nodeColor,
                            background: nodeColor + "18",
                            padding: "2px 8px",
                            borderRadius: "4px",
                          }}
                        >
                          {typeLabels[exp.type]}
                        </span>
                      </div>
                    </div>

                    {/* Expanded content */}
                    {isActive && (
                      <div>
                        <ul
                          style={{
                            paddingLeft: "16px",
                            marginBottom: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                          }}
                        >
                          {exp.bullets.map((b, bi) => (
                            <li
                              key={bi}
                              style={{
                                color: "var(--text-secondary)",
                                fontSize: "0.875rem",
                                lineHeight: 1.6,
                              }}
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {exp.tech.map((t) => (
                            <span key={t} className="skill-badge" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {!isActive && (
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                          fontStyle: "italic",
                        }}
                      >
                        Click to expand →
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
