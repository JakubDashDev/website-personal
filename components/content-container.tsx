'use client';

import type { ComponentPropsWithoutRef, Ref } from 'react';
import { useEffect, useRef } from 'react';

type ContentContainerProps = ComponentPropsWithoutRef<'section'> & {
  sectionRef?: Ref<HTMLElement>;
  contentClassName?: string;
  fitContent?: boolean;
};

export function ContentContainer({
  sectionRef,
  contentClassName = '',
  fitContent = false,
  className = '',
  children,
  ...props
}: ContentContainerProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fitContent) return;

    const content = contentRef.current;
    const container = content?.parentElement;
    if (!content || !container) return;

    const updateLayout = () => {
      container.style.minHeight = `calc(${content.offsetHeight}px + 100svh)`;
      content.style.top = `min(0px, calc(100svh - ${content.offsetHeight}px))`;
    };
    const observer = new ResizeObserver(updateLayout);

    observer.observe(content);
    window.addEventListener('resize', updateLayout);
    updateLayout();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLayout);
      container.style.minHeight = '';
      content.style.top = '';
    };
  }, [fitContent]);

  return (
    <section
      ref={sectionRef}
      className={`relative mt-[-100svh] shadow-[0_-18px_50px_rgb(0_0_0/45%)] ${className}`}
      {...props}
    >
      <div
        ref={contentRef}
        className={`${fitContent ? 'relative' : 'sticky top-0'} h-fit w-full overflow-x-hidden overflow-y-visible ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
