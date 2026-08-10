import { useInView } from '../hooks/useInView';
import WaveDivider from './WaveDivider';

const FACTS = [
  { label: 'Nome completo', value: 'Pedro Henrique B. M. G. Perez' },
  { label: 'Origem', value: 'Vitória, ES' },
  { label: 'Estilo', value: 'Reggae Praia' },
  { label: 'Já dividiu palco com', value: 'Armandinho, Maneva, Gabriel O Pensador' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <>
      <WaveDivider from="#0b2242" to="#102b52" />
      <section id="sobre" className={`section section--raised reveal${inView ? ' in-view' : ''}`} ref={ref}>
        <div className="container">
          <div className="about__top">
            <div className="about__avatar">
              <img src={`${import.meta.env.BASE_URL}images/avatar.jpg`} alt="Pedro Perez" />
            </div>
            <div>
              <p className="eyebrow">O artista</p>
              <h2 className="section__heading" style={{ margin: '10px 0 0' }}>
                Poesia que balança
                <br />
                com a maré.
              </h2>
            </div>
          </div>

          <div className="about__grid">
            <div className="about__text">
              <p>
                <strong>Pedro Perez</strong> tem 26 anos, é de Vitória, no
                Espírito Santo, e transforma a vida na beira-mar em canção.
                Reconhecido como uma das vozes emergentes do reggae praia
                brasileiro, ele veste letras de romance, reflexão e viagem com
                o balanço tranquilo do litoral capixaba.
              </p>
              <p>
                Sem pressa e sem fórmula: o som de Pedro respira a mesma maré
                que embala o Espírito Santo, entre versos de poesia e groove
                pé na areia — já levado ao palco ao lado de nomes como
                Armandinho, Maneva e Gabriel O Pensador.
              </p>
            </div>

            <div className="about__facts">
              {FACTS.map((fact) => (
                <div className="about__fact" key={fact.label}>
                  <span className="about__fact-label">{fact.label}</span>
                  <span className="about__fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
