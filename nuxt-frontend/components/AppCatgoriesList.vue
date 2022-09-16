<template>
	<div class="flex gap-4">
		<span v-for="category in categories" class="py-2 px-6 border border-solid border-[#e0e0e0] rounded-full text-sm font-medium">{{ category }}</span>
	</div>
</template>

<script>
	export default {
		name: 'AppCatgoriesList',
	};
</script>

<script setup>
	const categories = ['trips', 'food', 'culture', 'history', 'nature', 'nightlife'];
</script>