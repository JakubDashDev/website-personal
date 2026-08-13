import { Contact } from '@/components/contact/contact';
import { Experience } from '@/components/experience/experience';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { Navbar } from '@/components/navbar/navbar';
import { References } from '@/components/references/references';
import { Technology } from '@/components/technology/technology';

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Technology />
        <References />
        <Contact />
      </main>
    </>
  );
}
