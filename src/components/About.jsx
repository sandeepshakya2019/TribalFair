export default function About({ onDiscover }) {
  return <section className="intro section shell" id="about">
    <div><p className="eyebrow dark">Built on heritage. Driven by competition.</p><h2>More than a fair.<br />A field of play.</h2></div>
    <div className="intro-copy">
      <p>Tribal Fair Games 2026 brings together athletes, artists and communities from across Lahaul &amp; Spiti for a high-energy celebration of local pride.</p>
      <p>From traditional sports and team tournaments to music, food and craft, every arena is a chance to compete, connect and celebrate the mountains.</p>
      <button className="text-link" onClick={onDiscover}>View the game schedule <span aria-hidden="true">→</span></button>
    </div>
  </section>;
}
