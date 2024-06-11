<template>
  <div class="dropdown" @click="toggleDropdown">
    <div class="dropdown-selected">
      <div class="selected-text">
        {{ selectedOption || 'Show details' }}
      </div>
      <div style="width: 20px; height: 20px">
        <img src="@/assets/down-arrow.svg" alt="" />
      </div>
    </div>
    <div v-if="isOpen" class="dropdown-options">
      <div class="dropdown-option" @click="selectOption('Show details')">
        <p class="dropdown-text">Show details</p>
      </div>
      <div class="dropdown-option" @click="selectOption('Show details')">
        <p class="dropdown-text">Show details</p>
      </div>
      <div class="dropdown-option" @click="selectOption('Show details')">
        <p class="dropdown-text">Show details</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: null
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectOption(value) {
      this.selectedOption = value
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  width: 220px;
}
.dropdown-selected {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
}
.dropdown-selected > div > img,
.dropdown-selected > div > div > img {
  width: 100%;
  height: 100%;
}
.selected-text {
  text-align: center;
  font-size: 15px;
  font-family: 'Coda', sans-serif;
  color: #fff;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dropdown-text {
  font-size: 16px;
  font-family: 'Coda', sans-serif;
  color: #fff;
}
.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-top: none;
  background-color: #72199ef5;
  z-index: 1000;
}
.dropdown-option {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px;
}
.dropdown-option > p {
  width: 90%;
}
.dropdown-option:last-child {
  border-bottom: none;
}
.dropdown-option:hover {
  background-color: #9065a592;
}
</style>
