import { INSTAGRAM_URL, SPOTIFY_URL, YOUTUBE_CHANNEL_URL } from '../config';
import { InstagramIcon, SpotifyIcon, YouTubeIcon } from './Icons';

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <svg
        className="hero__swell"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 70 C 60 40,120 40,180 70 C 240 100,300 100,360 70 C 420 40,480 40,540 70 C 600 100,660 100,720 70 C 780 40,840 40,900 70 C 960 100,1020 100,1080 70 C 1110 55,1140 55,1200 70 V120 H0 Z"
          fill="#102b52"
        />
        <path
          d="M0 90 C 60 65,120 65,180 90 C 240 115,300 115,360 90 C 420 65,480 65,540 90 C 600 115,660 115,720 90 C 780 65,840 65,900 90 C 960 115,1020 115,1080 90 C 1110 78,1140 78,1200 90 V120 H0 Z"
          fill="#0b2242"
        />
      </svg>

      <div className="hero__inner">
        <div className="hero__text">
          <p className="eyebrow hero__eyebrow">20.32°S · 40.34°O — Vitória, ES</p>
          <h1 className="hero__title">
            Pedro
            <span>Perez</span>
          </h1>
          <p className="hero__sub">
            Reggae praia, poesia e maré alta. Do litoral capixaba pro resto do
            Brasil — o som de <strong>Maré Nova</strong>.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={SPOTIFY_URL} target="_blank" rel="noreferrer">
              <SpotifyIcon /> Ouvir no Spotify
            </a>
            <a className="btn btn--ghost" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <InstagramIcon /> Seguir no Instagram
            </a>
            <a className="btn btn--ghost" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">
              <YouTubeIcon /> Canal no YouTube
            </a>
          </div>
        </div>

        <figure className="hero__portrait">
          <img
            src={`${import.meta.env.BASE_URL}images/playing_guitar.png`}
            alt="Pedro Perez cantando e tocando guitarra no palco"
          />
        </figure>
      </div>

      <p className="hero__scroll">role para ver a maré ↓</p>
    </section>
  );
}
