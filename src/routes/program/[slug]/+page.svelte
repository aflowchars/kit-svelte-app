<script lang="ts">
	import { Hero } from '$lib/components';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Baksos FK Palestina - Yayasan Padepokan Fatwa Kehidupan</title>
</svelte:head>

<Hero
	title="Baksos FK Palestina"
	heading="Konsisten dan berhasil mengirim bantuan ke Palestina, Gaza Utara. Dari Solar, Air, Roti, hingga Makanan."
	image="/images/program-hero-1.jpg"
	description="Dimulai sejak tanggal 23 Januari 2023, kami berhasil mengirimkan bantuan berupa berbagai jenis makanan dari roti, nasi. Kebutuhan pokok seperti air dan solar."
/>

<section class="border-b border-neutral-200">
	<div class="container mx-auto flex max-w-screen-lg items-center justify-between py-12">
		<div class="space-y-0.5 text-center">
			<h5 class="text-base font-medium text-neutral-600">Dana Tersalurkan</h5>
			<p class="text-4xl font-semibold">4,495 M</p>
		</div>

		<div class="space-y-0.5 text-center">
			<h5 class="text-base font-medium text-neutral-600">Jumlah Donatur</h5>
			<p class="text-4xl font-semibold">3240</p>
		</div>

		<div class="space-y-0.5 text-center">
			<h5 class="text-base font-medium text-neutral-600">Total Penyaluran</h5>
			<p class="text-4xl font-semibold">65 Kali</p>
		</div>

		<div class="space-y-0.5 text-center">
			<h5 class="text-base font-medium text-neutral-600">Bantuan Tersebar</h5>
			<p class="text-4xl font-semibold">40 Lokasi</p>
		</div>
	</div>
</section>

<section class="py-16 tracking-tight text-neutral-800">
	<div class="container mx-auto max-w-screen-lg text-lg leading-relaxed">
		<p>
			Di tengah ketidakpastian dan konflik yang terus berlanjut, secercah harapan datang dari
			sekelompok relawan kemanusiaan yang bertekad membantu warga Palestina. Mereka berasal dari
			berbagai latar belakang, namun disatukan oleh satu tujuan: meringankan penderitaan
			saudara-saudara kita yang berada di zona konflik.
		</p>

		<br />

		<p>
			Yayasan Padepokan Fatwa Kehidupan di Indonesia memulai gerakan donasi ini sejak 23 Januari
			2023 yang lalu. Melalui kerja keras para relawan dan kepercayaan masyarakat yang menyumbang,
			bantuan berupa makanan, obat-obatan, dan kebutuhan pokok lainnya mulai terkumpul dalam jumlah
			yang signifikan. Setiap donasi yang datang, seolah membawa pesan dari Indonesia: "Kamu tidak
			sendiri, kami peduli."
		</p>
	</div>

	<div class="container mx-auto my-10 flex max-w-screen-lg items-center gap-4">
		<figure class="h-full w-full">
			<img
				class="h-full w-full object-cover"
				src="/images/baksos-cta-1.jpg"
				alt="Baksos Palestina 1"
			/>
		</figure>

		<figure class="h-full w-full">
			<img
				class="h-full w-full object-cover"
				src="/images/baksos-cta-2.jpg"
				alt="Baksos Palestina 2"
			/>
		</figure>
	</div>

	<div class="container mx-auto max-w-screen-lg text-lg leading-relaxed">
		<p>
			Pagi itu, di bandara internasional Jakarta, para relawan bersiap-siap mengantar bantuan
			langsung ke Palestina. Berpuluh-puluh kardus berisi paket makanan, selimut, serta obat-obatan
			dasar ditata rapi. Dalam hati, mereka tahu bahwa meskipun ini hanyalah sebagian kecil dari apa
			yang dibutuhkan, setiap bantuan ini memiliki arti besar bagi mereka yang menerimanya.
		</p>

		<br />

		<p>
			Setibanya di Palestina, tantangan demi tantangan menghadang. Suara pesawat tak henti-hentinya
			terdengar di langit, dan jalanan yang rusak membuat distribusi tidak semudah yang dibayangkan.
			Namun, tekad mereka tak surut. Di antara reruntuhan bangunan, mereka menemukan senyum-senyum
			penuh syukur dari anak-anak yang berlarian dengan semangat. "Terima kasih, Indonesia!" teriak
			seorang bocah sambil menerima paket makanan dari salah satu relawan.
		</p>
	</div>

	<div class="container mx-auto my-10 flex max-w-screen-lg items-center gap-4">
		<figure class="h-full w-full">
			<img
				class="h-full w-full object-cover"
				src="/images/baksos-cta-3.jpg"
				alt="Baksos Palestina 3"
			/>
		</figure>
		<figure class="h-full w-full">
			<img
				class="h-full w-full object-cover"
				src="/images/baksos-cta-4.jpg"
				alt="Baksos Palestina 4"
			/>
		</figure>
	</div>

	<div class="container mx-auto max-w-screen-lg text-lg leading-relaxed">
		<p>
			Salah satu relawan, Ahmad, tak bisa menyembunyikan harunya saat melihat seorang ibu yang
			menangis ketika menerima paket bantuan. “Kami tidak memiliki apa-apa lagi,” ucap ibu tersebut,
			dengan suara parau. Ahmad hanya bisa menjawab dengan senyuman dan doa di hatinya. Ia tahu,
			masih banyak yang harus dilakukan, namun setidaknya, di tengah gelapnya situasi, ada sedikit
			terang yang mereka bawa.
		</p>

		<br />

		<p>
			Penyaluran baksos ke Palestina ini tidak hanya tentang memberikan barang, tetapi juga tentang
			membawa harapan. Harapan bahwa di dunia yang penuh dengan konflik dan kesedihan, masih ada
			tangan-tangan yang terulur untuk membantu. Bagi relawan dan masyarakat Indonesia yang telah
			ikut serta, mereka yakin bahwa setiap kebaikan yang mereka lakukan akan meninggalkan jejak
			yang tak terlupakan, baik bagi penerima maupun diri mereka sendiri.
		</p>
	</div>
</section>

<div class="border-t border-neutral-200 py-20">
	<div class="container mx-auto max-w-screen-2xl lg:px-10 2xl:px-5">
		<div class="flex flex-col items-start justify-start gap-5">
			<h3 class="max-w-screen-sm text-left text-4xl font-medium leading-snug tracking-tight">
				Kabar Terbaru dari Baksos FK Palestina yang Telah Kami Salurkan
			</h3>
		</div>

		<div class="mt-10 grid grid-cols-3 gap-10">
			{#each [1, 2, 3] as item}
				<div class="group relative flex flex-col items-start">
					<a href="/" class="absolute z-10 h-full w-full object-cover opacity-0"> link </a>

					<figure class="relative aspect-video overflow-hidden rounded-lg">
						<div
							class="absolute -z-0 h-full w-full bg-gradient-to-t from-neutral-950/50 to-neutral-50/0 object-cover"
						></div>
						<div
							class="absolute left-1/2 top-1/2 z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-emerald-400/25 bg-emerald-600/60 opacity-0 backdrop-blur-md transition-all duration-500 ease-in group-hover:opacity-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-8 text-slate-50"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
						<img
							class="relative -z-10 h-full w-full scale-100 object-cover transition-all duration-300 ease-in group-hover:scale-110"
							src="/images/berita-baksos-1.jpg"
							alt="Berita Baksos 1"
						/>
					</figure>

					<div class="mt-3.5 inline border-b border-neutral-950 px-1.5 py-1 text-xs font-semibold">
						Baksos FK Palestina
					</div>

					<h5 class="mt-3.5 text-xl font-semibold">
						Baksos FK Palestina #32, Bantuan Air Minum di Gaza Utara
					</h5>

					<div class="my-5 h-px w-full bg-neutral-400"></div>

					<div class="flex w-full items-center justify-between">
						<div>
							<h6 class="text-[0.625rem] font-bold uppercase tracking-wider">Total Donasi</h6>
							<p class="text-base font-semibold text-neutral-800">Disalurkan Rp 23.054.321,-</p>
						</div>

						<div>
							<h6 class="text-[0.625rem] font-bold uppercase tracking-wider">Periode</h6>
							<p class="text-base font-semibold text-neutral-800">20-27 Oktober 2024</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<section class="border-t border-neutral-200 pb-36 pt-28">
	<div class="container mx-auto grid max-w-screen-2xl grid-cols-2 items-center gap-12 px-5">
		<div>
			<div
				class="inline rounded border-[1.5px] border-emerald-200/25 bg-emerald-600 px-2.5 py-2 text-sm font-bold leading-normal text-neutral-50"
			>
				Ayo Berdonasi!
			</div>

			<h3 class="mt-5 text-4xl font-medium leading-normal tracking-tighter">
				Tunggu Apa Lagi, Mari Salurkan Bantuan Sekarang Juga. Ribuan Orang Akan Sangat Terbantu
				dengan Uluran Anda.
			</h3>

			<div class="mt-16 flex items-center gap-3.5">
				<a
					href="/"
					class="rounded-full border border-emerald-300/25 bg-emerald-600 px-5 py-3 text-sm font-bold text-white"
				>
					Donasi Sekarang
				</a>

				<a
					href="/"
					class="rounded-full border border-neutral-300 bg-neutral-200/25 px-5 py-3 text-sm font-bold"
				>
					Lihat Laporan Donasi
				</a>
			</div>
		</div>

		<div class="relative flex items-center">
			<figure class="relative h-96 w-72 -rotate-3 overflow-hidden rounded-lg shadow-xl">
				<img
					class="h-full w-full object-cover"
					src="/images/program-baksos-1.jpg"
					alt="Baksos FK Palestina"
				/>
			</figure>
			<figure class="relative -mt-8 h-96 w-72 overflow-hidden rounded-lg shadow-xl">
				<img
					class="h-full w-full object-cover"
					src="/images/program-baksos-2.jpg"
					alt="Baksos FK Palestina"
				/>
			</figure>
			<figure class="relative h-96 w-72 rotate-3 overflow-hidden rounded-lg shadow-xl">
				<img
					class="h-full w-full object-cover"
					src="/images/program-baksos-3.jpg"
					alt="Baksos FK Palestina"
				/>
			</figure>
		</div>
	</div>
</section>
