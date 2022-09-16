<template>
	<div class="flex flex-nowrap gap-2 text-sm mt-16 justify-center">
		<button class="w-8 h-8 py-[5px] px-[12px]">
			<img src="@/assets/images/pagination-arrow.png" alt="" width="10" height="18" />
		</button>
		<button class="w-8 h-8 py-[5px] px-[12px] rounded-full active-page">1</button>
		<button class="w-8 h-8 py-[5px] px-[12px] rounded-full">2</button>
		<button class="w-8 h-8 py-[5px] px-[12px] rounded-full">3</button>
		<span class="w-8 h-8 py-[5px] px-[12px]">&#8230;</span>
		<button class="w-8 h-8 py-[5px] px-[12px] rounded-full">15</button>
		<button class="w-8 h-8 py-[5px] px-[12px] rounded-full">
			<img src="@/assets/images/pagination-arrow.png" alt="" width="10" height="18" class="rotate-180" />
		</button>
	</div>
</template>

<script>
	export default {
		name: 'AppPagination',
	};
</script>