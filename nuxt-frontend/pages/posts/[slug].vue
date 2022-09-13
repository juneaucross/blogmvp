<template>
	<section>
		<h1>{{ post.name }}</h1>
		<nuxt-link :to="`/posts`">back to the posts list</nuxt-link>
		<div v-html="post.content" />
	</section>
</template>

<script setup>
	const { findOne } = useStrapi4();
	const { params } = useRoute();

	const post = await findOne('posts', params.slug)
		.then((res) => res.data.attributes);

	const tost = await findOne('posts', params.slug)
		.then((res) => console.log(res));
</script>