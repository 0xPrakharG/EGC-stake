<script>
import SingleQuestion from '@/components/FaqSection/SingleQuestion.vue'

export default {
  name: 'FaqSection',
  components: {
    SingleQuestion
  },
  props: {
    questions: Array
  }
}
</script>

<template>
  <section class="info">
    <SingleQuestion
      v-for="question in questions"
      :key="question.id"
      :id="question.id"
      :title="question.title"
      :info="question.info"
      :button1="question.button1"
    />
  </section>
</template>
