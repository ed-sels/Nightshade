"use client";
import { FaTrophy } from "react-icons/fa6";
import { profile } from "../data";
import { GiDiploma } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { SiElectronbuilder } from "react-icons/si";

const highlights = [
  { icon: <GiDiploma />, label: "BSc. Computer Science", sub: "UENR, Ghana" },
  { icon: <SiElectronbuilder />, label: "AI Tool Builder", sub: "Headstarter AI GH / Cortexx" },
  { icon: <FaTrophy />, label: "Hackathon — 2nd Place", sub: "Heidelberg Materials 2025" },
  { icon: <TfiWrite />, label: "Technical Blogger", sub: "DEV Community" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg-secondary)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div>
            <p className="section-label" style={{ marginBottom: "12px" }}>
              About Me
            </p>
            <h2 className="section-heading" style={{ marginBottom: "24px", lineHeight: 1.2 }}>
              Building at the intersection of{" "}
              <span className="gradient-text">code & community</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "20px",
                fontSize: "0.975rem",
              }}
            >
              I&apos;m a final-year Computer Science student at the University of Energy and Natural
              Resources in Ghana. My journey has taken me from teaching computing in a classroom to
              building AI agents and hackathon-winning platforms.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "32px",
                fontSize: "0.975rem",
              }}
            >
              I care deeply about mentorship — I was promoted to UENR Lead at Headstarter AI GH,
              where I trained cohorts of developers and served as a mentor at MEST Hackathon 2025.
              Native Ewe speaker, conversational in French, and always curious.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary"
                style={{ fontSize: "0.875rem", padding: "10px 20px" }}
              >
               {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: "0.875rem", padding: "10px 20px" }}
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                className="card"
                style={{ padding: "24px 20px", cursor: "default" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{h.icon}</div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                    lineHeight: 1.3,
                  }}
                >
                  {h.label}
                </div>
                <div
                  style={{
                    fontSize: "0.775rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {h.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
