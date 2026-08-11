import { Experience } from '@/components/experience/experience';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { Navbar } from '@/components/navbar/navbar';

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Experience />
      </main>
    </>
  );
}
