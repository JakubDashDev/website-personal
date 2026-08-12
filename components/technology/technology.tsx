'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { technologyGroups } from './data';
import { useTechnologyMotion } from './hooks';
import { revealItem, TechnologySection } from './technology-section';

export function Technology() {
  const t = useTranslations('technology');
  const { reduceMotion, sectionRef, visibleGroups } = useTechnologyMotion();

  return (
    <section
      ref={sectionRef}
      id="technology"
      aria-labelledby="technology-heading"
      className="relative z-20 h-[300svh] bg-black text-white"
    >
      <div className="px-page sticky top-0 flex min-h-svh items-center bg-black pt-24 pb-8">
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
      </div>
    </section>
  );
}
