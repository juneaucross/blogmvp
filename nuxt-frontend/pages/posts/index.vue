<template>
  <section>
    <h2 class="posts-page-title">Popular articles</h2>
    <div class="grid">
      <div
        v-for="{ attributes: post, id } in posts"
        :key="id"
        class="blog-item"
      >
        <nuxt-link :to="`/posts/${post.slug}`" class="nuxt-link">
          <div class="blog-item__image-container">
            <img
              :src="`${uploadsUrl}${post.thumbnail_image.data?.attributes.url}`"
              :alt="post.name"
              class="blog-item__image"
              width="373"
              height="258"
            />
          </div>
          <div href="/ru/news/post/vyhodnye-v-talline" class="blog-item__info">
            <h4 class="blog-item__title">{{ post.name }}</h4>
            <div class="blog-item__misc">
              <span class="blog-item__category">{{ post.main_category.data.attributes.name }}</span>
              <time class="blog-item__date">{{
                formatDate(post.custom_date)
              }}</time>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { find } = useStrapi4();
  const uploadsUrl = useStrapiUrl().replace('/api', '');

  const posts = await find('posts',{
    populate: ['main_category', 'thumbnail_image',]
  }).then((res) => res.data);

  const formatDate = (date) => {
    return new Date(date).toDateString();
  };
</script>

<style scoped>
.posts-page-title {
		font-size: 32px;
	}

  .nuxt-link {
    text-decoration: none;
    color: inherit;
  }

  .grid {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  /* .posts > .post {
		width: 100%;
	}
	@media (min-width: 768px) {
		.posts > .post {
			width: 50%;
		}
	}
	@media (min-width: 1024px) {
		.posts > .post {
			width: 33.333%;
		}
	} */

  .blog-item {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 360px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
  }

  .blog-item__image-container {
    width: 100%;
    height: 258px;
    overflow: hidden;
  }

  .blog-item__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: 100%; */
    padding: 14px 18px 20px;
  }

  .blog-item__title {
    margin: 0;
    font-size: 18px;
    line-height: 1.2;
  }

  .blog-item__misc {
    display: flex;
    align-items: center;
    /* margin-top: 10px; */
		color: #b2b2b2;
  }

  .blog-item__category::after {
    content: '·';
    margin: 0px 5px;
  }
</style>
