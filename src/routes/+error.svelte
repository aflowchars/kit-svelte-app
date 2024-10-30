<script lang="ts">
	import { Navigation } from '$lib/components';
</script>

<svelte:head>
	<title>Halaman Tidak Ditemukan - Yayasan Padepokan Fatwa Kehidupan</title>
</svelte:head>

<div class="grid h-screen grid-cols-2 bg-neutral-950/95 text-neutral-50">
	<figure class="relative h-full w-full">
		<div
			class="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-neutral-950/100 to-neutral-50/0 object-cover"
		></div>
		<img
			class="h-full w-full object-cover object-bottom"
			src="/images/baksos-cta-5.jpg"
			alt="Baksos CTA 5"
		/>
	</figure>

	<div class="flex flex-col items-center justify-center gap-5 px-10 py-20">
		<div
			class="inline rounded border-[1.5px] border-emerald-200/25 bg-emerald-600/80 px-3.5 py-1.5 text-sm font-bold leading-normal text-neutral-50"
		>
			404 Not Found
		</div>

		<h3 class="max-w-screen-sm text-center text-4xl font-medium leading-snug tracking-tight">
			Tampaknya Halaman yang Anda Cari Tidak Ditemukan. Silahkan Kembali ke Halaman Awal.
		</h3>

		<div class="mt-7 flex items-center gap-3.5">
			<a
				href="/"
				class="rounded-full border border-emerald-300/25 bg-emerald-600/75 px-6 py-3.5 text-base font-bold text-white"
			>
				Kembali ke Halaman Utama
			</a>
		</div>
	</div>
</div>

<!-- ------------- footer ------------- -->
