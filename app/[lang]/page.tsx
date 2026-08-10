import { useTranslations } from 'next-intl';
import { Intro } from '@/components/intro';
import { Navbar } from '@/components/navbar/navbar';

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <Intro />
      <Navbar />
      <main id="home">{t('title')}</main>
    </>
  );
}
