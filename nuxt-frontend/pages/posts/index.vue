<template>
  <section class="con">
    <div class="flex flex-col items-center mb-14">
      <h2 class="text-[42px] leading-[48px] font-semibold mb-4 text-center">Discover more about something</h2>
      <span class="text-2xl font-semibold text-[#808080]">on our GetExperience blog</span>
    </div>

    <AppMainTopic class="mb-14" />

    <AppCardsSection class="mb-14" />

    <AppCardsSection class="mb-14" />
  </section>
</template>

<script setup>
  import AppMainTopic from '@/components/AppMainTopic';
  import AppCardsSection from '@/components/AppCardsSection';

  const { find } = useStrapi4();
  const uploadsUrl = useStrapiUrl().replace('/api', '');

  const posts = await find('posts',{
    populate: ['main_category', 'thumbnail_image',]
  }).then((res) => res.data);

  const formatDate = (date) => {
    return new Date(date).toDateString();
  };
</script>
