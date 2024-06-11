<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="buy-now">
    <div class="buy-now-left">
      <img src="@/assets/buyNow.png" alt="Buy Now Image" />
    </div>
    <div class="buy-now-right">
      <RouterLink to="/buy">Buy Now</RouterLink>
      <a>Buy on UNISWAP</a>
    </div>
  </div>
</template>

<style scoped lang="css">
@import url(./BuyNow.css);
</style>
