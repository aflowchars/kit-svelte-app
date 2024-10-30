<script lang="ts">
	import '../app.css';

	import { Footer, Navigation } from '$lib/components';
	import { hero_height } from '../lib/stores/hero-state.svelte';

	let { children } = $props();

	// ----------------------------------------
	// Change navbar based on scroll position
	// ----------------------------------------
	let scroll_y: number = $state(0);
	let is_hero: boolean = $state(true);

	$effect(() => {
		if (window !== undefined) {
			if (scroll_y > $hero_height) {
				is_hero = false;
			} else if (scroll_y <= $hero_height) {
				is_hero = true;
			}
		}
	});
</script>

<svelte:window bind:scrollY={scroll_y} />

<Navigation {is_hero} />

<main class="relative min-h-screen">
	{@render children()}
</main>

<Footer />
