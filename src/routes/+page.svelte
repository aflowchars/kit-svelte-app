<script lang="ts">
	let hero_height: number = $state(0);
	let scroll_y: number = $state(0);
	let navbar_state: 'HERO' | 'DEFAULT' = $state('HERO');

	$effect(() => {
		if (window !== undefined) {
			if (scroll_y > hero_height) {
				navbar_state = 'DEFAULT';
			} else if (scroll_y <= hero_height) {
				navbar_state = 'HERO';
			}
		}
	});
</script>

<svelte:window bind:scrollY={scroll_y} />

<header
	class="fixed left-0 top-0 z-[999] flex h-24 w-full items-center justify-center py-5 transition-all duration-500 ease-in {(navbar_state ===
		'HERO' &&
		'bg-transparent text-white') ||
		(navbar_state === 'DEFAULT' && 'bg-neutral-50 text-neutral-950 shadow-sm')}"
>
	<div
		class="container mx-auto flex max-w-screen-2xl items-center justify-between lg:px-10 2xl:px-5"
	>
		<a href="/" class="flex items-center gap-2.5">
			{#if navbar_state === 'HERO'}
				<img
					class="size-14"
					src="/brands/yayasan-pdfk-white-logo.png"
					alt="Yayasan PDFK B&W Logo"
				/>
			{:else if navbar_state === 'DEFAULT'}
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
			<a href="/" class="text-sm font-semibold uppercase tracking-wide">Tentang</a>
			<a href="/" class="text-sm font-semibold uppercase tracking-wide">Laporan</a>
			<a href="/" class="text-sm font-semibold uppercase tracking-wide">Berita</a>
			<a href="/" class="text-sm font-semibold uppercase tracking-wide">Program</a>
			<a
				href="/"
				class="rounded-full border border-emerald-100/25 bg-emerald-700/95 px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-neutral-50 backdrop-blur-sm transition-all duration-300 ease-in hover:bg-emerald-700/75"
			>
				Donasi Sekarang
			</a>
		</nav>
	</div>
</header>

<section bind:clientHeight={hero_height} class="hero relative h-screen overflow-hidden">
	<img
		class="absolute inset-0 -z-20 h-full w-full object-cover"
		src="./images/hero-photo-1.jpg"
		alt="Baksos Palestina 1"
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
			<h1 class="w-[628px] text-4xl font-medium leading-snug">
				Berikan Donasi Anda Tanpa Khawatir: Tersalurkan & Bebas Biaya Admin
			</h1>

			<p class="w-[420px] text-lg">
				Kami bertekad untuk menyalurkan bantuan anda dengan transparan dan dokumentasi dalam setiap
				penyaluran bantuan serta bebas biaya potongan admin. Terjamin.
			</p>
		</div>
	</div>
</section>

<section class="">
	<div
		class="container mx-auto flex max-w-screen-xl items-center justify-between border-b border-neutral-200 px-10 py-12"
	>
		<div class="space-y-0.5 text-center">
			<h5 class="text-base font-medium text-neutral-600">Berdiri Sejak</h5>
			<p class="text-4xl font-semibold">April 2014</p>
		</div>

		<div class="space-y-0.5 text-center">
			<h5 class="text-base font-medium text-neutral-600">Dana Tersalurkan</h5>
			<p class="text-4xl font-semibold">4,4 M</p>
		</div>

		<div class="space-y-0.5 text-center">
			<h5 class="text-base font-medium text-neutral-600">Jumlah Donatur</h5>
			<p class="text-4xl font-semibold">2432</p>
		</div>

		<div class="space-y-0.5 text-center">
			<h5 class="text-base font-medium text-neutral-600">Bantuan Tersebar</h5>
			<p class="text-4xl font-semibold">40 Lokasi</p>
		</div>
	</div>
</section>

<section class="pb-40 pt-28 text-neutral-900">
	<div class="container mx-auto max-w-screen-lg space-y-8">
		<div
			class="inline rounded border-[1.5px] border-emerald-200/25 bg-emerald-600 px-3.5 py-2 text-sm font-bold leading-normal text-neutral-50"
		>
			Tentang Kami
		</div>

		<p class="text-4xl font-semibold leading-tight tracking-tight">
			Yayasan Padepokan Fatwa Kehidupan merupakan salah satu lembaga Filantropi Islam Indonesia yang
			menjadi penghubung antara Umat ke Umat untuk memberikan solusi atau bantuan terhadap
			permasalahan umat.
		</p>

		<p class="text-xl font-semibold leading-normal tracking-tight text-neutral-700">
			Berkomitmen menjadi Lembaga yang terpercaya, progesif, dan professional serta dapat
			berkolaborasi dengan berbagai pihak untuk terwujudnya pemberdayaan masyarakat yang lebih baik
			melalui bidang Pendidikan, kesehatan, ekonomi, dan lingkungan.
		</p>

		<p class="text-4xl font-semibold leading-tight tracking-tight">
			Semua donasi yang telah masuk, Insya Allah akan Kami salurkan 100% untuk Masyarakat yang
			membutuhkan.
		</p>
	</div>
	<div class="container mx-auto mt-16 max-w-screen-lg">
		<a
			href="/tentang-kami"
			class="group relative inline-flex items-center gap-2.5 border-b-2 border-emerald-600/10 py-4 text-emerald-600 transition-all duration-300 ease-in hover:border-emerald-600/100"
		>
			<span class="text-2xl font-semibold"> Baca Selengkapnya </span>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="size-6 rotate-0 transition-transform duration-150 ease-in group-hover:-rotate-45"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
				/>
			</svg>
		</a>
	</div>
</section>

<section class="relative overflow-hidden bg-neutral-950 py-28 text-neutral-50">
	<div class="container mx-auto max-w-screen-2xl px-10">
		<section class="relative flex items-center gap-20">
			<svg
				class="absolute -top-32 left-1/3 h-[655px] w-[543px] -translate-x-1/3"
				viewBox="0 0 543 655"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M345.651 641.789C299.546 654.143 256.525 657.644 216.587 652.294C176.795 646.69 143.215 633.536 115.848 612.832C88.481 592.128 70.3565 565.201 61.4745 532.053C54.6257 506.493 54.1267 481.479 59.9774 457.011C65.9743 432.289 77.1523 410.139 93.5114 390.559C109.817 370.78 129.909 355.552 153.787 344.873L152.663 340.68C118.166 342.86 87.3671 334.098 60.2676 314.392C33.1146 294.486 15.0436 267.76 6.05451 234.212C-2.45298 202.462 -0.743414 171.719 11.1832 141.984C23.0564 112.05 43.2599 85.6619 71.7937 62.8205C100.474 39.7259 135.471 22.6436 176.785 11.5735C218.099 0.503388 256.849 -2.17465 293.034 3.53935C329.419 9.19987 360.236 22.0239 385.486 42.0114C410.682 61.7992 427.607 87.4417 436.26 118.939C445.103 152.74 442.617 184.975 428.802 215.644C414.986 246.313 392.895 269.247 362.527 284.447L363.651 288.64C389.27 286.056 413.985 289.279 437.796 298.309C461.753 307.085 482.509 320.679 500.063 339.09C517.763 357.248 530.137 379.08 537.186 404.587C545.868 437.788 543.535 470.196 530.187 501.81C516.839 533.424 494.235 561.633 462.376 586.435C430.663 610.984 391.755 629.436 345.651 641.789ZM320.128 546.538C340.685 541.03 357.658 532.522 371.047 521.016C384.381 509.31 393.574 495.718 398.625 480.239C403.822 464.506 404.093 447.954 399.438 430.581C394.676 412.809 385.985 398.337 373.365 387.164C360.692 375.792 345.628 368.271 328.173 364.601C310.664 360.732 291.931 361.471 271.973 366.819C252.214 372.113 235.62 380.84 222.193 392.999C208.712 404.958 199.327 419.03 194.038 435.215C188.894 451.147 188.704 467.999 193.466 485.771C198.121 503.144 206.532 517.37 218.699 528.45C230.812 539.329 245.67 546.478 263.271 549.895C280.818 553.112 299.77 551.993 320.128 546.538ZM246.691 272.466C263.855 267.867 278.187 260.281 289.687 249.709C301.186 239.137 309.069 226.644 313.336 212.232C317.603 197.819 317.569 182.525 313.235 166.35C308.955 150.375 301.417 137.413 290.623 127.464C279.774 117.315 266.854 110.611 251.863 107.351C236.817 103.892 220.513 104.515 202.949 109.221C185.585 113.874 171.154 121.486 159.654 132.058C148.101 142.431 140.165 154.723 135.844 168.937C131.67 182.897 131.723 197.864 136.004 213.839C140.338 230.014 147.955 243.276 158.857 253.624C169.759 263.973 182.832 270.85 198.077 274.256C213.322 277.662 229.526 277.065 246.691 272.466Z"
					fill="url(#paint0_linear_501_90)"
					fill-opacity="0.025"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_501_90"
						x1="176.935"
						y1="11.5334"
						x2="345.8"
						y2="641.749"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="white" />
						<stop offset="1" stop-color="#F2F0F0" />
					</linearGradient>
				</defs>
			</svg>

			<div
				class="absolute -bottom-32 -right-24 -z-0 size-[48rem] rounded-full bg-emerald-800/25 blur-3xl"
			></div>

			<div class="basis-5/12">
				<div
					class="inline rounded border-[1.5px] border-neutral-50/25 bg-neutral-800 px-3.5 py-2 text-sm font-bold"
				>
					Baksos FK Palestina
				</div>

				<h3 class="mt-5 text-4xl font-medium leading-snug">
					<span class="font-semibold text-emerald-600">Konsisten dan Berhasil</span> Mengirim
					Bantuan ke <span class="font-semibold text-emerald-600">Palestina, Gaza Utara.</span> Dari
					Solar, Air Bersih, Roti, hingga Makanan Pokok.
				</h3>

				<div class="mt-20 flex items-center gap-3.5">
					<a
						href="/"
						class="rounded-full border border-emerald-300/25 bg-emerald-600/50 px-5 py-3 text-sm font-bold"
					>
						Donasi Sekarang
					</a>

					<a
						href="/"
						class="rounded-full border border-neutral-300/25 bg-neutral-800/50 px-5 py-3 text-sm font-bold"
					>
						Baca Detail
					</a>
				</div>
			</div>

			<div
				class="basis-7/12 rounded-xl border-2 border-emerald-600/25 bg-emerald-600/10 p-3 backdrop-blur-xl"
			>
				<figure class="relative aspect-video overflow-hidden rounded-t-xl">
					<img
						class="h-full w-full scale-110 object-cover"
						src="/images/baksos-fk-palestina-1.jpg"
						alt="Penyaluran Baksos FK Palestina 1"
					/>
				</figure>

				<div class="mt-3 flex items-center gap-3">
					<figure
						class="relative aspect-video overflow-hidden first:rounded-bl-xl last:rounded-br-xl"
					>
						<img
							class="h-full w-full scale-110 object-cover"
							src="/images/baksos-fk-palestina-4.jpg"
							alt="Penyaluran Baksos FK Palestina 4"
						/>
					</figure>

					<figure
						class="relative aspect-video overflow-hidden first:rounded-bl-xl last:rounded-br-xl"
					>
						<img
							class="h-full w-full scale-110 object-cover"
							src="/images/baksos-fk-palestina-3.jpg"
							alt="Penyaluran Baksos FK Palestina 3"
						/>
					</figure>

					<figure
						class="relative aspect-video overflow-hidden first:rounded-bl-xl last:rounded-br-xl"
					>
						<img
							class="h-full w-full scale-110 object-cover"
							src="/images/baksos-fk-palestina-2.jpg"
							alt="Penyaluran Baksos FK Palestina 2"
						/>
					</figure>
				</div>
			</div>
		</section>
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
