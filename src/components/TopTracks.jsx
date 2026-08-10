import { useInView } from '../hooks/useInView';
import { SPOTIFY_URL } from '../config';
import WaveDivider from './WaveDivider';

// Stream counts pulled from Pedro Perez's public Spotify artist page —
// rendered as tide bars (highest swell = most-played) instead of a plain list.
const TRACKS = [
  { name: 'Meu Raio de Sol', plays: 73080 },
  { name: 'Te Espero na Vila', plays: 16053 },
  { name: 'Corpo e Poesia', plays: 15026 },
  { name: 'Dança pra Ela', plays: 13744 },
  { name: 'Peço', plays: 11178 },
];

const MAX_PLAYS = Math.max(...TRACKS.map((t) => t.plays));

function formatPlays(n) {
  return new Intl.NumberFormat('pt-BR').format(n);
}

export default function TopTracks() {
  const [ref, inView] = useInView();

  return (
    <>
      <WaveDivider from="#0b2242" to="#102b52" />
      <section id="faixas" className={`section section--raised reveal${inView ? ' in-view' : ''}`} ref={ref}>
        <div className="container">
          <p className="eyebrow">As mais tocadas</p>
          <h2 className="section__heading">Marés mais altas</h2>
          <p className="section__lede">
            As faixas que mais rodam nos fones, do maior swell ao mais suave.
          </p>

          <div className="tracks">
            {TRACKS.map((track, i) => (
              <div className="track" key={track.name}>
                <div className="track__head">
                  <span className="track__name">
                    <span className="track__index">{String(i + 1).padStart(2, '0')}</span>
                    {track.name}
                  </span>
                  <span className="track__plays">{formatPlays(track.plays)} execuções</span>
                </div>
                <div className="track__bar-track">
                  <div
                    className="track__bar-fill"
                    style={{ '--fill': `${Math.max(14, (track.plays / MAX_PLAYS) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="gallery__footer" style={{ marginTop: 40 }}>
            <p className="gallery__footer-text">
              Discografia completa, incluindo o EP <strong>Devaneios</strong>, direto no Spotify.
            </p>
            <a className="btn btn--ghost" href={SPOTIFY_URL} target="_blank" rel="noreferrer">
              Ver no Spotify
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
