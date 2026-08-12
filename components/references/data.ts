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
    position:
      'Co-founder & CTO Shelfio · Full-stack Developer',
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
] as const satisfies readonly Reference[];
