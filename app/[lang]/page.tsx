import { useTranslations } from 'next-intl';
import { Intro } from '@/components/intro';

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <Intro />
      <div>{t('title')}</div>
    </>
  );
}
