<template>
	<section class="con mb-10 pb-[56px]">
		<article>
			<div class="w-full h-[500px] rounded-2xl overflow-hidden">
				<img src="@/assets/images/bigimg.jpg" alt="">
			</div>
			<div class="w-[608px] mx-auto mt-10">
				<h1 class="text-[32px] leading-10 font-semibold mb-4">Weekend in Tallinn</h1>
				<div class="flex items-center font-semibold text-[#313535]">
					<div class="w-[56px] h-[56px] rounded-full py-[14px] px-5 mr-4 bg-[#3b877b] text-[22px] leading-7 text-white">
						A
					</div>
					<span class="after:content-['·'] after:mx-1">by Anna Kuzemkina</span>
					<date class="after:content-['·'] after:mx-1">May 27, 2022</date>
					<span>Travel</span>
				</div>
				<div class="post-content">
					<p>
						In many ways, Estonia is a unique country. On the one hand, it has striking cultural parallels with its
						Scandinavian
						neighbors; on the other hand, centuries of relations with the Slavic world have also left their mark on the
						country.
						Always forward-looking, this nation in northeastern Europe has carved out a niche for itself and offers something
						quite
						unique for a short vacation.
					</p>
					<img src="@/assets/images/bigimg.jpg" alt="" class="w-full h-[316px] rounded-lg overflow-hidden">
					<h2>First day</h2>
					<h4>Morning</h4>
					<p>
						In many ways, Estonia is a unique country. On the one hand, it has striking cultural parallels with its
						Scandinavian
						<a href="#">neighbors</a>; on the other hand, centuries of relations with the Slavic world have also left their
						mark on the country.
						Always forward-looking, this nation in northeastern Europe has carved out a niche for itself and offers something
						quite
						unique for a short vacation.
					</p>
					<p>
						In many ways, Estonia is a unique country. On the one hand, it has striking cultural parallels with its
						Scandinavian
						<a href="#">neighbors</a>; on the other hand, centuries of relations with the Slavic world have also left their
						mark
						on the country.
						Always forward-looking, this nation in northeastern Europe has carved out a niche for itself and offers something
						quite
						unique for a short vacation.
					</p>
				</div>
			</div>
		</article>
		<!-- <div class="flex gap-5 justify-center items-center mb-4">
			<span class="text-lg text-[#313535]">Share</span>
			<a href="https://www.facebook.com/GetExperiencecom-114116281265273" target="_blank">
				<img src="@/assets/images/icon-fb.png" alt="Facebook" width="24" height="24">
			</a>
			<a href="https://instagram.com/get_experience?igshid=YmMyMTA2M2Y=" target="_blank">
				<img src="@/assets/images/icon-ig.png" alt="Instagram" width="24" height="24">
			</a>
		</div> -->
		<div class="w-[608px] mx-auto">
			<div class="flex justify-between text-[#313535] font-semibold mb-[52px]">
				<nuxt-link to="#">
					<span class="flex items-center gap-3 before:bg-[url('@/assets/images/pagination-arrow.png')] before:bg-cover before:w-2 before:h-4">
						Previous blog post
					</span>
				</nuxt-link>
				<nuxt-link to="#">
					<span
						class="flex items-center gap-3 after:bg-[url('@/assets/images/pagination-arrow.png')] after:bg-cover after:rotate-180 after:w-2 after:h-4">
						Next blog post
					</span>
				</nuxt-link>
			</div>
			<div class="flex justify-between">
				<AppCard />
				<AppCard />
			</div>
		</div>
	</section>
</template>

<script setup>
	import AppCard from '@/components/AppCard';
</script>

<style scoped>
	.post-content {
		padding: 40px 0 50px;
	}

	.post-content h1,
	.post-content h2,
	.post-content h4 {
		font-weight: 600;
		margin-bottom: 16px;
	}

	.post-content h1 {
		font-size: 32px;
		line-height: 40px;
	}

	.post-content h2 {
		font-size: 24px;
		line-height: 32px;
	}

	.post-content h4 {
		font-size: 18px;
		line-height: 24px;
	}
	.post-content p:not(:last-child) {
		margin-bottom: 20px;
	}

	.post-content * + p {
		margin-top: 16px;
	}

	.post-content img:not(:last-child) {
		margin-bottom: 40px;
	}

	.post-content * + img {
		margin-top: 40px;
	}

	.post-content a {
		text-decoration: underline;
	}
</style>
