// Signature transition: every section seam is drawn as a wave rather than a
// hairline, echoing the wordmark's own wave. `from` fills the strip (matches
// the section above), `to` fills the crest (matches the section below).
export default function WaveDivider({ from, to }) {
  return (
    <svg
      className="wave-divider"
      viewBox="0 0 1200 64"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ background: from }}
    >
      <path
        d="M0 34 C 100 6, 200 6, 300 34 C 400 62, 500 62, 600 34 C 700 6, 800 6, 900 34 C 1000 62, 1100 62, 1200 34 V64 H0 Z"
        fill={to}
      />
    </svg>
  );
}
