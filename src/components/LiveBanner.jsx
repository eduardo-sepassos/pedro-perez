import { useInView } from '../hooks/useInView';
import WaveDivider from './WaveDivider';

export default function LiveBanner() {
  const [ref, inView] = useInView();

  return (
    <>
      <WaveDivider from="#102b52" to="#0b2242" />
      <section className={`section reveal${inView ? ' in-view' : ''}`} ref={ref} style={{ paddingBottom: 0 }}>
        <div className="container">
          <p className="eyebrow">Ao vivo</p>
          <h2 className="section__heading">Multidão que canta junto.</h2>
        </div>

        <figure className="live-banner__photo">
          <img
            src={`${import.meta.env.BASE_URL}images/foto_show.jpg`}
            alt="Pedro Perez e banda tocando para uma multidão em uma festa na praia"
            loading="lazy"
          />
        </figure>
      </section>
    </>
  );
}
