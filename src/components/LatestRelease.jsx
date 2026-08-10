import { useInView } from '../hooks/useInView';
import { SPOTIFY_EMBED_URL } from '../config';
import WaveDivider from './WaveDivider';

export default function LatestRelease() {
  const [ref, inView] = useInView();

  return (
    <>
      <WaveDivider from="#102b52" to="#0b2242" />
      <section id="mare-nova" className={`section reveal${inView ? ' in-view' : ''}`} ref={ref}>
        <div className="container">
          <p className="eyebrow">No Spotify agora</p>
          <h2 className="section__heading">Último lançamento</h2>

          <div className="release__body">
            <p className="release__name">Maré Nova</p>
            <p className="release__meta">Pedro Perez · Álbum · 2025</p>
            <div className="release__embed">
              <iframe
                src={SPOTIFY_EMBED_URL}
                width="100%"
                height="352"
                loading="lazy"
                title="Player do Spotify: Pedro Perez"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
