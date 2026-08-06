import { useEffect } from "react";

export default function TeaserModal({ isOpen, onClose }) {
  const YOUTUBE_VIDEO_ID = "";

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="teaser-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="teaser teaser-video">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close teaser"
        >
          ×
        </button>

        <h2 id="teaser-title" className="sr-only">
          Tribal Fair 2026 teaser
        </h2>

        <div className="youtube-video-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Tribal Fair 2026 Official Teaser"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
