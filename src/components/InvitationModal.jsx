import { useCallback, useEffect, useRef, useState } from "react";

const invitationPdf = "public/images/Invitation-Final.pdf";

const invitationPages = [
  {
    src: "/images/invitation/invitation-page-1.jpg",
    label: "Welcome",
    alt: "Tribal Fair 2026 welcome invitation",
  },
  {
    src: "/images/invitation/invitation-page-2.jpg",
    label: "Main Attractions",
    alt: "Tribal Fair 2026 main attractions",
  },
  {
    src: "/images/invitation/invitation-page-3.png",
    label: "Your Invitation",
    alt: "Official invitation for Tribal Fair 2026",
  },
  {
    src: "/images/invitation/invitation-page-4.jpg",
    label: "Closing Message",
    alt: "Tribal Fair 2026 closing invitation message",
  },
];

const TURN_DURATION = 560;

export default function InvitationModal({ isOpen, onClose }) {
  const [activePage, setActivePage] = useState(0);
  const [leavingPage, setLeavingPage] = useState(null);
  const [turnDirection, setTurnDirection] = useState("forward");
  const [isTurning, setIsTurning] = useState(false);

  const turnTimerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const closeModal = useCallback(() => {
    window.clearTimeout(turnTimerRef.current);

    setActivePage(0);
    setLeavingPage(null);
    setTurnDirection("forward");
    setIsTurning(false);

    onClose();
  }, [onClose]);

  const goToPage = useCallback(
    (direction) => {
      if (isTurning) return;

      const totalPages = invitationPages.length;

      const nextPage =
        direction > 0
          ? (activePage + 1) % totalPages
          : (activePage - 1 + totalPages) % totalPages;

      window.clearTimeout(turnTimerRef.current);

      setTurnDirection(direction > 0 ? "forward" : "backward");
      setLeavingPage(activePage);
      setActivePage(nextPage);
      setIsTurning(true);

      turnTimerRef.current = window.setTimeout(() => {
        setLeavingPage(null);
        setIsTurning(false);
      }, TURN_DURATION);
    },
    [activePage, isTurning],
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowRight") {
        goToPage(1);
      }

      if (event.key === "ArrowLeft") {
        goToPage(-1);
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])',
        );

        if (!focusableElements.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeModal, goToPage]);

  useEffect(() => {
    return () => {
      window.clearTimeout(turnTimerRef.current);
    };
  }, []);

  if (!isOpen) return null;

  const currentPage = invitationPages[activePage];

  const renderPage = (pageIndex) => {
    const page = invitationPages[pageIndex];

    return (
      <figure className="invitation-page">
        <img src={page.src} alt={page.alt} draggable="false" decoding="async" />

        <figcaption>{page.label}</figcaption>
      </figure>
    );
  };

  return (
    <div
      className="invitation-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <section
        ref={dialogRef}
        className="invitation-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="invitation-title"
        aria-describedby="invitation-description"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="invitation-dialog__header">
          <div className="invitation-dialog__title">
            <p id="invitation-description">Official invitation</p>
            <h2 id="invitation-title">Tribal Fair 2026</h2>
          </div>

          <div className="invitation-dialog__actions">
            <a
              href={invitationPdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Tribal Fair 2026 invitation PDF"
            >
              View Full Invitation
              <span aria-hidden="true">↗</span>
            </a>

            <button
              ref={closeButtonRef}
              className="invitation-close"
              type="button"
              onClick={closeModal}
              aria-label="Close invitation"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </header>

        <div className="invitation-pages">
          <div className="invitation-progress" aria-hidden="true">
            {invitationPages.map((page, index) => (
              <span
                key={page.label}
                className={index === activePage ? "is-active" : ""}
              />
            ))}
          </div>

          <div
            className={`invitation-page-stage invitation-page-stage--${turnDirection}`}
            aria-live="polite"
          >
            {leavingPage !== null && (
              <div
                className="invitation-page-turn invitation-page-turn--leaving"
                aria-hidden="true"
              >
                {renderPage(leavingPage)}
              </div>
            )}

            <div
              className="invitation-page-turn invitation-page-turn--entering"
              key={activePage}
            >
              {renderPage(activePage)}
            </div>
          </div>

          <div className="invitation-pagination">
            <button
              className="invitation-nav-button invitation-nav-button--previous"
              type="button"
              onClick={() => goToPage(-1)}
              disabled={isTurning}
              aria-label="Previous invitation page"
            >
              <span aria-hidden="true">←</span>
            </button>

            <p>
              {activePage + 1} / {invitationPages.length}
            </p>

            <button
              className="invitation-nav-button invitation-nav-button--next"
              type="button"
              onClick={() => goToPage(1)}
              disabled={isTurning}
              aria-label="Next invitation page"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
