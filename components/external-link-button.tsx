import { PiArrowUpRightThin } from 'react-icons/pi';

const variants = {
  light: 'border-white/20 text-white hover:border-white/40 hover:bg-white/10',
  dark: 'border-black/20 text-black hover:border-black/40 hover:bg-black/5',
};

type ExternalLinkButtonProps = {
  href: string;
  label: string;
  variant: keyof typeof variants;
  className?: string;
};

export function ExternalLinkButton({
  href,
  label,
  variant,
  className = '',
}: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`${variants[variant]} inline-flex size-10 shrink-0 items-center justify-center rounded-full border leading-none transition-colors ${className}`}
    >
      <PiArrowUpRightThin aria-hidden="true" className="text-lg" />
    </a>
  );
}
