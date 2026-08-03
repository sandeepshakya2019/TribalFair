export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow footer-glow-left" />
      <div className="footer-glow footer-glow-right" />

      <div className="footer-pattern" aria-hidden="true" />

      <div className="shell footer-grid">
        <div className="footer-intro">
          <a href="/" className="footer-brand" aria-label="Tribal Fair home">
            <span className="footer-brand-mark">
              <img
                src="/images/Logo.png"
                alt="Tribal Fair Games 2026 logo"
                className="footer-brand-logo"
              />
            </span>

            <span className="footer-title">
              Tribal Fair
              <strong>Games 2026</strong>
            </span>
          </a>

          <p className="footer-description">
            Where Himalayan culture meets the spirit of competition.
          </p>

          <div className="footer-tags" aria-label="Event highlights">
            <span>Culture</span>
            <span>Sports</span>
            <span>Himalayas</span>
          </div>
        </div>

        <div className="footer-section">
          <p className="footer-label">Event details</p>

          <ul className="footer-details">
            <li>
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
                </svg>
              </span>

              <span>
                <small>Event dates</small>
                14–16 August 2026
              </span>
            </li>

            <li>
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <span>
                <small>Venue</small>
                Keylong, Lahaul &amp; Spiti
              </span>
            </li>

            <li>
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7.5 4.5 10 9 7.8 11a16 16 0 0 0 5.2 5.2l2-2.2 4.5 2.5v3a2 2 0 0 1-2 2C9.2 21.5 2.5 14.8 2.5 6.5a2 2 0 0 1 2-2h3Z" />
                </svg>
              </span>

              <span>
                <small>Contact us</small>
                <a href="tel:+919816234567">+91 XXXXX XXXXX</a>
              </span>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-action">
          <p className="footer-label">Be part of it</p>

          <p>
            Explore the programme, register for games and plan your visit to the
            high-altitude arena.
          </p>

          <a href="#programme" className="footer-button">
            Explore programme
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>

          {/* <a href="mailto:tribalfair@example.com" className="footer-email">
            tribalfair@example.com
          </a> */}
        </div>
      </div>

      <div className="shell footer-divider" />

      <div className="shell copyright">
        <span>© 2026 NIC Keylong · District Lahaul &amp; Spiti</span>

        <strong>
          <i />
          Games. Culture. Glory.
        </strong>
      </div>
    </footer>
  );
}
