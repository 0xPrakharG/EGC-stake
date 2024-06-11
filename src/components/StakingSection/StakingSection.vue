<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="staking-section">
    <div class="staking-container">
      <div class="staking-content">
        <div class="staking-img-desktop">
          <img src="@/assets/staking.png" alt="Staking" />
        </div>
        <div class="staking-text">
          <h1>Simple Staking</h1>
          <p>
            Whether you're a newcomer or an experienced investor, Simple Staking offers an intuitive
            interface and convenient operations, enabling you to participate in staking and earn
            rewards seamlessly.
          </p>
        </div>
      </div>
      <div class="staking-bottom">
        <div class="staking-img-mobile">
          <img src="@/assets/staking.png" alt="Staking" />
        </div>
        <div class="btn-container">
          <RouterLink to="/staking">Learn More</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
@import url(./StakingSection.css);
</style>
