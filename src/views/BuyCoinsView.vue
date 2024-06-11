<script setup>
import BuyCoinsPage from '@/components/BuyCoins/BuyCoinsPage.vue'
import PageFooter from '@/components/Footer/PageFooter.vue'
</script>

<template>
  <main>
    <BuyCoinsPage />
    <PageFooter />
  </main>
</template>

<style>
main {
  background: linear-gradient(180deg, #230150 0%, #30105a 100%);
  min-height: 100vh;
}
</style>
