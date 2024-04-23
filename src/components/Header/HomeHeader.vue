<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const navOpen = ref(false)
const openMoreNav = ref(false)
const openMobileMore = ref(false)
const close = computed(() => {
  return { display: navOpen.value ? 'flex' : 'none' }
})
const open = computed(() => {
  return { display: openMoreNav.value ? 'flex' : 'none' }
})
const openMobileMoreNav = computed(() => {
  return { display: openMobileMore.value ? 'flex' : 'none' }
})
</script>

<template>
  <header class="header">
    <div class="headerLeft">
      <img alt="EGC Logo" class="logo" src="@/assets/logo.svg" />
      <div @click="navOpen = !navOpen">
        <img src="@/assets/hamburger.svg" alt="" width="30" class="hamburger" />
      </div>
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/coins">What is Coins</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <a href="#team">Team Support</a>
        <div @click="openMoreNav = !openMoreNav">
          <a>More </a>
          <svg
            width="25"
            height="25"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 19L25.5 31.5L38 19"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </nav>
      <div :style="open" class="more-nav">
        <div class="arrow-up"></div>
        <a href="/whitepaper" @click="openMoreNav = !openMoreNav">Whitepaper</a>
        <a href="/platform" @click="openMoreNav = !openMoreNav">Platform</a>
      </div>
      <nav :style="close" class="navbar-mobile">
        <div @click="navOpen = !navOpen" class="cross">
          <img
            @click="openMobileMore = !openMobileMore"
            src="@/assets/cross.svg"
            alt=""
            width="50"
          />
        </div>
        <div @click="navOpen = !navOpen">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div @click="navOpen = !navOpen">
          <RouterLink to="/coins">What is Coins</RouterLink>
        </div>
        <div @click="navOpen = !navOpen">
          <RouterLink to="/faq">FAQ</RouterLink>
        </div>
        <div @click="navOpen = !navOpen">
          <a href="#team">Team Support</a>
        </div>
        <div @click="openMobileMore = !openMobileMore">
          <a>More</a>
        </div>
        <div :style="openMobileMoreNav" class="more-mobile-nav">
          <a href="/whitepaper" @click="navOpen = !navOpen">Whitepaper</a>
          <a href="/platform" @click="navOpen = !navOpen">Platform</a>
        </div>
      </nav>
    </div>
    <div class="headerRight">
      <h4>EN</h4>
      <svg
        v-show="!expanded"
        width="25"
        height="25"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 19L25.5 31.5L38 19"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </header>
</template>

<style scoped lang="css">
@import url(./HomeHeader.css);
</style>
