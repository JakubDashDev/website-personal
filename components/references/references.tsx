'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { PiArrowDownLight } from 'react-icons/pi';
import { ContentContainer } from '@/components/content-container';
import { references } from './data';
import { useReferencesTheme } from './hooks';
import { Reference, referenceReveal } from './reference';

export function References() {
  const t = useTranslations('references');
  const sectionRef = useReferencesTheme();

  return (
    <ContentContainer
      sectionRef={sectionRef}
      id="references"
      aria-labelledby="references-heading"
      className="z-30 min-h-svh bg-[#f4f4f4] text-[#171717]"
      contentClassName="px-page flex min-h-svh flex-col pt-28 pb-6"
      fitContent
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={referenceReveal}
      >
        <h2
          id="references-heading"
          className="text-4xl leading-none font-medium tracking-tight sm:text-6xl"
        >
          {t('title')}
        </h2>
      </motion.div>

      <div className="mt-8 divide-y divide-black/15">
        {references.map((reference) => (
          <Reference key={reference.id} reference={reference} linkedInLabel={t('linkedInLabel')} />
        ))}
      </div>

      <a
        href="#contact"
        className="mt-auto inline-flex items-center gap-3 self-center rounded-full border border-black/20 px-5 py-3 text-sm font-medium transition-colors hover:border-black/40 hover:bg-black/5"
      >
        {t('contactCta')}
        <PiArrowDownLight aria-hidden="true" className="text-lg" />
      </a>
    </ContentContainer>
  );
}
