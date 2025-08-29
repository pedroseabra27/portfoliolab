// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '$env/dynamic/private' {
	export const GMAIL_USER: string;
	export const GMAIL_PASSWORD: string;
	export const CONTACT_EMAIL: string;
}

export {};
