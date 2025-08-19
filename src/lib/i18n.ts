export type Locale = 'pt' | 'en';

const browser = typeof window !== 'undefined';

export function getInitialLocale(): Locale {
  if (!browser) return 'pt';
  const saved = (localStorage.getItem('locale') as Locale | null) ?? null;
  if (saved === 'pt' || saved === 'en') return saved;
  const nav = navigator.language?.toLowerCase() ?? 'pt';
  return nav.startsWith('pt') ? 'pt' : 'en';
}

export function getLocale(): Locale {
  if (!browser) return 'pt';
  const saved = localStorage.getItem('locale') as Locale | null;
  return saved === 'pt' || saved === 'en' ? saved : getInitialLocale();
}

export function switchLocale(next: Locale) {
  if (!browser) return;
  localStorage.setItem('locale', next);
  document.documentElement.lang = next;
  window.dispatchEvent(new CustomEvent('localechange', { detail: next }));
}

type Dict = Record<string, string>;

type Dictionaries = Record<Locale, Dict>;

export const dictionaries: Dictionaries = {
  pt: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Sobre mim',
    'nav.projects': 'Projetos',
    'nav.experiences': 'Experiências',
    'nav.contact': 'Contato',

    // A11y
    'aria.open_menu': 'Abrir menu',
    'aria.switch_to_pt': 'Mudar para Português',
    'aria.switch_to_en': 'Switch to English',

    // Footer
    'footer.quote': 'Citação',
    'footer.navigation': 'Navegação',
    'footer.connect': 'Conecte-se',
    'footer.about': 'Sobre',
    'footer.projects': 'Projetos',
    'footer.experiences': 'Experiências',
    'footer.contact': 'Contato',
    'footer.rights': 'Todos os direitos reservados.',

    // About section
    'about.title': 'Sobre mim',
    'about.who': 'Quem sou eu',
    'about.skills': 'Habilidades',

    // Projects & Experience
    'projects.title': 'Projetos',
    'experiences.title': 'Experiências',

    // Contact
    'contact.title': 'Contato',
    'contact.open_to_work': 'Aberto para trabalho e colaborações',
    'contact.email_label': 'EMAIL',
    'contact.location_label': 'LOCALIZAÇÃO',

    // Form
    'form.name': 'Nome',
    'form.email': 'Email',
    'form.message': 'Mensagem',
    'form.placeholder.name': 'Insira seu nome',
    'form.placeholder.email': 'Insira seu email',
    'form.placeholder.message': 'Digite sua mensagem',
    'form.submit': 'Enviar',

    // Misc
    'profile.photo': 'Foto do Perfil'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experiences': 'Experience',
    'nav.contact': 'Contact',

    // A11y
    'aria.open_menu': 'Open menu',
    'aria.switch_to_pt': 'Mudar para Português',
    'aria.switch_to_en': 'Switch to English',

    // Footer
    'footer.quote': 'Quote',
    'footer.navigation': 'Navigation',
    'footer.connect': 'Connect',
    'footer.about': 'About',
    'footer.projects': 'Projects',
    'footer.experiences': 'Experience',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    // About section
    'about.title': 'About me',
    'about.who': 'Who am I',
    'about.skills': 'Skills',

    // Projects & Experience
    'projects.title': 'Projects',
    'experiences.title': 'Experience',

    // Contact
    'contact.title': 'Contact',
    'contact.open_to_work': 'Open to work & Collabs',
    'contact.email_label': 'EMAIL',
    'contact.location_label': 'LOCATION',

    // Form
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.placeholder.name': 'Please enter your name',
    'form.placeholder.email': 'Please enter your email',
    'form.placeholder.message': 'Enter your message',
    'form.submit': 'Submit',

    // Misc
    'profile.photo': 'Profile Photo'
  }
};

export function translate(key: string, locale?: Locale): string {
  const l = locale ?? getLocale();
  return dictionaries[l]?.[key] ?? key;
}
