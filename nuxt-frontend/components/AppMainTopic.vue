<template>
	<div class="flex flex-nowrap h-max rounded-2xl border border-solid border-[#e0e0e0] overflow-hidden">
		<div class="w-1/2 flex flex-col justify-center px-8">
			<h4 class="text-[32px] leading-10 font-semibold mb-4">Weekend in Tallinn</h4>
			<p class="mb-8">
				In many ways, Estonia is a unique country. On the one hand, it has striking cultural parallels with its Scandinavian
				neighbors; on the other hand, centuries of relations with the Slavic world have also left their mark on the country.
				Always forward-looking, this nation in northeastern Europe has carved out a niche for itself and offers something quite
				unique for a short vacation.
			</p>
			<div class="text-[#ccc] text-sm font-semibold">
				<span class="after:content-['·'] after:mx-1">Travel</span>
				<date>May 27, 2022</date>
			</div>
		</div>
		<div class="w-[608px] h-[456px]">
			<img src="@/assets/images/img.jpg" alt="" class="w-full h-full" width="608" height="456">
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppMainTopic',
};
</script>