import { INSTAGRAM_URL, SPOTIFY_URL, YOUTUBE_CHANNEL_URL } from '../config';
import { InstagramIcon, SpotifyIcon, YouTubeIcon } from './Icons';
import WaveDivider from './WaveDivider';

export default function Footer() {
  return (
    <>
      <WaveDivider from="#102b52" to="#0b2242" />
      <footer className="footer" style={{ background: 'var(--mare)' }}>
        <div className="container">
          <div className="footer__top">
            <p className="footer__mark">Pedro Perez</p>
            <div className="footer__socials">
              <a
                className="footer__social"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Pedro Perez"
              >
                <InstagramIcon />
              </a>
              <a
                className="footer__social"
                href={SPOTIFY_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify de Pedro Perez"
              >
                <SpotifyIcon />
              </a>
              <a
                className="footer__social"
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube de Pedro Perez"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <div className="footer__bottom">
            <span>Reggae praia · Vitória, ES</span>
            <span>© {new Date().getFullYear()} Pedro Perez</span>
          </div>
        </div>
      </footer>
    </>
  );
}
