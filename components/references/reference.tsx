import { motion } from 'motion/react';
import { ExternalLinkButton } from '@/components/external-link-button';
import type { Reference as ReferenceData } from './data';

export const referenceReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

type ReferenceProps = {
  reference: ReferenceData;
  linkedInLabel: string;
};

export function Reference({ reference, linkedInLabel }: ReferenceProps) {
  return (
    <motion.article
      className="grid gap-5 py-5 md:grid-cols-7 md:gap-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={referenceReveal}
    >
      <div className="md:col-span-2">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="text-xl font-medium tracking-tight">{reference.author}</h3>
          <time className="mt-0.5 text-sm text-black/50">{reference.date}</time>
        </div>
        <p className="mt-1 text-sm text-black/55">{reference.position}</p>
      </div>
      <div className="flex items-start gap-3 sm:gap-6 md:col-span-5">
        <blockquote className="relative flex-1 pl-6 text-base leading-7 text-black/75 italic sm:pl-8 sm:text-lg sm:leading-8">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 text-4xl leading-none text-black/20"
          >
            “
          </span>
          {reference.content}
        </blockquote>
        <ExternalLinkButton
          href={reference.href}
          label={`${reference.author} — ${linkedInLabel}`}
          variant="dark"
        />
      </div>
    </motion.article>
  );
}
