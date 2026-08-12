import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
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
] as const satisfies ReadonlyArray<{ id: string; items: readonly TechnologyItem[] }>;
