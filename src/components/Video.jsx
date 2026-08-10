import { useInView } from '../hooks/useInView';
import { YOUTUBE_EMBED_URL } from '../config';
import WaveDivider from './WaveDivider';

export default function Video() {
  const [ref, inView] = useInView();

  return (
    <>
      <WaveDivider from="#0b2242" to="#102b52" />
      <section id="videoclipe" className={`section section--raised reveal${inView ? ' in-view' : ''}`} ref={ref}>
        <div className="container">
          <p className="eyebrow">No YouTube</p>
          <h2 className="section__heading">Videoclipe oficial</h2>
          <p className="release__meta" style={{ marginTop: -8 }}>
            Peço · Pedro Perez, Macucos
          </p>

          <div className="video__frame">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Pedro Perez, Macucos - Peço (Videoclipe Oficial)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
