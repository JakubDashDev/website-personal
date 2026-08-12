'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { experiences } from './data';
import { useExperienceDates, useExperienceMotion } from './hooks';

const revealItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Experience() {
  const t = useTranslations('experience');
  const { formatMonth, totalExperience } = useExperienceDates();
  const { reduceMotion, sectionRef, visibleRoles } = useExperienceMotion();

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-labelledby="experience-heading"
      className="curtain-panel bg-secondary relative z-10 min-h-svh text-white"
    >
      <div className="bg-secondary px-page sticky top-0 flex min-h-svh items-center pt-28 pb-8 lg:pb-6">
        <div className="w-full">
          <motion.div
            className="mb-8"
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={revealItem}
          >
            <div className="flex flex-wrap items-center gap-4">
              <h2
                id="experience-heading"
                className="text-4xl leading-none font-medium tracking-tight sm:text-6xl lg:text-7xl"
              >
                {t('title')}
              </h2>
              <span
                suppressHydrationWarning
                aria-label={t('totalExperience', { duration: totalExperience })}
                className="rounded-pill border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/70"
              >
                {totalExperience}
              </span>
            </div>
            <p className="mt-4 max-w-5xl text-base leading-6 text-white/65">{t('description')}</p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {experiences.map((role, index) => (
              <motion.article
                key={role.id}
                className="relative flex flex-col rounded-3xl border border-white/15 bg-white/6 p-5 md:p-6"
                initial={reduceMotion ? false : 'hidden'}
                animate={reduceMotion || visibleRoles > index ? 'visible' : 'hidden'}
                variants={revealItem}
              >
                <a
                  href={role.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t(`${role.id}.company`)} — LinkedIn`}
                  className="absolute top-5 right-5 inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-base leading-none transition-colors hover:border-white/40 hover:bg-white/10 md:top-6 md:right-6"
                >
                  ↗
                </a>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pr-12">
                  <h3 className="text-3xl font-medium tracking-tight">{t(`${role.id}.company`)}</h3>
                  <span className="text-sm tracking-widest whitespace-nowrap text-white/60">
                    {formatMonth(role.start)} — {role.end ? formatMonth(role.end) : t('present')}
                  </span>
                </div>
                <p className="mt-1 text-base">{t(`${role.id}.title`)}</p>
                <p className="mt-4 flex-1 text-base leading-7">{t(`${role.id}.body`)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-pill border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
