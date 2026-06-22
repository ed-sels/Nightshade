import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        textAlign: "center",
        background: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--accent)",
          }}
        >
          <Image
            src="/image.png"
            alt="Nightshade Logo"
            width={32}
            height={32}
            style={{ marginRight: "8px" }}
          />
        </div>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.825rem",
          }}
        >
          © {new Date().getFullYear()} Edwin Selorm Mottey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
