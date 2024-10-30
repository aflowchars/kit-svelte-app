<script lang="ts">
	let { is_hero }: { is_hero: boolean } = $props();

	let navbar_menu = $state([
		{
			id: 1,
			name: 'Tentang',
			href: '/tentang-kami',
			is_cta: false
		},
		{
			id: 2,
			name: 'Laporan',
			href: '/laporan-donasi',
			is_cta: false
		},
		{
			id: 3,
			name: 'Berita',
			href: '/berita',
			is_cta: false
		},
		{
			id: 4,
			name: 'Program',
			href: '/program-kami',
			is_cta: false
		},
		{
			id: 5,
			name: 'Donasi Sekarang',
			href: '/donasi-sekarang',
			is_cta: true
		}
	]);
</script>

<header
	class="fixed left-0 top-0 z-[999] flex h-24 w-full items-center justify-center py-5 transition-all duration-500 ease-in {is_hero
		? 'bg-transparent text-white'
		: 'bg-neutral-50/90 text-neutral-950 shadow-sm backdrop-blur-md'}"
>
	<div
		class="container mx-auto flex max-w-screen-2xl items-center justify-between lg:px-10 2xl:px-5"
	>
		<a href="/" class="flex items-center gap-2.5">
			{#if is_hero}
				<img
					class="size-14"
					src="/brands/yayasan-pdfk-white-logo.png"
					alt="Yayasan PDFK White Logo"
				/>
			{:else}
				<img
					class="size-14"
					src="/brands/yayasan-pdfk-color-logo.png"
					alt="Yayasan PDFK Color Logo"
				/>
			{/if}

			<div class="mt-1.5 w-44 text-left font-medium">
				<p class="text-sm leading-tight">Yayasan Padepokan</p>
				<p class="text-lg leading-tight">Fatwa Kehidupan</p>
			</div>
		</a>

		<nav class="flex items-center gap-6">
			{#each navbar_menu as menu}
				{@render navigationMenu(menu.href, menu.is_cta, menu.name)}
			{/each}
		</nav>
	</div>
</header>

{#snippet navigationMenu(href: string, is_cta: boolean, name: string)}
	<a
		{href}
		class={is_cta
			? 'relative rounded-full border border-emerald-100/25 bg-emerald-700/95 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-50 backdrop-blur-sm transition-all duration-300 ease-in hover:bg-emerald-700/75'
			: 'text-xs font-semibold uppercase tracking-wide'}
	>
		{name}
	</a>
{/snippet}
