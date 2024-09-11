import VideoBackground from './ui/landing-page/VideoBackground';
import PassportSection from './ui/landing-page/PassportSection';
import LogosConveyer from './ui/landing-page/logos-conveyer';

export default function Home() {
  return (
    <main className="flex flex-col snap-y snap-mandatory">
      <VideoBackground />
      <LogosConveyer />
      <PassportSection />
    </main>
  );
}