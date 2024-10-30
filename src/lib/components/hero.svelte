<script lang="ts">
	import { hero_height } from '$lib/stores';

	//-------------------------------------------
	// Props
	//-------------------------------------------
	interface HeroProps {
		tag?: string;
		title?: string;
		heading?: string;
		image: string;
		description?: string;
	}

	let { tag, title, heading, image, description }: HeroProps = $props();

	//-------------------------------------------
	// Bind hero height
	//-------------------------------------------
	let bind_height: number = $state(0);

	$effect(() => {
		$hero_height = bind_height;
	});
</script>

<section bind:clientHeight={bind_height} class="hero relative h-screen overflow-hidden">
	<img
		class="absolute inset-0 -z-20 h-full w-full object-cover"
		src={image}
		alt={title || heading}
	/>

	<div class="hero-ov-1st absolute inset-0 -z-10 h-full w-full object-cover"></div>

	<div
		class="hero-ov-2nd-top absolute left-0 top-0 -z-0 h-40 w-full bg-gradient-to-b from-neutral-950 via-neutral-950/75 to-neutral-50/0 object-cover"
	></div>

	<div class="hero-ov-2nd-bottom absolute bottom-0 left-0 -z-0 h-full w-full object-cover"></div>

	<div
		class="absolute bottom-0 left-0 z-10 flex h-full w-full flex-col items-start justify-end pb-28 text-white"
	>
		<div
			class="container mx-auto flex max-w-screen-2xl items-center justify-between lg:px-10 2xl:px-5"
		>
			<div class="space-y-3.5">
				<div
					class="inline rounded border-[1.5px] border-neutral-50/25 bg-neutral-800 px-3.5 py-2 text-sm font-bold"
				>
					{title}
				</div>

				<h1 class="w-[628px] text-4xl font-medium leading-snug">
					{heading}
				</h1>
			</div>

			<p class="w-[420px] text-lg">
				{description}
			</p>
		</div>
	</div>
</section>

<style>
	.hero-ov-1st {
		background: linear-gradient(
			16deg,
			rgba(0, 0, 0, 0.6) 13.29%,
			rgba(50, 50, 50, 0) 85.75%,
			rgba(64, 64, 64, 0) 101.85%
		);
	}

	.hero-ov-2nd-bottom {
		background: linear-gradient(
			16deg,
			rgba(0, 0, 0, 0.8) 13.29%,
			rgba(50, 50, 50, 0) 85.75%,
			rgba(64, 64, 64, 0) 101.85%
		);
	}
</style>
