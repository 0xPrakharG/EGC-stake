<template>
  <div class="dropdown" @click="toggleDropdown">
    <div class="dropdown-selected">
      <div class="selected-text">
        {{ selectedOption || 'Best Price' }}
        <div style="width: 20px; height: 20px">
          <img src="@/assets/lightening.svg" alt="" />
        </div>
      </div>
      <div style="width: 20px; height: 20px">
        <img src="@/assets/down-arrow.svg" alt="" />
      </div>
    </div>
    <div v-if="isOpen" class="dropdown-options">
      <div class="dropdown-option" @click="selectOption('Best Price')">
        <p class="dropdown-text">Best Price</p>
      </div>
      <div class="dropdown-option" @click="selectOption('Best Price')">
        <p class="dropdown-text">Best Price</p>
      </div>
      <div class="dropdown-option" @click="selectOption('Best Price')">
        <p class="dropdown-text">Best Price</p>
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
  display: flex;
  align-items: center;
  gap: 10px;
  background: #924be2;
  width: 150px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding: 5px 0;
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
