import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import { PiGithubLogoThin, PiLinkedinLogoThin } from 'react-icons/pi';
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiJavascript,
  SiLinux,
  SiMqtt,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiSidekiq,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

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

export type TechnologyItem = { label: string; icon: IconType; color: string };

export const technologyGroups = [
  {
    id: 'languages',
    items: [
      { label: 'Ruby', icon: SiRuby, color: '#CC342D' },
      { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    id: 'technologies',
    items: [
      { label: 'Ruby on Rails', icon: SiRubyonrails, color: '#D30001' },
      { label: 'Sidekiq', icon: SiSidekiq, color: '#B1003E' },
      { label: 'React', icon: SiReact, color: '#61DAFB' },
      { label: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { label: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { label: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { label: 'Redux / RTK', icon: SiRedux, color: '#764ABC' },
      { label: 'Redis', icon: SiRedis, color: '#FF4438' },
      { label: 'MQTT', icon: SiMqtt, color: '#660066' },
      { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    id: 'tools',
    items: [
      { label: 'Git', icon: SiGit, color: '#F05032' },
      { label: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { label: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
      { label: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
      { label: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { label: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { label: 'Docker', icon: SiDocker, color: '#2496ED' },
      { label: 'Linux', icon: SiLinux, color: '#FCC624' },
      { label: 'AWS', icon: FaAws, color: '#FF9900' },
    ],
  },
];

export type Reference = {
  id: string;
  date: string;
  author: string;
  content: string;
  position: string;
  href: string;
};

export const linkedInReferencesUrl =
  'https://www.linkedin.com/in/jakub-cie%C5%9Blik-b79881319/details/recommendations/';

export const references = [
  {
    id: 'piotr-galas',
    date: '10.08.2026',
    author: 'Piotr Gałaś',
    content:
      'Zdecydowanie polecam Kubę. Dołączył do zespołu jako junior developer, ale już na początku pokazał, że jego doświadczenie i umiejętności są znacznie wyższe. Świetnie zna nodejs, ogarnia zarówno front jak i backend. Jest to programista który pomimo że wspomaga się AI, potrafi pisać kod samodzielnie i rozumie logikę która została wygenerowana. Personalnie, ma te cechy które cenie najbardziej we współpracownikach. Bierze pełną odpowiedzialność za to co robi. Zadania dowozi o początku do końca. Jest dobrym teamplayerem co w moim odczuciu jest nawet ważniejsze niż programowanie.',
    position: 'Co-founder & CTO Shelfio · Full-stack Developer',
    href: linkedInReferencesUrl,
  },
  {
    id: 'milosz-wyrzykowski',
    date: '13.10.2025',
    author: 'Milosz Wyrzykowski',
    content:
      'Jakub odbył praktyki na stanowisku Frontend Developera w naszym zespole. W trakcie współpracy wyróżnił się dużym zaangażowaniem, samodzielnością i pozytywnym podejściem do pracy. Bardzo szybko przyswajał nowe technologie i potrafił zastosować zdobytą wiedzę w praktyce. Jakub wykazał się również dużą komunikatywnością – chętnie uczestniczył w spotkaniach zespołu, nie bał się zadawać pytań i aktywnie proponował usprawnienia w kodzie oraz interfejsie aplikacji. Jego dociekliwość i otwartość na feedback sprawiły, że z każdym tygodniem widocznie się rozwijał. Pod względem technicznym Jakub dobrze odnajdywał się w pracy z Reactem i Material-UI, a jego kod był przejrzysty, logiczny i zgodny z zasadami dobrych praktyk programistycznych. Z pełnym przekonaniem mogę polecić Jakuba jako rzetelnego, ambitnego i zaangażowanego młodego programistę, który świetnie odnajduje się w pracy zespołowej i z pewnością dobrze poradzi sobie w każdym projekcie frontendowym.',
    position: 'Co-Founder Sybilia.pl · Front-end Developer',
    href: linkedInReferencesUrl,
  },
];

export const contactEmail = 'jakubdashdev@gmail.com';

export const socialLinks: ReadonlyArray<{ label: string; href: string; icon: IconType }> = [
  { label: 'GitHub', href: 'https://github.com/JakubDashDev', icon: PiGithubLogoThin },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jakub-cie%C5%9Blik-b79881319/',
    icon: PiLinkedinLogoThin,
  },
];
