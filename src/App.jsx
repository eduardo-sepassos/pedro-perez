import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import LatestRelease from './components/LatestRelease';
import TopTracks from './components/TopTracks';
import LiveBanner from './components/LiveBanner';
import Video from './components/Video';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <LatestRelease />
        <TopTracks />
        <LiveBanner />
        <Video />
      </main>
      <Footer />
    </>
  );
}
