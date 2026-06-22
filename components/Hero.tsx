"use client";
import { useEffect, useState } from "react";
import { profile } from "../data";

const roles = profile.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "60%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "var(--accent-glow)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 8px #22c55e",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-0.03em",
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Edwin Selorm</span>
          <br />
          Mottey
        </h1>

        {/* Typewriter */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            color: "var(--text-secondary)",
            marginBottom: "24px",
            minHeight: "2em",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span className="accent">&gt;</span>
          <span style={{ marginLeft: "8px" }}>{displayed}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              background: "var(--accent)",
              marginLeft: "2px",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>

        {/* Bio */}
        <p
          style={{
            maxWidth: "540px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            fontSize: "1rem",
            marginBottom: "40px",
          }}
        >
          {profile.bio}
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>
          <a href="https://drive.google.com/file/d/13zzZdaeSc4I6VwP1D-Jsg9ts1s0Tp5M9/view?usp=drive_link" className="btn-outline" target="_blank">
            View My CV
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "16px",
            maxWidth: "600px",
          }}
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
