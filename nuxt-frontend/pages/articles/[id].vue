<template>
	<section style="width: 500px;">
		<h1>{{ article.title }}</h1>
		<nuxt-link :to="`/articles`">back to the articles list</nuxt-link>
		<div v-html="content" />
	</section>
</template>

<script setup>
	import MarkdownIt from 'markdown-it';

	const { findOne } = useStrapi4();
	const { params } = useRoute();

	const md = new MarkdownIt();

	const article = await findOne('articles', params.id)
		.then((res) => res.data.attributes);

	const content = md.render(article.body);
</script>