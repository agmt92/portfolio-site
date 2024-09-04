import VideoBackground from './ui/landing-page/VideoBackground';
import PassportSection from './ui/landing-page/PassportSection';
import Navbar from './ui/landing-page/navbar-top';
import Footer from './ui/landing-page/footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <VideoBackground />
      <PassportSection />
      <Footer />
    </main>
  );
}