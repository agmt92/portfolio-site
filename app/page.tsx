import VideoBackground from './ui/landing-page/VideoBackground';
import PassportSection from './ui/landing-page/PassportSection';
import LogosConveyer from './ui/landing-page/logos-conveyer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <VideoBackground />
      <PassportSection />
      <LogosConveyer />
    </main>
  );
}