export default function MainPoster() {
  return (
    <section className="main-poster-section" id="main-poster">
      <div className="main-poster-container">
        {/* <div className="main-poster-heading">
          <p className="main-poster-eyebrow">Official Tribal Fair Poster</p>
          <h2>Tribal Fair 2026</h2>
          <p>
            Celebrating culture, tradition and women empowerment in the heart of
            Lahaul &amp; Spiti.
          </p>
        </div> */}

        <div className="main-poster-frame">
          <img
            className="main-poster-image"
            src="/images/Main-Poster.png"
            alt="Official Tribal Fair 2026 landscape poster"
            draggable="false"
          />

          <div className="poster-light poster-light-left" />
          <div className="poster-light poster-light-right" />
        </div>

        {/* <p className="main-poster-details">
          14–16 August 2026
          <span aria-hidden="true">•</span>
          Keylong, Lahaul &amp; Spiti
        </p> */}
      </div>
    </section>
  );
}
