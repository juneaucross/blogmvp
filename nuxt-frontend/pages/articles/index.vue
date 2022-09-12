<template>
	<section>
		<h1>articles list</h1>
		<ul>
			<li v-for="{ attributes: article, id } in articles" :key="id">
				<nuxt-link :to="`/articles/${id}`">{{ article.title }}</nuxt-link>
				<!-- spans below is just for demo ofc -->
				<span v-if="id === 1"> (this one had a pure html markup. no big deal that its broken)</span>
				<span v-else-if="id === 2"> (this one uses rich text markdown. its works, but not styled yet)</span>
			</li>
		</ul>
	</section>
</template>

<script setup>
	const { find } = useStrapi4();
	const articles = await find('articles')
		.then((res) => res.data);
</script>