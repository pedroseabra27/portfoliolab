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
		'brand.name': 'Pedro Seabra',
		'hero.intro':
			'Sou estudante de Engenharia de Software na PUC Minas. Apaixonado por tecnologia e desenvolvimento, busco constantemente aprender novas ferramentas e criar soluções inovadoras.',

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
		'footer.quote_text': 'Para aprender a ter sucesso, é preciso primeiro aprender a fracassar.',
		'footer.quote_author': '- Michael Jordan',
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
			'Olá! Meu nome é Pedro Seabra, tenho 21 anos e sou estudante de Engenharia de Software na PUC Minas. Tenho paixão por tecnologia e jogos desde pequeno e estou sempre buscando aprender e vivenciar novas experiências. Focado em criar soluções modernas, acessíveis e eficientes.',
		'about.skills': 'Habilidades',

		// Projects & Experience
		'projects.title': 'Projetos',
		'experiences.title': 'Experiências',
		'experiences.1.role': 'Estagiário em Desenvolvimento Back-end',
		'experiences.1.company': 'Clínica do Sono',
		'experiences.1.period': '2025 - Presente',
		'experiences.1.desc':
			'Desenvolvimento e testes utilizando Raspberry Pi 5 e ADS1256 para coleta de dados em exames de polissonografia. Experiência prática com hardware embarcado e processamento de sinais biomédicos.',

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
		'projects.4.title': 'Web App Clínica do Sono',
		'projects.4.desc': 'Projeto básico para técnicas de polissonografia',
		'projects.4.detailed_desc':
			'Este projeto foi desenvolvido para ajudar as técnicas de polissonografia da empresa onde faço estágio, tornando o processo mais simples. Embora ainda esteja em desenvolvimento, já oferece funcionalidades essenciais para o trabalho diário.',
		'projects.4.feature1': 'Interface simplificada para técnicas',
		'projects.4.feature2': 'Gestão de dados de polissonografia',
		'projects.4.feature3': 'Integração com sistemas da clínica',

		'projects.5.title': 'Serralheria Amazonas',
		'projects.5.desc': 'Site de gestão para serralherias',
		'projects.5.detailed_desc': 'Sistema de gestão completo para serralherias, incluindo controle de estoque, clientes e pedidos.',
		'projects.5.feature1': 'Gestão de estoque',
		'projects.5.feature2': 'Cadastro de clientes',
		'projects.5.feature3': 'Controle de pedidos',

		'contact.title': 'Contato',
		'contact.open_to_work': 'Aberto para trabalho e colaborações',
		'contact.email_label': 'EMAIL',
		'contact.location_label': 'LOCALIZAÇÃO',
		'contact.location_value': 'Belo Horizonte, MG',
		'form.name': 'Nome',
		'form.email': 'Email',
		'form.message': 'Mensagem',
		'form.placeholder.name': 'Insira seu nome',
		'form.placeholder.email': 'Insira seu email',
		'form.placeholder.message': 'Digite sua mensagem',
		'form.submit': 'Enviar',

		'projects.page.title': 'Projetos - Portfólio',
		'projects.page.description': 'Explore meu portfólio de projetos de desenvolvimento web',

		// Main heading and description
		'projects.heading.my': 'Meus',
		'projects.heading.projects': 'Projetos',
		'projects.description2':
			'Explore meu portfólio de projetos de desenvolvimento web, apresentando tecnologias modernas e soluções inovadoras.',

		// Filter buttons
		'projects.filter.all': 'Todos',

		// Empty state
		'projects.empty.title': 'Nenhum projeto encontrado',
		'projects.empty.description': 'Tente ajustar seus filtros ou volte mais tarde.',

		// Accessibility
		'projects.image.alt': 'Imagem do projeto'
	},
	en: {
		// Brand / Hero
		'brand.name': 'Pedro Seabra',
		'hero.intro':
			'I am a Software Engineering student at PUC Minas. Passionate about technology and development, I constantly seek to learn new tools and create innovative solutions.',

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
		'footer.quote_text': 'To learn to succeed, you must first learn to fail.',
		'footer.quote_author': '- Michael Jordan',
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
			'Hi! My name is Pedro Seabra, I\'m 21 years old and I\'m a Software Engineering student at PUC Minas. I have a passion for technology and games since I was little and I\'m always looking to learn and experience new things. Focused on creating modern, accessible, and efficient solutions.',
		'about.skills': 'Skills',

		// Projects & Experience
		'projects.title': 'Projects',
		'experiences.title': 'Experience',
		'experiences.1.role': 'Back-end Development Intern',
		'experiences.1.company': 'Sleep Clinic',
		'experiences.1.period': '2024 - Present',
		'experiences.1.desc':
			'Development and testing using Raspberry Pi 5 and ADS1256 for data collection in polysomnography exams. Hands-on experience with embedded hardware and biomedical signal processing.',

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
		'projects.4.title': 'Sleep Clinic Web App',
		'projects.4.desc': 'Basic project for polysomnography techniques',
		'projects.4.detailed_desc':
			'This project was developed to help polysomnography technicians at the company where I intern, making the process simpler. Although still in development, it already offers essential functionalities for daily work.',
		'projects.4.feature1': 'Simplified interface for technicians',
		'projects.4.feature2': 'Polysomnography data management',
		'projects.4.feature3': 'Integration with clinic systems',

		'projects.5.title': 'Serralheria Amazonas',
		'projects.5.desc': 'Management site for locksmith shops',
		'projects.5.detailed_desc': 'Complete management system for locksmith shops, including inventory control, clients, and orders.',
		'projects.5.feature1': 'Inventory management',
		'projects.5.feature2': 'Client registration',
		'projects.5.feature3': 'Order control',

		// Contact
		'contact.title': 'Contact',
		'contact.open_to_work': 'Open to work & Collabs',
		'contact.email_label': 'EMAIL',
		'contact.location_label': 'LOCATION',
		'contact.location_value': 'Belo Horizonte, MG - Brazil',

		// Form
		'form.name': 'Name',
		'form.email': 'Email',
		'form.message': 'Message',
		'form.placeholder.name': 'Please enter your name',
		'form.placeholder.email': 'Please enter your email',
		'form.placeholder.message': 'Enter your message',
		'form.submit': 'Submit',
		'projects.page.title': 'Projects - Portfolio',
		'projects.page.description': 'Explore my portfolio of web development projects',

		// Main heading and description
		'projects.heading.my': 'My',
		'projects.heading.projects': 'Projects',
		'projects.description2':
			'Explore my portfolio of web development projects, showcasing modern technologies and innovative solutions.',

		// Filter buttons
		'projects.filter.all': 'All',

		// Empty state
		'projects.empty.title': 'No projects found',
		'projects.empty.description': 'Try adjusting your filters or check back later.',

		// Accessibility
		'projects.image.alt': 'Project image'
	}
};

export function translate(key: string, locale?: Locale): string {
	const l = locale ?? getLocale();
	return dictionaries[l]?.[key] ?? key;
}
