<script setup>
import CoinsHeader from '@/components/CoinsHeader/CoinsHeader.vue'
import CoinsInfo from '@/components/CoinsInfo/CoinsInfo.vue'
import PageFooter from '@/components/Footer/PageFooter.vue'
</script>

<template>
  <main>
    <CoinsHeader />
    <CoinsInfo />
    <PageFooter />
  </main>
</template>

<style>
main {
  background: linear-gradient(180deg, #230150 0%, #30105a 100%);
  min-height: 100vh;
}
</style>
