<script>
import { ref, computed } from 'vue'

export default {
  name: 'SingleQuestion',
  props: {
    id: Number,
    title: String,
    info: String,
    button1: String || null,
    button2: String || null
  },
  setup() {
    const expanded = ref(false)
    const contentStyle = computed(() => {
      return { 'max-height': expanded.value ? '1000px' : 0 }
    })

    const infoStyle = computed(() => {
      return { opacity: expanded.value ? 1 : 0 }
    })

    const buttonStyle = computed(() => {
      return { opacity: expanded.value ? 1 : 0 }
    })

    return { expanded, contentStyle, infoStyle, buttonStyle }
  }
}
</script>

<template>
  <article class="question">
    <header>
      <button class="btn" @click="expanded = !expanded">
        <svg
          v-show="expanded"
          width="35"
          height="35"
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
          width="35"
          height="35"
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
      <div class="btn-container">
        <button :style="buttonStyle" v-if="button1">{{ button1 }}</button>
        <button :style="buttonStyle" v-if="button2">{{ button2 }}</button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.question {
  padding: 15px 0 0;
}
.question header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.btn {
  background: transparent;
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  align-self: center;
}
.question-title {
  font-family: 'Coda', sans-serif;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 0;
}
.content {
  max-height: 0;
  transition: max-height 0.2s ease-out;
  margin-left: 50px;
}
.info {
  z-index: -1;
  opacity: 0;
  margin-bottom: 0;
  margin-top: 0.5rem;
  font-family: 'Coda', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  transition: opacity 0.2s ease-out;
}
.btn-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  gap: 30px;
  margin-top: 15px;
}
.btn-container button {
  padding: 10px 30px;
  width: 200px;
  background: #9334fe;
  font-family: 'Coda', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  transition: opacity 0.2s ease-out;
}
@media screen and (min-width: 961px) {
  .question-title {
    font-size: 25px;
  }
  .info {
    font-size: 25px;
  }
  .btn-container {
    flex-direction: row;
    gap: 50px;
  }
}
@media screen and (min-width: 1391px) {
  .btn-container button {
    padding: 15px 30px;
    border-radius: 20px;
    width: 250px;
    font-size: 20px;
  }
}
@media screen and (min-width: 1701px) {
  .question-title {
    font-size: 30px;
  }
  .info {
    font-size: 30px;
  }
  .btn-container button {
    width: 280px;
    font-size: 25px;
  }
}
</style>
