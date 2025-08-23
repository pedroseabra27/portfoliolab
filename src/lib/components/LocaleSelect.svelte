<script lang="ts">
	import { getLocale, switchLocale, type Locale } from '$lib/i18n';
	import { handleClickOutside } from '$lib/utils/clsx';
	import { fade } from 'svelte/transition';

	const localeNames: Record<Locale, { name: string; flagClass: string }> = {
		en: { name: 'English', flagClass: 'fi-us' },
		pt: { name: 'Português', flagClass: 'fi-br' }
	};

	let currentLanguage = $state(getLocale());
	let isOpen = $state(false);

	function handleLanguageChange(lang: Locale) {
		currentLanguage = lang;
		switchLocale(currentLanguage);
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<div
	class="relative"
	use:handleClickOutside={() => {
		isOpen = false;
	}}
>
	<button
		onclick={toggleDropdown}
		class="flex items-center gap-2 rounded-full transition-colors hover:text-primary"
		aria-haspopup="true"
		aria-expanded={isOpen}
	>
		<span class="fi {localeNames[currentLanguage].flagClass}"></span>
		<span class="font-medium">{localeNames[currentLanguage].name}</span>
		<svg
			class="h-4 w-4 transition-transform duration-200"
			class:rotate-180={isOpen}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="6 9 12 15 18 9"></polyline>
		</svg>
	</button>

	{#if isOpen}
		<div
			transition:fade={{ duration: 150 }}
			class="absolute right-0 z-10 mt-2 w-[180px] rounded-md border border-base-200 bg-base-300 p-2 shadow-lg"
		>
			{#each ['pt', 'en'] as language}
				<button
					class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left transition-colors hover:bg-base-content hover:text-primary {currentLanguage ===
					language
						? 'bg-base-200'
						: ''}"
					onclick={() => handleLanguageChange(language as Locale)}
				>
					<span class="fi {localeNames[language as Locale].flagClass}"></span>
					<span class="font-medium">{localeNames[language as Locale].name}</span>
					{#if currentLanguage === language}
						<svg
							class="ml-auto h-4 w-4 text-primary"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
