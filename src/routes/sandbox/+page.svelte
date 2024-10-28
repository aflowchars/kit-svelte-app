<div class="main flex w-full flex-col items-center justify-center px-10">
	<h1 class="text-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>

	<div class="slider" style="--width:480px;--height:315px;--quantity:8;">
		<div class="list">
			<div class="item" style="--position: 1;"><img src="/images/baksos-cta-1.jpg" alt="" /></div>
			<div class="item" style="--position: 2;"><img src="/images/baksos-cta-2.jpg" alt="" /></div>
			<div class="item" style="--position: 3;"><img src="/images/baksos-cta-3.jpg" alt="" /></div>
			<div class="item" style="--position: 4;"><img src="/images/baksos-cta-4.jpg" alt="" /></div>
			<div class="item" style="--position: 5;"><img src="/images/baksos-cta-5.jpg" alt="" /></div>
			<div class="item" style="--position: 6;"><img src="/images/baksos-cta-6.jpg" alt="" /></div>
			<div class="item" style="--position: 7;"><img src="/images/baksos-cta-7.jpg" alt="" /></div>
			<div class="item" style="--position: 8;"><img src="/images/baksos-cta-8.jpg" alt="" /></div>
		</div>
	</div>

	<div class="slider" data-reverse="true" style="--width:480px;--height:315px;--quantity:8;">
		<div class="list">
			<div class="item" style="--position: 1;"><img src="/images/baksos-cta-6.jpg" alt="" /></div>
			<div class="item" style="--position: 2;"><img src="/images/baksos-cta-7.jpg" alt="" /></div>
			<div class="item" style="--position: 3;"><img src="/images/baksos-cta-8.jpg" alt="" /></div>
			<div class="item" style="--position: 4;"><img src="/images/baksos-cta-4.jpg" alt="" /></div>
			<div class="item" style="--position: 5;"><img src="/images/baksos-cta-5.jpg" alt="" /></div>
			<div class="item" style="--position: 6;"><img src="/images/baksos-cta-2.jpg" alt="" /></div>
			<div class="item" style="--position: 7;"><img src="/images/baksos-cta-3.jpg" alt="" /></div>
			<div class="item" style="--position: 8;"><img src="/images/baksos-cta-1.jpg" alt="" /></div>
		</div>
	</div>
</div>

<style>
	.main {
		padding: 160px 0;
	}

	.slider {
		width: 100%;
		height: var(--height);
		overflow: hidden;
		margin-top: 40px;
	}

	.slider .list {
		display: flex;
		width: 100%;
		min-width: calc(var(--width) * var(--quantity));
		position: relative;
	}

	.slider .list .item {
		width: var(--width);
		height: var(--height);
		position: absolute;
		left: 100%;
		animation: autoRun 40s linear infinite;
		animation-delay: calc((40s / var(--quantity)) * (var(--position) - var(--quantity))) !important;
	}

	.slider .list .item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.slider[data-reverse='true'] .list .item {
		animation: reversePlay 40s linear infinite;
		animation-delay: calc((40s / var(--quantity)) * (var(--position) - var(--quantity))) !important;
	}

	@keyframes autoRun {
		from {
			left: 100%;
		}
		to {
			left: calc(var(--width) * -1);
		}
	}

	@keyframes reversePlay {
		from {
			left: calc(var(--width) * -1);
		}
		to {
			left: 100%;
		}
	}
</style>
