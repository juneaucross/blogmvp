<template>
  <div class="container">
    <header class="header">
      <div class="header__logo">
        <img src="https://getexperience.com/img/getexperience-logo.svg" alt="" class="header__logo-img">
      </div>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .container {
    max-width: 90%;
    margin: 0 auto;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
  }

  .header__logo {
    width: 204px;
  }

  .header__logo-img {
    width: 100%;
  }

  .header__buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
