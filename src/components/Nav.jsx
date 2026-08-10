import { useState } from 'react';
import { INSTAGRAM_URL, SPOTIFY_URL, YOUTUBE_CHANNEL_URL } from '../config';

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#mare-nova', label: 'Faixas' },
  { href: '#videoclipe', label: 'Videoclipe' },
  { href: '#contato', label: 'Contato' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <a className="nav__mark" href="#topo" onClick={close}>
        <img src={`${import.meta.env.BASE_URL}images/logo.jpg`} alt="Pedro Perez" />
      </a>

      <nav className="nav__links">
        <div className="nav__section-links">
          {LINKS.map((link) => (
            <a key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav__link" href={SPOTIFY_URL} target="_blank" rel="noreferrer">
          Spotify
        </a>
        <a className="nav__link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a className="nav__link" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">
          YouTube
        </a>
      </nav>

      <button
        type="button"
        className={`nav__toggle${open ? ' nav__toggle--open' : ''}`}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="nav-mobile-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="nav-mobile-panel" className={`nav__mobile${open ? ' nav__mobile--open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} className="nav__mobile-link" href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="nav__mobile-link" href={SPOTIFY_URL} target="_blank" rel="noreferrer" onClick={close}>
          Spotify
        </a>
        <a className="nav__mobile-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" onClick={close}>
          Instagram
        </a>
        <a className="nav__mobile-link" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer" onClick={close}>
          YouTube
        </a>
      </nav>
    </header>
  );
}
