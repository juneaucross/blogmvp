<template>
	<section>
		<h4 class="text-[32px] leading-10 font-semibold mb-6">Popular topics</h4>
		<AppCatgoriesList class="mb-8" />
		<div class="flex flex-wrap gap-5">
			<AppCard />
			<AppCard />
			<AppCard />
			<AppCard />
			<AppCard />
			<AppCard />
		</div>
		<AppPagination/>
	</section>
</template>

<script>
	export default {
		name: 'AppCardsSection',
	};
</script>

<script setup>
	import AppCatgoriesList from '@/components/AppCatgoriesList';
	import AppCard from '@/components/AppCard';
	import AppPagination from '@/components/AppPagination';
</script>

<style scoped>
	.active-page {
		color: #fff;
		background-color: #000;
	}
</style>