<template>
  <div class="container lg:max-w-[1240px] mx-auto">
    <AppHeader class="mb-6" />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
  import AppHeader from '@/components/AppHeader';
  import AppFooter from '@/components/AppFooter';
</script>