"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { CiLight } from "react-icons/ci";
import { GiNightSleep } from "react-icons/gi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
      }}
      className={scrolled ? "nav-glass" : ""}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            textDecoration: "none",
            color: "var(--accent)",
            letterSpacing: "-0.02em",
          }}
        >
          <Image
                      src="/image.png"
                      alt="Nightshade Logo"
                      width={32}
                      height={32}
                      style={{ marginRight: "8px" }}
                    />
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
          className="nav-links-desktop"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
            >
              {l.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "6px 10px",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <CiLight /> : <GiNightSleep />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }} className="nav-mobile">
          <button
            onClick={toggle}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <CiLight /> : <GiNightSleep />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "6px 10px",
              cursor: "pointer",
              color: "var(--text-primary)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            MENU
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .nav-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
