export type Locale = 'pt' | 'en';

const browser = typeof window !== 'undefined';

export function getInitialLocale(): Locale {
	if (!browser) return 'pt';
	const saved = (localStorage.getItem('locale') as Locale | null) ?? null;
	if (saved) return saved;
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
		// Brand / Hero
		'brand.name': 'Meu Nome Aqui',
		'hero.intro':
			'Texto introdutório: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

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
		'footer.quote_text': 'A melhor forma de prever o futuro é inventá-lo.',
		'footer.quote_author': '- Alan Kay',
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
		'about.who_text':
			'Sou um desenvolvedor focado em criar experiências web rápidas, acessíveis e modernas. Apaixonado por aprender e compartilhar conhecimento.',
		'about.skills': 'Habilidades',

		// Projects & Experience
		'projects.title': 'Projetos',
		'projects.1.title': 'Projeto 1',
		'projects.1.desc': 'Descrição do projeto, tecnologias utilizadas e objetivos alcançados.',
		'projects.2.title': 'Projeto 2',
		'projects.2.desc': 'Descrição do projeto, tecnologias utilizadas e objetivos alcançados.',
		'projects.3.title': 'Projeto 3',
		'projects.3.desc': 'Descrição do projeto, tecnologias utilizadas e objetivos alcançados.',
		'experiences.title': 'Experiências',
		'experiences.1.role': 'Desenvolvedor Front-end',
		'experiences.1.company': 'Empresa XYZ',
		'experiences.1.period': '2022 - Presente',
		'experiences.1.desc':
			'Desenvolvimento de aplicações web responsivas, otimização de performance e trabalho em equipe com metodologias ágeis.',
		'experiences.2.role': 'Desenvolvedor Full-stack',
		'experiences.2.company': 'Startup ABC',
		'experiences.2.period': '2020 - 2022',
		'experiences.2.desc':
			'Desenvolvimento completo de aplicações web, desde o front-end até o back-end, incluindo banco de dados e APIs.',

		// Project detail page translations
		'projects.not_found': 'Projeto não encontrado',
		'projects.back_to_projects': 'Voltar aos Projetos',
		'projects.view_live': 'Ver Projeto',
		'projects.view_code': 'Ver Código',
		'projects.technologies': 'Tecnologias',
		'projects.description': 'Descrição',
		'projects.features': 'Funcionalidades',
		'projects.ongoing': 'Em andamento',
		'projects.status.completed': 'Concluído',
		'projects.status.in-progress': 'Em Progresso',
		'projects.status.planned': 'Planejado',

		'projects.see_more': 'Ver mais',

		// Detailed descriptions and features
		'projects.1.detailed_desc':
			'Uma aplicação web moderna construída com React e Node.js, focada em performance e experiência do usuário. O projeto implementa as melhores práticas de desenvolvimento e arquitetura escalável.',
		'projects.1.feature1': 'Interface responsiva e intuitiva',
		'projects.1.feature2': 'API RESTful robusta',
		'projects.1.feature3': 'Autenticação e autorização seguras',

		'projects.2.detailed_desc':
			'Aplicação desenvolvida com Svelte e TypeScript, demonstrando a eficiência e simplicidade do framework. Foco em componentes reutilizáveis e tipagem forte.',
		'projects.2.feature1': 'Componentes Svelte reutilizáveis',
		'projects.2.feature2': 'Tipagem completa com TypeScript',
		'projects.2.feature3': 'Bundle otimizado e performático',

		'projects.3.detailed_desc':
			'Aplicação mobile-first construída com Vue.js e Firebase, oferecendo sincronização em tempo real e experiência offline. Integração completa com serviços de nuvem.',
		'projects.3.feature1': 'Sincronização em tempo real',
		'projects.3.feature2': 'Funcionalidade offline',
		'projects.3.feature3': 'Integração com Firebase',

		'contact.title': 'Contato',
		'contact.open_to_work': 'Aberto para trabalho e colaborações',
		'contact.email_label': 'EMAIL',
		'contact.location_label': 'LOCALIZAÇÃO',
		'contact.location_value': 'Minha localização',
		'form.name': 'Nome',
		'form.email': 'Email',
		'form.message': 'Mensagem',
		'form.placeholder.name': 'Insira seu nome',
		'form.placeholder.email': 'Insira seu email',
		'form.placeholder.message': 'Digite sua mensagem',
		'form.submit': 'Enviar'
	},
	en: {
		// Brand / Hero
		'brand.name': 'My Name Here',
		'hero.intro':
			'Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// Navigation
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.projects': 'Projects',
		'nav.experiences': 'Experience',
		'nav.contact': 'Contact',

		// A11y
		'aria.open_menu': 'Open menu',
		'aria.switch_to_pt': 'Switch to Portuguese',
		'aria.switch_to_en': 'Switch to English',

		// Footer
		'footer.quote': 'Quote',
		'footer.quote_text': 'The best way to predict the future is to invent it.',
		'footer.quote_author': '- Alan Kay',
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
		'about.who_text':
			'I am a developer focused on building fast, accessible, and modern web experiences. Passionate about learning and sharing knowledge.',
		'about.skills': 'Skills',

		// Projects & Experience
		'projects.title': 'Projects',
		'projects.1.title': 'Project 1',
		'projects.1.desc': 'Project description, tech used and goals achieved.',
		'projects.2.title': 'Project 2',
		'projects.2.desc': 'Project description, tech used and goals achieved.',
		'projects.3.title': 'Project 3',
		'projects.3.desc': 'Project description, tech used and goals achieved.',
		'experiences.title': 'Experience',
		'experiences.1.role': 'Front-end Developer',
		'experiences.1.company': 'Company XYZ',
		'experiences.1.period': '2022 - Present',
		'experiences.1.desc':
			'Responsive web development, performance optimization, and teamwork using agile methodologies.',
		'experiences.2.role': 'Full-stack Developer',
		'experiences.2.company': 'Startup ABC',
		'experiences.2.period': '2020 - 2022',
		'experiences.2.desc':
			'End-to-end web development from front-end to back-end, including databases and APIs.',

		// Project detail page translations
		'projects.not_found': 'Project not found',
		'projects.back_to_projects': 'Back to Projects',
		'projects.view_live': 'View Live',
		'projects.view_code': 'View Code',
		'projects.technologies': 'Technologies',
		'projects.description': 'Description',
		'projects.features': 'Features',
		'projects.ongoing': 'Ongoing',
		'projects.status.completed': 'Completed',
		'projects.status.in-progress': 'In Progress',
		'projects.status.planned': 'Planned',

		'projects.see_more': 'See more',

		// Detailed descriptions and features
		'projects.1.detailed_desc':
			'A modern web application built with React and Node.js, focused on performance and user experience. The project implements development best practices and scalable architecture.',
		'projects.1.feature1': 'Responsive and intuitive interface',
		'projects.1.feature2': 'Robust RESTful API',
		'projects.1.feature3': 'Secure authentication and authorization',

		'projects.2.detailed_desc':
			'Application developed with Svelte and TypeScript, demonstrating the efficiency and simplicity of the framework. Focus on reusable components and strong typing.',
		'projects.2.feature1': 'Reusable Svelte components',
		'projects.2.feature2': 'Complete TypeScript typing',
		'projects.2.feature3': 'Optimized and performant bundle',

		'projects.3.detailed_desc':
			'Mobile-first application built with Vue.js and Firebase, offering real-time synchronization and offline experience. Complete integration with cloud services.',
		'projects.3.feature1': 'Real-time synchronization',
		'projects.3.feature2': 'Offline functionality',
		'projects.3.feature3': 'Firebase integration',
		// Contact
		'contact.title': 'Contact',
		'contact.open_to_work': 'Open to work & Collabs',
		'contact.email_label': 'EMAIL',
		'contact.location_label': 'LOCATION',
		'contact.location_value': 'My location',

		// Form
		'form.name': 'Name',
		'form.email': 'Email',
		'form.message': 'Message',
		'form.placeholder.name': 'Please enter your name',
		'form.placeholder.email': 'Please enter your email',
		'form.placeholder.message': 'Enter your message',
		'form.submit': 'Submit'
	}
};

export function translate(key: string, locale?: Locale): string {
	const l = locale ?? getLocale();
	return dictionaries[l]?.[key] ?? key;
}
