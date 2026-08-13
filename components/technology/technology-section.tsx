import { motion } from 'motion/react';
import type { TechnologyItem } from '@/data';
import { TechnologyIcon } from './technology-icon';

export const revealItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15, duration: 0.5, ease: 'easeOut' as const },
  },
  exit: { opacity: 0, y: 18, transition: { duration: 0.25, ease: 'easeIn' as const } },
};

type TechnologySectionProps = {
  title: string;
  items: readonly TechnologyItem[];
  discoverLabel: string;
  isVisible: boolean;
  reduceMotion: boolean | null;
};

export function TechnologySection({
  title,
  items,
  discoverLabel,
  isVisible,
  reduceMotion,
}: TechnologySectionProps) {
  return (
    <article className="py-5">
      <h3 className="text-2xl leading-none font-medium tracking-tight">{title}</h3>
      <div className="relative mt-5">
        <motion.ul
          aria-hidden={!isVisible}
          className="flex flex-wrap items-center gap-x-6 gap-y-4"
          initial={reduceMotion ? false : 'exit'}
          animate={isVisible ? 'visible' : 'exit'}
          variants={revealItem}
        >
          {items.map((item) => (
            <TechnologyIcon key={item.label} {...item} />
          ))}
        </motion.ul>
        <motion.p
          aria-hidden={isVisible}
          className="absolute inset-x-0 top-0 text-xs text-white/40"
          initial={false}
          animate={isVisible ? 'exit' : 'visible'}
          variants={revealItem}
        >
          {discoverLabel}
        </motion.p>
      </div>
    </article>
  );
}
