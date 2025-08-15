<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { spring, tweened } from 'svelte/motion';

	const mouseCoords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.5 });
	const scale = tweened(1, { duration: 500, easing: cubicInOut });

	const onMouseMove = (event: MouseEvent) => {
		$mouseCoords = { x: event.x, y: event.y };
	};

	const onMouseOver = (event: MouseEvent) => {
		if (event.target instanceof HTMLButtonElement) {
			$scale = 2;
		} else if (event.target instanceof HTMLParagraphElement) {
			$scale = 1.5;
		} else if (event.target instanceof HTMLLinkElement) {
			$scale = 2;
		} else if (event.target instanceof HTMLImageElement) {
			$scale = 2;
		} else {
			$scale = 1;
		}
	};

	const onMouseOut = () => {
		$scale = 1;
	};
</script>

<svelte:window on:mousemove={onMouseMove} on:mouseover={onMouseOver} on:mouseout={onMouseOut} />

<div class="container-11">
	<div
		class="cursor"
		style:--x={`${$mouseCoords.x}px`}
		style:--y={`${$mouseCoords.y}px`}
		style:--scale={$scale}
	></div>
</div>

<style>
	.container-11 {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 9999;
	}

	.cursor {
		position: absolute;
		top: 0;
		left: 0;

		width: 35px;
		height: 35px;
		border-radius: 50%;
		border: 1.2px solid gray;

		transform: translate(-50%, -50%) translate(var(--x, 0px), var(--y, 0px)) scale(var(--scale, 1));
	}
</style>
