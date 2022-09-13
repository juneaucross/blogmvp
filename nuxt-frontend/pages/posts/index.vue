<template>
	<section>
		<h1>posts list</h1>
		<ul>
			<li v-for="{ attributes: post, id } in posts" :key="id">
				<nuxt-link :to="`/posts/${post.slug}`">{{ post.name }}</nuxt-link>
			</li>
		</ul>

		<span>feel free to <a href="http://localhost:1337/admin" target="_blank">add some</a> too!</span>
	</section>
</template>

<script setup>
	const { find } = useStrapi4();
	const posts = await find('posts')
		.then((res) => res.data);
</script>