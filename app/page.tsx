import VideoBackground from './ui/landing-page/VideoBackground';
import PassportSection from './ui/landing-page/PassportSection';
import Navbar from './ui/landing-page/navbar-top';
import Footer from './ui/landing-page/footer';
import LogosConveyer from './ui/landing-page/logos-conveyer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <VideoBackground />
      <PassportSection />
      <LogosConveyer />
      <Footer />
    </main>
  );
}