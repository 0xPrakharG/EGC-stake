<script setup>
import BuyNow from '@/components/Buy/BuyNow.vue'
import StakingSection from '@/components/StakingSection/StakingSection.vue'
import FaqSection from '@/components/FaqSection/FaqSection.vue'
import PageFooter from '@/components/Footer/PageFooter.vue'
import WebHero from '@/components/Hero/WebHero.vue'
</script>

<template>
  <main>
    <WebHero />
    <div>
      <BuyNow />
      <StakingSection />
      <FaqSection />
      <PageFooter />
    </div>
  </main>
</template>

<style scoped>
main {
  background: linear-gradient(180deg, #340f62 0%, #22004f 39.24%, #30105a 100%);
}
</style>
