const linkedInExperienceUrl =
  'https://www.linkedin.com/in/jakub-cie%C5%9Blik-b79881319/details/experience/';

export const experiences = [
  {
    id: 'shelfio',
    href: linkedInExperienceUrl,
    start: { year: 2025, month: 10 },
    end: null,
    stack: [
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Next.js',
      'Docker',
      'Linux',
      'Ruby',
      'Ruby on Rails',
      'PostgreSQL',
      'IoT / MQTT',
      'AWS S3',
      'Microservices',
    ],
  },
  {
    id: 'sitebell',
    href: linkedInExperienceUrl,
    start: { year: 2025, month: 8 },
    end: { year: 2025, month: 10 },
    stack: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'Docker', 'Linux', 'GitLab'],
  },
] as const;
