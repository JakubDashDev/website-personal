import { motion } from 'motion/react';
import { PiArrowUpRightThin } from 'react-icons/pi';
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
      className="grid py-5 md:grid-cols-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={referenceReveal}
    >
      <div className="col-span-2">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="text-xl font-medium tracking-tight">{reference.author}</h3>
          <time className="mt-0.5 text-sm text-black/50">{reference.date}</time>
        </div>
        <p className="mt-1 text-sm text-black/55">{reference.position}</p>
      </div>
      <div className="col-span-5 flex items-start gap-6">
        <blockquote className="relative flex-1 pl-8 text-lg leading-8 text-black/75 italic">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 text-4xl leading-none text-black/20"
          >
            “
          </span>
          {reference.content}
        </blockquote>
        <a
          href={reference.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${reference.author} — ${linkedInLabel}`}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-black/20 text-base leading-none transition-colors hover:border-black/40 hover:bg-black/5"
        >
          <PiArrowUpRightThin aria-hidden="true" className="text-lg" />
        </a>
      </div>
    </motion.article>
  );
}
