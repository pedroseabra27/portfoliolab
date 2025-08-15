<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let scrollY = $state(0);
	let innerHeight = $state(0);
	let innerWidth = $state(0);

	function updateIntersections() {
		if (document.documentElement.scrollHeight > innerHeight) {
			scrollProgress = scrollY / (document.documentElement.scrollHeight - innerHeight);
		}
	}

	onMount(() => {
		window.addEventListener('scroll', () => {
			scrollY = window.scrollY;
			updateIntersections();
		});

		window.addEventListener('resize', () => {
			innerHeight = window.innerHeight;
			innerWidth = window.innerWidth;
			updateIntersections();
		});

		innerHeight = window.innerHeight;
		innerWidth = window.innerWidth;
		updateIntersections();

		return () => {
			window.removeEventListener('scroll', updateIntersections);
			window.removeEventListener('resize', updateIntersections);
		};
	});

	let scrollProgress = $state(0);

	$effect(() => {
		updateIntersections();
	});
</script>

{#if scrollProgress > 0.01}
	<div transition:fly class="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
		<div class="h-full bg-primary" style="width: {scrollProgress * 100}%"></div>
	</div>
{/if}

<section class="flex min-h-screen items-center bg-base-300">
	<div class="mx-auto w-full max-w-6xl px-4">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="space-y-8 text-center lg:text-left">
				<h1 class="text-5xl leading-tight font-bold text-base-content lg:text-7xl">Seu Nome Aqui</h1>
				<p class="mx-auto max-w-2xl text-xl leading-relaxed text-base-content lg:mx-0">
					Texto introdutório: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<button class="btn-primary btn"> Vamos começar </button>
			</div>

			<div class="flex justify-center lg:justify-end">
				<div
					class="flex h-80 w-80 items-center justify-center overflow-hidden rounded-full bg-base-100"
				>
					<div
						class="flex h-full w-full items-center justify-center  text-lg opacity-50"
					>
						Foto do Perfil
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="sobre" class="bg-base-300 py-20">
	<div class="mx-auto max-w-6xl px-4">
		<div class="space-y-8">
			<h2 class="text-center text-3xl font-bold text-base-content lg:text-left">Sobre mim</h2>
			<div class="grid gap-12 lg:grid-cols-2">
				<div class="space-y-6">
					<p class="text-lg leading-relaxed text-base-content"></p>
					<p class="text-lg leading-relaxed text-base-content"></p>
				</div>
				<div class="space-y-6">
					<h3 class="text-xl font-semibold text-base-content">Habilidades</h3>
					<div class="flex flex-wrap gap-3">
						<span class="rounded-lg bg-gray-800 px-4 py-2 text-sm text-base-content">JavaScript</span>
						<span class="rounded-lg bg-gray-800 px-4 py-2 text-sm text-base-content">React</span>
						<span class="rounded-lg bg-gray-800 px-4 py-2 text-sm text-base-content">Node.js</span>
						<span class="rounded-lg bg-gray-800 px-4 py-2 text-sm text-base-content">TypeScript</span>
						<span class="rounded-lg bg-gray-800 px-4 py-2 text-sm text-base-content">Svelte</span>
						<span class="rounded-lg bg-gray-800 px-4 py-2 text-sm text-base-content">Tailwind</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="projetos" class="bg-base-300 py-20">
	<div class="mx-auto max-w-6xl px-4">
		<div class="space-y-12">
			<h2 class="text-center text-3xl font-bold text-base-content lg:text-left">Projetos</h2>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div class="space-y-4 rounded-lg bg-base-200 p-6">
					<div class="h-48 rounded-lg bg-base-100"></div>
					<h3 class="text-xl font-semibold text-base-content">Projeto 1</h3>
					<p class="text-base-content">
						Descrição do projeto, tecnologias utilizadas e objetivos alcançados.
					</p>
					<div class="flex gap-2">
						<span class="rounded bg-primary/20 px-3 py-1 text-sm text-primary">React</span>
						<span class="rounded bg-primary/20 px-3 py-1 text-sm text-primary">Node.js</span>
					</div>
				</div>
				<div class="space-y-4 rounded-lg bg-base-200 p-6">
					<div class="h-48 rounded-lg bg-base-100"></div>
					<h3 class="text-xl font-semibold text-base-content">Projeto 2</h3>
					<p class="text-base-content">
						Descrição do projeto, tecnologias utilizadas e objetivos alcançados.
					</p>
					<div class="flex gap-2">
						<span class="rounded bg-primary/20 px-3 py-1 text-sm text-primary">Svelte</span>
						<span class="rounded bg-primary/20 px-3 py-1 text-sm text-primary">TypeScript</span>
					</div>
				</div>
				<div class="space-y-4 rounded-lg bg-base-200 p-6">
					<div class="h-48 rounded-lg bg-base-100"></div>
					<h3 class="text-xl font-semibold text-base-content">Projeto 3</h3>
					<p class="text-base-content">
						Descrição do projeto, tecnologias utilizadas e objetivos alcançados.
					</p>
					<div class="flex gap-2">
						<span class="rounded bg-primary/20 px-3 py-1 text-sm text-primary">Vue.js</span>
						<span class="rounded bg-primary/20 px-3 py-1 text-sm text-primary">Firebase</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="experiencias" class="bg-base-300 py-20">
	<div class="mx-auto max-w-6xl px-4">
		<div class="space-y-12">
			<h2 class="text-center text-3xl font-bold text-base-content lg:text-left">Experiências</h2>
			<div class="space-y-8">
				<div class="space-y-4 border-l-4 border-primary pl-8">
					<div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
						<div>
							<h3 class="text-xl font-semibold text-base-content">Desenvolvedor Front-end</h3>
							<p class="font-medium text-primary">Empresa XYZ</p>
						</div>
						<span class="flex-shrink-0 text-sm text-base-content">2022 - Presente</span>
					</div>
					<p class="text-base-content">
						Desenvolvimento de aplicações web responsivas, otimização de performance e trabalho em
						equipe com metodologias ágeis.
					</p>
				</div>
				<div class="space-y-4 border-l-4 border-primary pl-8">
					<div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
						<div>
							<h3 class="text-xl font-semibold text-base-content">Desenvolvedor Full-stack</h3>
							<p class="font-medium text-primary">Startup ABC</p>
						</div>
						<span class="flex-shrink-0 text-sm text-base-content">2020 - 2022</span>
					</div>
					<p class="text-base-content">
						Desenvolvimento completo de aplicações web, desde o front-end até o back-end, incluindo
						banco de dados e APIs.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="contato" class="bg-base-300 py-20 text-base-content">
	<div class="mx-auto max-w-6xl px-4">
		<div class="mb-12 text-center">
			<h2 class="text-4xl font-bold">Contact</h2>
		</div>

		<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
			<div class="flex flex-col gap-4 lg:mt-7">
				<div class="flex items-center gap-4 rounded-md bg-base-200 p-4">
					<div class="h-3 w-3 animate-pulse rounded-sm bg-primary"></div>
					<span class="font-medium text-base-content">Open to work & Collabs</span>
				</div>

				<div class="flex items-center gap-4 rounded-md bg-base-200 p-4">
					<div class="text-base-content">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-6 w-6"
						>
							<path
								d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
							/>
							<path
								d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
							/>
						</svg>
					</div>
					<div>
						<p class="text-xs font-semibold tracking-wider text-base-content">EMAIL</p>
						<p class="text-base-content">meuemail@gmail.com</p>
					</div>
				</div>

				<div class="flex items-center gap-4 rounded-md bg-base-200 p-4">
					<div class="flex h-6 w-6 flex-shrink-0 items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-full w-full text-base-content"
						>
							<path
								d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
							/>
						</svg>
					</div>
					<div>
						<p class="text-xs font-semibold tracking-wider text-base-content">LOCATION</p>
						<p class="text-base-content">Minha localização</p>
					</div>
				</div>

				<div class="mt-2 flex items-center gap-4">
					<a
						href="https://github.com"
						aria-label="GitHub"
						class="rounded-md bg-base-200 p-3 text-base-content transition-colors hover:bg-base-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							/>
						</svg>
					</a>
					<a
						href="https://linkedin.com"
						aria-label="LinkedIn"
						class="rounded-md bg-base-200 p-3 text-base-content transition-colors hover:bg-base-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
							/>
						</svg>
					</a>
					<a
						href="https://instagram.com"
						aria-label="Instagram"
						class="rounded-md bg-base-200 p-3 text-base-content transition-colors hover:bg-base-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.486.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.231 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.884a1.161 1.161 0 1 0 0 2.322 1.161 1.161 0 0 0 0-2.322zM8 4.202a3.79 3.79 0 1 0 0 7.58 3.79 3.79 0 0 0 0-7.58zm0 1.441a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7z"
							/>
						</svg>
					</a>
					<a
						href="https://x.com"
						aria-label="X (Twitter)"
						class="rounded-md bg-base-200 p-3 text-base-content transition-colors hover:bg-base-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							fill="currentColor"
							viewBox="0 0 16 16"
							><path
								d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
							/></svg
						>
					</a>
				</div>
			</div>

			<form class="flex flex-col gap-4">
				<div>
					<label for="name" class="mb-2 block text-sm font-medium text-base-content">Name</label>
					<input
						type="text"
						id="name"
						class="input w-full"
						placeholder="Please enter your name"
					/>
				</div>
				<div>
					<label for="email" class="mb-2 block text-sm font-medium text-base-content">Email</label>
					<input
						type="email"
						id="email"
						class="input w-full"
						placeholder="Please enter your email"
					/>
				</div>
				<div>
					<label for="message" class="mb-2 block text-sm font-medium text-base-content">Message</label>
					<textarea
						id="message"
						rows="5"
						class="textarea w-full"
						placeholder="Enter your message"
					></textarea>
				</div>
				<button
					type="submit"
					class="btn btn-primary">
					Submit 
				</button>
			</form>
		</div>
	</div>
</section>

<footer class="border-t border-base-100 bg-base-300 py-12 text-base-content">
	<div class="mx-auto max-w-6xl px-4">
		<div class="mb-8 grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
			<div class="space-y-4">
				<h3 class="text-lg font-bold text-base-content">Citação</h3>
				<blockquote class="italic">
					<p>"A melhor forma de prever o futuro é inventá-lo."</p>
					<cite class="mt-2 block text-sm not-italic">- Alan Kay</cite>
				</blockquote>
			</div>

			<div class="space-y-4">
				<h3 class="text-lg font-bold text-base-content">Navegação</h3>
				<ul class="space-y-2">
					<li><a href="#sobre" class="transition-colors hover:text-primary">Sobre</a></li>
					<li><a href="#projetos" class="transition-colors hover:text-primary">Projetos</a></li>
					<li>
						<a href="#experiencias" class="transition-colors hover:text-primary">Experiências</a>
					</li>
					<li><a href="#contato" class="transition-colors hover:text-primary">Contato</a></li>
				</ul>
			</div>

			<div class="space-y-4">
				<h3 class="text-lg font-bold text-base-content">Conecte-se</h3>
				<div class="flex items-center justify-center gap-4 md:justify-start">
					<a
						href="https://github.com"
						aria-label="GitHub"
						class="rounded-full bg-base-200 p-2 text-base-content transition-colors hover:bg-base-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							/>
						</svg>
					</a>
					<a
						href="https://linkedin.com"
						aria-label="LinkedIn"
						class="rounded-full bg-base-200 p-2 text-base-content transition-colors hover:bg-base-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
							/>
						</svg>
					</a>
					<a
						href="https://instagram.com"
						aria-label="Instagram"
						class="rounded-full bg-base-200 p-2 text-base-content transition-colors hover:bg-base-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.486.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.231 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.884a1.161 1.161 0 1 0 0 2.322 1.161 1.161 0 0 0 0-2.322zM8 4.202a3.79 3.79 0 1 0 0 7.58 3.79 3.79 0 0 0 0-7.58zm0 1.441a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7z"
							/>
						</svg>
					</a>
					<a
						href="https://x.com"
						aria-label="X (Twitter)"
						class="rounded-full bg-base-200 p-2 text-base-content transition-colors hover:bg-base-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 16 16"
							><path
								d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
							/></svg
						>
					</a>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-between space-y-4 border-t border-base-100 pt-8 text-sm md:flex-row md:space-y-0"
		>
			<p>&copy; {new Date().getFullYear()} Meu Nome Aqui. Todos os direitos reservados.</p>

			<div class="flex items-center gap-2">
				<p>Feito com</p>
				<a
					href="https://svelte.dev/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 transition-colors hover:text-primary"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 53 60"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="text-[#FF3E00]"
						><path
							d="M51.32,15.08,30.41,2.46a5.3,5.3,0,0,0-5.32,0L4.19,15.08a5.3,5.3,0,0,0-2.66,4.6V39.52a5.3,5.3,0,0,0,2.66,4.6L25.09,57.54a5.3,5.3,0,0,0,5.32,0L51.32,44.12a5.3,5.3,0,0,0,2.68-4.6V19.68A5.3,5.3,0,0,0,51.32,15.08ZM28.27,5.09,47.8,16.82,29.83,27.42,10.29,15.71ZM5.56,18.3,24.1,29.33,23,29.93,5.74,20.15ZM2.88,39.12V21.28L21.3,31.85v18L2.88,39.12ZM27.75,54.91,9.32,44.29V26.51L27.75,37Zm.58-19.3L48.17,24.29v17L29.74,51.46V33.68ZM50.1,19.2,31.7,29.5,31,29.11,49.11,18.4Z"
							fill="currentColor"
						/></svg
					>
					Svelte
				</a>
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 transition-colors hover:text-primary"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 256 154"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c17.067 4.267 27.733 17.067 42.667 36.267C162.667 85.333 174.933 96 192 96c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-17.067-4.267-27.733-17.067-42.667-36.267C157.333 10.667 145.067 0 128 0zM64 64C29.867 64 8.533 81.067 0 115.2c12.8-17.067 27.733-23.467 44.8-19.2 17.067 4.266 27.733 17.066 42.667 36.266C98.667 149.333 110.933 160 128 160c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-17.067-4.267-27.733-17.067-42.667-36.267C93.333 74.667 81.067 64 64 64z"
							fill="#38BDF8"
						/></svg
					>
					Tailwind CSS
				</a>
			</div>
		</div>
	</div>
</footer>
