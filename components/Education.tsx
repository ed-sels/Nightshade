"use client";
import { useState } from "react";
import { education } from "../data";

export default function Education() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="education"
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            Academic Path
          </p>
          <h2 className="section-heading">
            Education <span className="gradient-text">Roadmap</span>
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
            The foundations that fuel the work.
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
                "linear-gradient(to bottom, transparent, #7B61FF 10%, #7B61FF 90%, transparent)",
              opacity: 0.4,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {education.map((edu, i) => {
              const isActive = activeIndex === i;
              const accent = "#7B61FF";
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
                          border: `2px solid ${accent}`,
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
                        border: `2.5px solid ${accent}`,
                        boxShadow: isActive ? `0 0 16px ${accent}55` : "none",
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
                          background: accent,
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
                      border: `1px solid ${isActive ? accent + "66" : "var(--border)"}`,
                      borderRadius: "14px",
                      padding: "20px 24px",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      marginBottom: "8px",
                      boxShadow: isActive ? `0 4px 24px ${accent}22` : "var(--shadow)",
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
                          {edu.degree}
                        </div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            color: accent,
                            fontWeight: 500,
                          }}
                        >
                          {edu.school}
                        </div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          {edu.location}
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
                          {edu.period}
                        </span>
                        {i === 0 && (
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "#22c55e",
                              background: "#22c55e18",
                              padding: "2px 8px",
                              borderRadius: "4px",
                            }}
                          >
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expanded */}
                    {isActive && (
                      <div>
                        {edu.note && (
                          <p
                            style={{
                              fontSize: "0.85rem",
                              color: "var(--text-secondary)",
                              fontStyle: "italic",
                              marginBottom: "12px",
                            }}
                          >
                            {edu.note}
                          </p>
                        )}
                        <div
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontWeight: 600,
                            marginBottom: "10px",
                          }}
                        >
                          Coursework
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {edu.coursework.map((c) => (
                            <span
                              key={c}
                              className="skill-badge"
                              style={{
                                fontSize: "0.75rem",
                                padding: "4px 10px",
                                borderColor: accent + "44",
                                color: accent,
                              }}
                            >
                              {c}
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

          {/* End cap */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "center",
              paddingLeft: "8px",
              paddingTop: "8px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "var(--bg-secondary)",
                border: "2px dashed var(--border)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "10px" }}>✦</span>
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontStyle: "italic",
              }}
            >
              The story continues...
            </div>
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
