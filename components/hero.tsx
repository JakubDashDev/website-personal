import Image from 'next/image';
import { useTranslations } from 'next-intl';
import heroImage from '@/public/hero.webp';

export function Hero() {
  const t = useTranslations('home');

  return (
    <section id="home" className="hero-scroll-track relative">
      <div className="bg-bg px-page sticky top-0 grid h-svh content-center items-center gap-12 overflow-x-hidden pt-32 pb-8 lg:grid-cols-2 lg:gap-16 lg:overflow-hidden lg:py-32">
        <Image
          src={heroImage}
          alt=""
          className="hero-image-fade order-2 hidden w-full mix-blend-screen lg:block"
          sizes="(min-width: 1024px) 45vw, 1px"
          loading='eager'
        />
        <div>
          <h1 className="text-5xl leading-none font-medium tracking-tighter sm:text-6xl lg:text-8xl">
            Jakub Cieślik
          </h1>
          <p className="hero-copy-overlap text-text-body relative z-10 mt-6 text-lg leading-8 lg:mt-8">
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
      </div>
    </section>
  );
}
