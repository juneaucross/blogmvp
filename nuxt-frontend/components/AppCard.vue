<template>
	<div class="flex flex-col w-[295px] overflow-hidden rounded-lg border border-solid border-[#e0e0e0]">
		<div class="overflow-hidden w-[295px] h-[295px]">
			<img src="@/assets/images/img.jpg" alt="" class="w-full h-full">
		</div>
		<div class="p-4">
			<h4 class="text-base font-semibold mb-4">Aquila Game Reserve. Full-day Morning Safari</h4>
			<div class="text-[#ccc] text-sm font-semibold">
				<span class="after:content-['·'] after:mx-1">Travel</span>
				<date>May 27, 2022</date>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppCard',
	};
</script>