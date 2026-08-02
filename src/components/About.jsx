export default function About({ onDiscover }) {
  return (
    <section className="intro section shell" id="about">
      <div>
        <p className="eyebrow dark">
          Celebrating culture, courage and women’s empowerment.
        </p>

        <h2>
          Where Tribal Women
          <br />
          Lead and Inspire.
        </h2>
      </div>

      <div className="intro-copy">
        <p>
          The Tribal Fair celebrates the remarkable women of Lahaul &amp; Spiti
          who preserve indigenous traditions, strengthen their communities and
          shape a progressive future for the Himalayan region.
        </p>

        <p>
          Through traditional crafts, local enterprises, cultural performances
          and inspiring stories, the fair honours their creativity, resilience,
          leadership and contribution to tribal society.
        </p>

        {/* <button className="inline-link" onClick={onDiscover}>
          Discover Their Stories <span>↗</span>
        </button> */}
      </div>
    </section>
  );
}
