import Image from 'next/image';
import { useTranslations } from 'next-intl';
import heroImage from '@/public/hero.png';

export function Hero() {
  const t = useTranslations('home');

  return (
    <main
      id="home"
      className="px-page grid min-h-svh content-center items-center gap-12 py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-32"
    >
      <Image
        src={heroImage}
        alt=""
        className="order-2 hidden w-full mask-[radial-gradient(ellipse_at_center,black_35%,transparent_90%)] mix-blend-screen lg:block"
        sizes="(min-width: 1024px) 45vw, 1px"
      />
      <div>
        <h1 className="text-8xl leading-none font-medium tracking-[-0.04em]">Jakub Cieślik</h1>
        <p className="text-text-body relative z-10 mt-6 max-w-3xl text-lg leading-8 lg:mt-8 lg:w-[calc(100%+7rem)] lg:max-w-none">
          {t('profile')}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a
            className="bg-accent text-bg rounded-button inline-flex min-h-12 items-center justify-center px-6 font-mono font-medium transition hover:-translate-y-px hover:opacity-90"
            href="#experience"
          >
            {t('experienceCta')}
            <span className="ml-2 text-xl leading-none" aria-hidden="true">
              ↓
            </span>
          </a>
          <a
            className="border-hairline text-text hover:border-text-muted rounded-button inline-flex min-h-12 items-center justify-center border px-6 font-medium transition-colors"
            href="#contact"
          >
            {t('contactCta')}
          </a>
        </div>
      </div>
    </main>
  );
}
