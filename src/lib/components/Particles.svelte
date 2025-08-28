<script lang="ts">
	import { onMount } from 'svelte';

	export let className: string = '';
	export let quantity: number = 100;
	export let staticity: number = 40;
	export let ease: number = 50;
	export let size: number = 0.5;
	export let color: string = '';
	export let vx: number = 0;
	export let vy: number = 0;

	let canvasRef: HTMLCanvasElement;
	let canvasContainerRef: HTMLDivElement;
	let context: CanvasRenderingContext2D | null = null;
	let circles: any[] = [];
	let mouse = { x: 0, y: 0 };
	let canvasSize = { w: 0, h: 0 };
	const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

	function oklchToHex(L, C, h) {
		const hr = (h * Math.PI) / 180;
		const a = C * Math.cos(hr);
		const b = C * Math.sin(hr);

		const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
		const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
		const s_ = L - 0.0894841775 * a - 1.291485548 * b;

		const L_ = l_ * l_ * l_;
		const M_ = m_ * m_ * m_;
		const S_ = s_ * s_ * s_;

		let R = 4.0767416621 * L_ - 3.3077115913 * M_ + 0.2309699292 * S_;
		let G = -1.2684380046 * L_ + 2.6097574011 * M_ - 0.3413193965 * S_;
		let B = -0.0041960863 * L_ - 0.7034186147 * M_ + 1.707614701 * S_;

		function linToSrgb(u) {
			if (u <= 0.0031308) return 12.92 * u;
			return 1.055 * Math.pow(u, 1 / 2.4) - 0.055;
		}

		R = linToSrgb(R);
		G = linToSrgb(G);
		B = linToSrgb(B);

		R = Math.min(1, Math.max(0, R));
		G = Math.min(1, Math.max(0, G));
		B = Math.min(1, Math.max(0, B));

		const toHex = (v) => {
			const n = Math.round(v * 255);
			return n.toString(16).padStart(2, '0');
		};

		return `#${toHex(R)}${toHex(G)}${toHex(B)}`;
	}

	function getDaisyUIColor(): string {
		if (typeof window !== 'undefined' && canvasContainerRef) {
			// Get the computed style of the container element
			const computedStyle = window.getComputedStyle(canvasContainerRef);
			// Get the CSS custom property for text-base-content
			const daisyColor = computedStyle.getPropertyValue('--color-base-content').trim();

			return daisyColor;
		}
		// Fallback to white if daisyUI color not available
		return '#ffffff';
	}

	function parseOklch(str: string) {
		const match = str.match(/oklch\(\s*([\d.]+)%?\s+([\d.]+)\s+([\d.]+)\s*\)/);
		if (!match) return null;

		let L = parseFloat(match[1]);
		let C = parseFloat(match[2]);
		let h = parseFloat(match[3]);

		if (str.includes('%')) {
			L = L / 100;
		}
		return { L, C, h };
	}

	onMount(() => {
		const oklchStr = getDaisyUIColor();
		const parsed = parseOklch(oklchStr);
		console.log('DaisyUI color in oklch:', oklchStr, parsed);
		if (parsed) {
			color = oklchToHex(parsed.L, parsed.C, parsed.h);
			console.log(color);
		} else {
			color = '#ffffff';
		}
	});

	function hexToRgb(hex: string): number[] {
		hex = hex.replace('#', '');

		if (hex.length === 3) {
			hex = hex
				.split('')
				.map((char) => char + char)
				.join('');
		}

		const hexInt = parseInt(hex, 16);
		const red = (hexInt >> 16) & 255;
		const green = (hexInt >> 8) & 255;
		const blue = hexInt & 255;
		return [red, green, blue];
	}

	$: rgb = hexToRgb(color);

	function circleParams() {
		const x = Math.floor(Math.random() * canvasSize.w);
		const y = Math.floor(Math.random() * canvasSize.h);
		const translateX = 0;
		const translateY = 0;
		const pSize = Math.floor(Math.random() * 2) + size;
		const alpha = 0;
		const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
		const dx = (Math.random() - 0.5) * 0.1;
		const dy = (Math.random() - 0.5) * 0.1;
		const magnetism = 0.1 + Math.random() * 4;
		return {
			x,
			y,
			translateX,
			translateY,
			size: pSize,
			alpha,
			targetAlpha,
			dx,
			dy,
			magnetism
		};
	}

	function resizeCanvas() {
		if (canvasContainerRef && canvasRef && context) {
			circles.length = 0;
			canvasSize.w = canvasContainerRef.offsetWidth;
			canvasSize.h = canvasContainerRef.offsetHeight;
			canvasRef.width = canvasSize.w * dpr;
			canvasRef.height = canvasSize.h * dpr;
			canvasRef.style.width = `${canvasSize.w}px`;
			canvasRef.style.height = `${canvasSize.h}px`;
			context.scale(dpr, dpr);
		}
	}

	function clearContext() {
		if (context) {
			context.clearRect(0, 0, canvasSize.w, canvasSize.h);
		}
	}

	function drawCircle(circle, update = false) {
		if (context) {
			const { x, y, translateX, translateY, size, alpha } = circle;
			context.translate(translateX, translateY);
			context.beginPath();
			context.arc(x, y, size, 0, 2 * Math.PI);
			context.fillStyle = `rgba(${rgb.join(', ')}, ${alpha})`;
			context.fill();
			context.setTransform(dpr, 0, 0, dpr, 0, 0);

			if (!update) {
				circles.push(circle);
			}
		}
	}

	function drawParticles() {
		clearContext();
		for (let i = 0; i < quantity; i++) {
			const circle = circleParams();
			drawCircle(circle);
		}
	}

	function remapValue(value, start1, end1, start2, end2) {
		let remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
		return remapped > 0 ? remapped : 0;
	}

	function animate() {
		clearContext();
		circles.forEach((circle, i) => {
			const edge = [
				circle.x + circle.translateX - circle.size,
				canvasSize.w - circle.x - circle.translateX - circle.size,
				circle.y + circle.translateY - circle.size,
				canvasSize.h - circle.y - circle.translateY - circle.size
			];
			const closestEdge = edge.reduce((a, b) => Math.min(a, b));
			const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
			if (remapClosestEdge > 1) {
				circle.alpha += 0.02;
				if (circle.alpha > circle.targetAlpha) {
					circle.alpha = circle.targetAlpha;
				}
			} else {
				circle.alpha = circle.targetAlpha * remapClosestEdge;
			}
			circle.x += circle.dx + vx;
			circle.y += circle.dy + vy;
			circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;
			circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;

			drawCircle(circle, true);

			if (
				circle.x < -circle.size ||
				circle.x > canvasSize.w + circle.size ||
				circle.y < -circle.size ||
				circle.y > canvasSize.h + circle.size
			) {
				circles.splice(i, 1);
				const newCircle = circleParams();
				drawCircle(newCircle);
			}
		});
		window.requestAnimationFrame(animate);
	}

	function onMouseMove(event: MouseEvent) {
		if (canvasRef) {
			let rect = canvasRef.getBoundingClientRect();
			let { w, h } = canvasSize;
			let x = event.clientX - rect.left - w / 2;
			let y = event.clientY - rect.top - h / 2;
			let inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
			if (inside) {
				mouse.x = x;
				mouse.y = y;
			}
		}
	}

	onMount(() => {
		if (canvasRef) {
			context = canvasRef.getContext('2d');
			resizeCanvas();
			animate();
			window.addEventListener('resize', resizeCanvas);
			window.addEventListener('mousemove', onMouseMove);
		}

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', onMouseMove);
		};
	});

	$: {
		if (canvasRef) {
			drawParticles();
			//   animate();
		}
	}
	//   Building Stage
</script>

<div class="background-particles" bind:this={canvasContainerRef} aria-hidden="true">
	<canvas bind:this={canvasRef}></canvas>
</div>

<style>
	.background-particles {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none; /* lets you click through it */
        z-index: -1;
	}
	.background-particles canvas {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
