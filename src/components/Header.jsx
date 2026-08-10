import { useState } from "react";

export default function Header({ onNavigate, onOpenInvitation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (section) => {
    onNavigate?.(section);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container shell">
        <button
          type="button"
          className="header-brand"
          onClick={() => navigate("home")}
          aria-label="Go to home"
        >
          <img
            src="/images/Logo.png"
            alt="Lahaul and Spiti Tribal Fair logo"
            className="mountain-mark"
          />
          <span className="brand-text">
            <strong>Tribal Fair 2026</strong>
            <span>Lahaul &amp; Spiti</span>
          </span>
        </button>
        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="main-menu"
          className={`header-nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <button type="button" onClick={() => navigate("home")}>
            Home
          </button>
          <button type="button" onClick={() => navigate("about")}>
            About
          </button>
          <button type="button" onClick={() => navigate("schedule")}>
            Schedule
          </button>
          <button type="button" onClick={() => navigate("events")}>
            Events
          </button>
          <button
            type="button"
            onClick={() => {
              onOpenInvitation?.();
              setMenuOpen(false);
            }}
          >
            Invitation
          </button>
          {/* <button type="button" onClick={() => navigate("visit")}>
            Visitor Guide
          </button> */}
          <button
            type="button"
            className="header-button"
            onClick={() => navigate("visit")}
          >
            Plan Your Visit <span aria-hidden="true">→</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
