<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800">
	<div class="mx-auto max-w-6xl px-4">
		<div class="flex h-16 items-center justify-between">
			<nav class="flex gap-8 text-sm">
				<a href="/" class="text-white hover:text-lime-500 transition-colors">Home</a>
				<a href="/#sobre" class="text-white hover:text-lime-500 transition-colors">Sobre mim</a>
				<a href="/#projetos" class="text-white hover:text-lime-500 transition-colors">Projetos</a>
				<a href="/#experiencias" class="text-white hover:text-lime-500 transition-colors">Experiências</a>
				<a href="/#contato" class="text-white hover:text-lime-500 transition-colors">Contato</a>
			</nav>
			<div class="flex gap-4">
				<span class="social-icon text-lg font-bold cursor-pointer">in</span>
				<span class="social-icon text-lg cursor-pointer">Bē</span>
				<span class="social-icon cursor-pointer">🐦</span>
			</div>
		</div>
	</div>
</header>

<main>
	{@render children?.()}
</main>
