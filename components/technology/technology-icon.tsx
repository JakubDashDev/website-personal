import type { TechnologyItem } from './data';

export function TechnologyIcon({ label, icon: Icon, color }: TechnologyItem) {
  return (
    <li title={label} className="flex w-20 flex-col items-center gap-2" style={{ color }}>
      <Icon aria-hidden className="size-8" />
      <span className="text-center text-xs leading-4 text-white/60">{label}</span>
    </li>
  );
}
