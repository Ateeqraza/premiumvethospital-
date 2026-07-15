import { AnnouncementBar, Navbar, Hero, AboutUs } from '@/components';

export default function Home() {
  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <AboutUs />
    </main>
  );
}
