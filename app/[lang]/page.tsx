import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { Navbar } from '@/components/navbar/navbar';

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />
      <Hero />
    </>
  );
}
