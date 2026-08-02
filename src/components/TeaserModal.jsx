import { useEffect } from "react";

export default function TeaserModal({ isOpen, onClose, onViewProgramme }) {
  useEffect(() => { if (!isOpen) return undefined; const closeOnEscape = (event) => event.key === "Escape" && onClose(); window.addEventListener("keydown", closeOnEscape); return () => window.removeEventListener("keydown", closeOnEscape); }, [isOpen, onClose]);
  if (!isOpen) return null;
  return <div className="modal" role="dialog" aria-modal="true" aria-labelledby="teaser-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <button className="modal-close" onClick={onClose} aria-label="Close teaser">×</button>
    <div className="teaser"><span>TRIBAL FAIR 2026</span><h2 id="teaser-title">Three memorable days.<br />One extraordinary valley.</h2><p>14–16 August 2026 · Keylong</p><button className="gold-button" onClick={onViewProgramme}>See the programme →</button></div>
  </div>;
}
