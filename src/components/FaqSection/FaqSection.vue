<script>
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'
import Questions from '@/components/FaqSection/QuestionsContainer.vue'
import data from '@/data.js'

export default {
  name: 'App',
  components: {
    Questions
  },
  setup() {
    const questions = reactive(data)
    return { questions, RouterLink }
  }
}
</script>

<template>
  <div class="faq-section">
    <div class="faq-container">
      <div class="faq-img-container">
        <img src="@/assets/faq.png" alt="faqs image" class="faq-desktop-image" />
        <img src="@/assets/faq-mobile.png" alt="faqs mobile image" class="faq-mobile-image" />
      </div>
      <div class="faqs">
        <h1>FAQ</h1>
        <Questions :questions="questions" />
        <div class="faq-desktop-btn">
          <RouterLink to="/faq"><span class="view-desktop-btn">View All</span></RouterLink>
        </div>
      </div>
      <div class="faq-mobile-btn">
        <RouterLink to="/faq"><span class="view-mobile-btn">View All</span></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
@import url(./FaqSection.css);
</style>
