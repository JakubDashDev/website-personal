'use client';

import type { ComponentPropsWithoutRef, Ref } from 'react';
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-media-query';

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
  const isMobile = useIsMobile();

  useEffect(() => {
    if (fitContent) return;

    const content = contentRef.current;
    const container = content?.parentElement;
    if (!content || !container) return;

    const updateLayout = () => {
      if (isMobile) {
        container.style.height = `calc(${content.offsetHeight}px + 100svh)`;
        content.style.top = `min(0px, calc(100svh - ${content.offsetHeight}px))`;
      } else {
        container.style.height = '';
        content.style.top = '';
      }
    };
    const observer = new ResizeObserver(updateLayout);

    observer.observe(content);
    updateLayout();

    return () => {
      observer.disconnect();
      container.style.height = '';
      content.style.top = '';
    };
  }, [fitContent, isMobile]);

  return (
    <section
      ref={sectionRef}
      className={`relative -mt-[100svh] shadow-[0_-18px_50px_rgb(0_0_0_/_45%)] ${className}`}
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
