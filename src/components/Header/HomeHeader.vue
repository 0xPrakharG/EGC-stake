<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const navOpen = ref(false)
const close = computed(() => {
  return { display: navOpen.value ? 'flex' : 'none' }
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
        <div>
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
      <nav :style="close" class="navbar-mobile">
        <div class="cross">
          <img @click="navOpen = !navOpen" src="@/assets/cross.svg" alt="" width="50" />
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
        <div @click="navOpen = !navOpen">
          <a>More</a>
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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(360deg, #3f0366 0%, #7537d1 99%);
  min-height: 3rem;
  padding: 15px;
}
.headerLeft {
  display: flex;
  align-items: center;
  gap: 15px;
}
.logo {
  width: 50px;
}
.navbar {
  display: none;
  align-items: center;
  font-family: 'Inder', sans-serif;
  font-size: 20px;
  margin-top: 25px;
  gap: 25px;
}
.navbar-mobile {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  height: 100vh;
  width: 300px;
  padding: 20px 20px 20px 30px;
  font-family: 'Inder', sans-serif;
  font-size: 20px;
  background: linear-gradient(180deg, #340f62 0%, #22004f 39.24%, #30105a 100%);
  display: flex;
  flex-direction: column;
  gap: 25px;
  animation: slide-in 0.5s;
}
@keyframes slide-in {
  0% {
    left: -300px;
  }
  100% {
    left: 0;
  }
}
.cross {
  display: flex;
  justify-content: end;
}
.navbar-mobile a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}
.navbar-mobile a.router-link-exact-active {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.navbar a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}
.navbar div {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.navbar a.router-link-exact-active {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.headerRight {
  margin-right: 30px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  gap: 10px;
}
.headerRight h4 {
  font-family: 'Coda', sans-serif;
  font-size: 15px;
  font-weight: 400;
}
.headerRight svg {
  display: none;
}
@media screen and (min-width: 761px) {
  .logo {
    width: 70px;
  }
  .headerRight {
    margin-top: 15px;
    cursor: pointer;
  }
  .headerRight h4 {
    font-weight: 800;
  }
  .headerRight svg {
    display: block;
  }
}
@media screen and (min-width: 950px) {
  .navbar {
    display: flex;
    margin-top: 15px;
    font-size: 25px;
  }
  .navbar a {
    cursor: pointer;
  }
  .hamburger {
    display: none;
  }
}
@media screen and (min-width: 1551px) {
  .navbar{
    font-size: 28px;
    gap: 40px;
  }
  .logo {
    width: 90px;
  }
}
</style>
