import { AnnouncementBar, Navbar, Hero, AboutUs, ServicesSection } from '@/components';

export default function Home() {
  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesSection />
    </main>
  );
}
