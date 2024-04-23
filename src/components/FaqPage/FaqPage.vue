<script>
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'
import Questions from '@/components/FaqPage/QuestionsContainer.vue'
import data2 from '@/data2.js'

export default {
  name: 'App',
  components: {
    Questions
  },
  setup() {
    const questions = reactive(data2)
    return { questions, RouterLink }
  }
}
</script>

<template>
  <div class="faq-page">
    <img src="@/assets/faq-page.png" alt="" />
  </div>
  <div class="faq-questions">
    <div class="faq-box">
      <h1>FAQ</h1>
      <Questions :questions="questions" />
    </div>
  </div>
</template>

<style scoped lang="css">
@import url(./FaqPage.css);
</style>
