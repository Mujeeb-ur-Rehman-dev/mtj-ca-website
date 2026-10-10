import React, { useState } from "react";
import "./VideoSection.css";
import mtjLogo from "../../assets/img/logos/mtj-logo.png";

export default function VideoSection({
  className = "",
  videoId = "KPg1Ux3juAU",
  posterImage,
  embedOnLoad = false,
  showPosterDetails = true,
  title = "How we are Fighting Hunger in Pakistan",
  channel = "MTJ Foundation Canada",
}) {
  const [playing, setPlaying] = useState(embedOnLoad);
  const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const posterStyle = posterImage
    ? { backgroundImage: `url(${posterImage})` }
    : { backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` };

  return (
    <section className={`video ${className}`.trim()}>
      {playing ? (
        <iframe
          className="video__iframe"
          src={videoUrl}
          title={`${title} | ${channel}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="video__poster" style={posterStyle}>
          <div className="video__scrim" />

          {showPosterDetails && (
            <>
              {/* top-left: channel logo + title/channel */}
              <div className="video__topbar">
                <img className="video__logo" src={mtjLogo} alt="" aria-hidden="true" />
                <div className="video__meta">
                  <strong>{title}</strong>
                  <span>{channel}</span>
                </div>
              </div>

              {/* bottom-left: share / watch-later icons */}
              <div className="video__bottombar">
                <div className="video__actions">
                  <button
                    type="button"
                    className="video__icon-btn"
                    aria-label="Share"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <path
                        d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .05 2.14l-6.02 3.5a3 3 0 1 0 0 4.72l6.02 3.5A3 3 0 1 0 15.83 16l-6.02-3.5a3 3 0 0 0 0-1l6.02-3.5A3 3 0 0 0 18 8z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Share</span>
                  </button>
                  <button
                    type="button"
                    className="video__icon-btn"
                    aria-label="Watch later"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <path
                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 10.59V6h-2v7.41l5.29 5.3 1.41-1.42z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                {/* bottom-right: watch on youtube */}
                <a
                  className="video__watch-btn"
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Watch on
                  <svg viewBox="0 0 28 20" width="26" height="19" aria-hidden="true">
                    <path
                      d="M27.4 3.1A3.5 3.5 0 0 0 24.9.6C22.7 0 14 0 14 0S5.3 0 3.1.6A3.5 3.5 0 0 0 .6 3.1 36.6 36.6 0 0 0 0 10a36.6 36.6 0 0 0 .6 6.9 3.5 3.5 0 0 0 2.5 2.5C5.3 20 14 20 14 20s8.7 0 10.9-.6a3.5 3.5 0 0 0 2.5-2.5A36.6 36.6 0 0 0 28 10a36.6 36.6 0 0 0-.6-6.9z"
                      fill="#FF0000"
                    />
                    <path d="M11 14.2V5.8L18.5 10z" fill="#fff" />
                  </svg>
                </a>
              </div>
            </>
          )}

          {/* center play button — triggers inline playback */}
          <button
            className="video__play"
            onClick={() => setPlaying(true)}
            aria-label="Play video"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </button>

        </div>
      )}
    </section>
  );
}