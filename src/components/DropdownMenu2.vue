<template>
  <div class="dropdown" @click="toggleDropdown">
    <div class="dropdown-selected">
      <div class="currency">
        <img src="@/assets/bnb.png" alt="" />
      </div>
      <div class="dropdown-text">
        <h3 class="dropdown-header">
          {{ selectedOption || 'BNB' }}
        </h3>
        <p class="dropdown-subtext">On binance</p>
      </div>
      <div style="width: 20px; height: 20px">
        <img src="@/assets/down-arrow.svg" alt="" />
      </div>
    </div>
    <div v-if="isOpen" class="dropdown-options">
      <div class="dropdown-option" @click="selectOption('BNB')">
        <div class="currency">
          <img src="@/assets/bnb.png" alt="" />
        </div>
        <h3 class="dropdown-header">BNB</h3>
      </div>
      <div class="dropdown-option" @click="selectOption('BNB')">
        <div class="currency">
          <img src="@/assets/bnb.png" alt="" />
        </div>
        <h3 class="dropdown-header">BNB</h3>
      </div>
      <div class="dropdown-option" @click="selectOption('BNB')">
        <div class="currency">
          <img src="@/assets/bnb.png" alt="" />
        </div>
        <h3 class="dropdown-header">BNB</h3>
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
.currency {
  width: 30px;
  height: 30px;
}
.dropdown-selected > div > img,
.currency > img {
  width: 100%;
  height: 100%;
}
.dropdown-text {
  text-align: center;
  font-size: 16px;
  font-family: 'Coda', sans-serif;
  color: #fff;
}
.dropdown-header {
  font-family: 'Coda', sans-serif;
  font-size: 20px;
  color: #fff;
  line-height: 20px;
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
