"use client";
import { skills } from "../data";
import { IoLanguage } from "react-icons/io5";
import { SiFramework } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <IoLanguage />,
  Frameworks: <SiFramework />,
  Tools: <FaTools />,
  "Soft Skills": <GiSkills />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            Toolkit
          </p>
          <h2 className="section-heading">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="card"
              style={{ padding: "28px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{categoryIcons[category]}</span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {category}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {items.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div
          className="card"
          style={{
            padding: "28px",
            marginTop: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{ fontSize: "1.5rem" }}><IoLanguage /></span>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "var(--text-primary)",
              }}
            >
              Human Languages
            </h3>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[
              { lang: "English", level: "Full Professional Proficiency", pct: 95 },
              { lang: "Ewe", level: "Native", pct: 100 },
              { lang: "French", level: "Limited Working Proficiency", pct: 45 },
            ].map((l) => (
              <div key={l.lang} style={{ minWidth: "200px", flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {l.lang}
                  </span>
                  <span
                    style={{
                      fontSize: "0.775rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {l.level}
                  </span>
                </div>
                <div
                  style={{
                    height: "4px",
                    background: "var(--bg-secondary)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${l.pct}%`,
                      background: "linear-gradient(90deg, var(--accent), #7B61FF)",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
