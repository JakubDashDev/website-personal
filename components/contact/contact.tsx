'use client';

import { motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import { PiDownloadSimpleThin } from 'react-icons/pi';
import { ContentContainer } from '@/components/content-container';
import { contactEmail, socialLinks } from '@/data';
import { ContactForm } from './contact-form';
import { useContactTheme } from './hooks';

const revealItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const sectionRef = useContactTheme();

  return (
    <ContentContainer
      sectionRef={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-bg z-40 min-h-svh text-white"
      contentClassName="bg-bg px-page flex min-h-svh flex-col pt-28 pb-4"
      fitContent
    >
      <div className="flex w-full flex-1 items-start lg:items-center">
        <div className="w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={revealItem}
          >
            <h2
              id="contact-heading"
              className="max-w-4xl text-4xl leading-none font-medium tracking-tight sm:text-6xl lg:text-7xl"
            >
              {t('title')}
            </h2>
            <p className="text-text-body mt-4 max-w-2xl text-base leading-7">{t('description')}</p>
          </motion.div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.aside
              className="flex flex-col items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={revealItem}
            >
              <p className="text-text-muted text-sm">{t('businessEmail')}</p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-text hover:border-accent hover:text-accent mt-2 border-b border-white/20 pb-1 text-lg transition-colors"
              >
                {contactEmail}
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-pill border-hairline text-text-body hover:border-text-muted hover:text-text inline-flex min-h-11 items-center gap-2 border px-4 text-sm transition-colors"
                  >
                    <Icon aria-hidden="true" className="text-lg" />
                    {label}
                  </a>
                ))}
                <a
                  href={`/jakubcieslik1_${locale}.pdf`}
                  download
                  className="rounded-pill border-hairline text-text-body hover:border-text-muted hover:text-text inline-flex min-h-11 cursor-pointer items-center gap-2 border px-4 text-sm transition-colors"
                >
                  <PiDownloadSimpleThin aria-hidden="true" className="text-lg" />
                  {t('downloadCv')}
                </a>
              </div>
            </motion.aside>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={revealItem}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
      <footer className="text-text-muted w-full text-center text-xs">
        © {new Date().getFullYear()} Jakub Cieślik
      </footer>
    </ContentContainer>
  );
}
