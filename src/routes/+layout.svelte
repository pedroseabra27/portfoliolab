<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();

	let isMobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#if isMobileMenuOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<header class="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
	<div class="mx-auto max-w-6xl px-4">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-xl font-bold text-white">
				SeuNome
			</a>
			
			<nav class="hidden md:flex gap-8 text-sm items-center">
				<a href="/" class="text-gray-300 hover:text-lime-500 transition-colors">Home</a>
				<a href="/#sobre" class="text-gray-300 hover:text-lime-500 transition-colors">Sobre mim</a>
				<a href="/#projetos" class="text-gray-300 hover:text-lime-500 transition-colors">Projetos</a>
				<a href="/#experiencias" class="text-gray-300 hover:text-lime-500 transition-colors">Experiências</a>
				<a href="/#contato" class="text-gray-300 hover:text-lime-500 transition-colors">Contato</a>
			</nav>

			<button
				onclick={toggleMobileMenu}
				class="md:hidden text-white focus:outline-none"
				aria-label="Abrir menu"
			>
				{#if isMobileMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
</header>

{#if isMobileMenuOpen}
	<div class="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center">
		<nav class="flex flex-col gap-8 text-center">
			<a onclick={toggleMobileMenu} href="/" class="text-2xl text-gray-300 hover:text-lime-500 transition-colors">Home</a>
			<a onclick={toggleMobileMenu} href="/#sobre" class="text-2xl text-gray-300 hover:text-lime-500 transition-colors">Sobre mim</a>
			<a onclick={toggleMobileMenu} href="/#projetos" class="text-2xl text-gray-300 hover:text-lime-500 transition-colors">Projetos</a>
			<a onclick={toggleMobileMenu} href="/#experiencias" class="text-2xl text-gray-300 hover:text-lime-500 transition-colors">Experiências</a>
			<a onclick={toggleMobileMenu} href="/#contato" class="text-2xl text-gray-300 hover:text-lime-500 transition-colors">Contato</a>
		</nav>
	</div>
{/if}

<main>
	{@render children?.()}
</main>