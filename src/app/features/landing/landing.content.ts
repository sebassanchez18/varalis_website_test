export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface LegalCase {
  readonly title: string;
  readonly description: string;
}

export interface ProcessStep {
  readonly title: string;
  readonly description: string;
}

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterGroup {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface Pillar {
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly iconSrc: string;
  readonly iconWidth: number;
  readonly iconHeight: number;
}

export const landingContent = {
  logo: {
    markSrc: 'images/logo-mark.svg',
    markWidth: 54,
    markHeight: 54,
    name: 'V A R A',
    poweredBy: 'powered by',
    brand: 'Varalis',
    homeLabel: 'VARA home',
  },
  menu: {
    open: 'Open menu',
    close: 'Close menu',
    label: 'Primary',
  },
  nav: [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Core Pillars', href: '#core-pillars' },
    { label: 'FAQs', href: '#faqs' },
  ] satisfies readonly NavLink[],
  cta: {
    label: 'Explore my Elegibility →',
    href: '#eligibility',
  },
  hero: {
    titleId: 'hero-title',
    titleLead: 'Understand your legal options.',
    titleAccent: 'Know your next step.',
    description:
      'VARA is a tool that combines secure technology and human guidance to simplify every stage of your legal journey.',
    nextCaseLabel: 'Next legal case',
    paginationLabel: 'Case studies',
    imageSrc: 'images/legal-case.png',
    imageAlt: 'Gavel, scales of justice, and documents on a desk in front of a bookshelf',
    arrowSrc: 'images/arrow-next.svg',
    arrowWidth: 46,
    arrowHeight: 46,
    cases: [
      {
        title: '$7.25 billion statement -Roundup Product Liablity',
        description:
          'Firm attorneys have served as part of counsel in nationwide litigation involving alleged injuries related to herbicide exposure. Recent global settlement frameworks have reached billions of dollars in total value.',
      },
      {
        title: '$2.2 Billion Jury Verdict - Pharmaceutical Litigation',
        description:
          'The firm helped secure one of the largest verdicts in the nation involving the dilution of chemotherapy medications and widespread harm to patients.',
      },
      {
        title: '$1.78 Billion Jury Verdict - Anti Trust Real Estate Litigation',
        description:
          'Federal litigation against the National Association of Realtors and major brokerage firms resulted in a landmark verdict addressing industry-wide commission practices and marketplace conduct.',
      },
    ] satisfies readonly LegalCase[],
  },
  pillars: {
    id: 'core-pillars',
    titleId: 'core-pillars-title',
    eyebrow: 'A BETTER LEGAL EXPERIENCE',
    title: 'Reducing Uncertainty at the Start of Your Legal Journey',
    description:
      'VARA is designed to make the first stage easier to navigate—helping people explore possible relevance, find understandable information, and identify a sensible next step.',
    items: [
      {
        title: 'A Better Beginning',
        description: 'Start by exploring whether a legal matter may relate to your circumstances.',
        imageSrc: 'images/pillar-beginning.png',
        imageAlt: 'A person in a suit reaching forward to shake hands',
        iconSrc: 'images/pillar-icon-beginning.svg',
        iconWidth: 96,
        iconHeight: 96,
      },
      {
        title: 'Intelligent by Design',
        description:
          'Guided technology can make information easier to follow and next steps clearer.',
        imageSrc: 'images/pillar-intelligent.png',
        imageAlt: 'A blue network of connected points with a brain outline',
        iconSrc: 'images/pillar-icon-intelligent.svg',
        iconWidth: 96,
        iconHeight: 96,
      },
      {
        title: 'Expert Guidance',
        description: 'Independent legal professionals may become involved when further review',
        imageSrc: 'images/pillar-guidance.png',
        imageAlt: 'A gavel resting on an open book beside scales of justice',
        iconSrc: 'images/pillar-icon-guidance.svg',
        iconWidth: 96,
        iconHeight: 96,
      },
    ] satisfies readonly Pillar[],
  },
  howItWorks: {
    id: 'how-it-works',
    titleId: 'how-it-works-title',
    eyebrow: 'HOW IT WORKS',
    titleLead: 'Three steps to understand',
    titleRest: 'your next move.',
    ctaLabel: 'Start Now',
    ctaHref: '#eligibility',
    imageSrc: 'images/how-it-works.png',
    imageAlt: 'A man reviewing information on a tablet at a desk',
    lineSrc: 'images/how-it-works-line.svg',
    lineWidth: 421.019,
    lineHeight: 0.5,
    steps: [
      {
        title: 'Explore your situation',
        description:
          'Answer a series of guided questions designed to better understand your circumstances.',
      },
      {
        title: 'Receive guidance',
        description:
          'The platform analyzes your responses to determine potential relevance and outlines options in plain, straightforward language.',
      },
      {
        title: 'Understand & Continue',
        description:
          'If further review may be appropriate, VARA may guide you to the next stage of the process.',
      },
    ] satisfies readonly ProcessStep[],
  },
  privacy: {
    id: 'privacy',
    titleId: 'privacy-title',
    eyebrow: 'PRIVACY & SECURITY',
    title: 'Know how your information is handled.',
    description:
      'People should not have to guess what happens to personal information. Explain data handling in plain language and link to the approved privacy policy.',
    ctaLabel: 'Explore my Elegibility →',
    ctaHref: '#eligibility',
    imageSrc: 'images/privacy.png',
    imageAlt: 'A hand resting on a laptop keyboard',
  },
  finalCta: {
    id: 'ready',
    titleId: 'ready-title',
    eyebrow: 'READY TO BEGIN?',
    title: 'Understanding starts with a few simple questions.',
    description:
      'Explore whether a legal matter may relate to your circumstances and learn whether further review may be appropriate.',
    ctaLabel: 'Explore my Elegibility →',
    ctaHref: '#eligibility',
    imageSrc: 'images/final-cta.png',
    imageAlt: 'Three colleagues reviewing documents together in an office',
  },
  footer: {
    logo: {
      markSrc: 'images/footer-logo.svg',
      markWidth: 70.9349,
      markHeight: 70.9349,
    },
    tagline: 'A more understandable starting point for exploring potential legal matters.',
    groups: [
      {
        title: 'EXPLORE',
        links: [
          { label: 'How it works', href: '#how-it-works' },
          { label: 'Privacy', href: '#privacy' },
          { label: 'FAQ', href: '#faqs' },
        ],
      },
      {
        title: 'INFORMATION',
        links: [
          { label: 'Privacy Policy', href: '#privacy-policy' },
          { label: 'Terms of Use', href: '#terms' },
        ],
      },
      {
        title: 'SUPPORT',
        links: [
          { label: 'Contact', href: '#contact' },
          { label: 'Back to Top', href: '#top' },
        ],
      },
    ] satisfies readonly FooterGroup[],
  },
} as const;
