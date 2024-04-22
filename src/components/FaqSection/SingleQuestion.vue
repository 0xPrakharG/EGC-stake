<script>
import { ref, computed } from 'vue'

export default {
  name: 'SingleQuestion',
  props: {
    id: Number,
    title: String,
    info: String
  },
  setup() {
    const expanded = ref(false)
    const contentStyle = computed(() => {
      return { 'max-height': expanded.value ? '1000px' : 0 }
    })

    const infoStyle = computed(() => {
      return { opacity: expanded.value ? 1 : 0 }
    })

    return { expanded, contentStyle, infoStyle }
  }
}
</script>

<template>
  <article class="question">
    <header>
      <button class="btn" @click="expanded = !expanded">
        <svg
          v-show="expanded"
          width="30"
          height="30"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38 31.5L25.5 19L13 31.5"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          v-show="!expanded"
          width="30"
          height="30"
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
      </button>
      <h4 class="question-title">{{ id }}. {{ title }}</h4>
    </header>
    <div :style="contentStyle" class="content">
      <p :style="infoStyle" class="info">{{ info }}</p>
    </div>
  </article>
</template>

<style scoped lang="css">
@import url(./SingleQuestion.css);
</style>
