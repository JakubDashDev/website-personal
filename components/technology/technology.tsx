'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { ContentContainer } from '@/components/content-container';
import { technologyGroups } from '@/data';
import { useTechnologyMotion } from './hooks';
import { revealItem, TechnologySection } from './technology-section';

export function Technology() {
  const t = useTranslations('technology');
  const { reduceMotion, sectionRef, visibleGroups } = useTechnologyMotion();

  return (
    <ContentContainer
      sectionRef={sectionRef}
      id="technology"
      aria-labelledby="technology-heading"
      className="z-20 h-[300svh] bg-black text-white"
      contentClassName="px-page flex min-h-svh items-start bg-black pt-28 pb-8 lg:items-center lg:pt-24"
    >
      <div className="w-full">
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={revealItem}
        >
          <h2
            id="technology-heading"
            className="text-4xl leading-none font-medium tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t('title')}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-6 text-white/65">{t('description')}</p>
        </motion.div>

        <div className="mt-8 divide-y divide-white/15">
          {technologyGroups.map((group, index) => (
            <TechnologySection
              key={group.id}
              title={t(`groups.${group.id}`)}
              items={group.items}
              discoverLabel={t('discover')}
              isVisible={Boolean(reduceMotion || visibleGroups > index)}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
}
