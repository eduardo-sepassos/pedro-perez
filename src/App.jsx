import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import LatestRelease from './components/LatestRelease';
import TopTracks from './components/TopTracks';
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
        <Video />
      </main>
      <Footer />
    </>
  );
}
