<script>
export default {
  name: 'StakingCard',
  data() {
    return {
      childMessage: true,
      activeTab: 1
    }
  },
  methods: {
    updateConnect() {
      this.$emit('update:parent', this.childMessage)
    },
    select(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<template>
  <div class="staking-card">
    <div>
      <div class="card-header">
        <div class="header-logo">
          <img src="@/assets/tether.svg" alt="" />
        </div>
        <div class="header-name">
          <h2>Crypto Name</h2>
          <p>Stake & Earn</p>
        </div>
      </div>
      <div class="card-values">
        <div class="card-left">
          <p>Stake Period:</p>
          <div class="stake-period">
            <div :class="['no-of-days', { active: activeTab === 1 }]" @click="select(1)">
              <p>30 D</p>
            </div>
            <div :class="['no-of-days', { active: activeTab === 2 }]" @click="select(2)">
              <p>60 D</p>
            </div>
            <div :class="['no-of-days', { active: activeTab === 3 }]" @click="select(3)">
              <p>90 D</p>
            </div>
          </div>
        </div>
        <div class="card-right">
          <p>Total Staked:</p>
          <div class="total-staked">
            <h3>12345 Crypto Name</h3>
            <p>~12345$ usd</p>
          </div>
        </div>
      </div>
      <div class="card-base">
        <div class="card-month">
          <p>Apr:</p>
          <div class="percentages">
            <p>0.11% ~ 0.19%</p>
            <div class="calulator-icon">
              <img src="@/assets/calculator.png" alt="" />
            </div>
          </div>
        </div>
        <div class="connect-btn">
          <button v-on:click="updateConnect">Connect Wallet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.staking-card {
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(102, 102, 102, 0.148) 100%);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(2.9px);
  -webkit-backdrop-filter: blur(6.9px);
  box-shadow:
    0 0 4px #ffffff50 inset,
    10px 15px 10px #23084775;
}
.card-header {
  display: flex;
  align-items: center;
  gap: 30px;
}
.header-logo {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-logo > img {
  width: 100%;
  height: 100%;
}
.header-name > h2 {
  font-family: 'Coda', sans-serif;
  font-size: 23px;
  color: #6da8ff;
}
.header-name > p {
  font-family: 'Coda', sans-serif;
  font-size: 20px;
  color: #fff;
}
.card-values {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  font-family: 'Coda', sans-serif;
  font-size: 18px;
  color: #fff;
}
.card-left,
.card-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.stake-period {
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: #fdf5f514;
  font-size: 16px;
}
.no-of-days {
  padding: 10px;
  border-radius: 10px;
}
.no-of-days.active {
  background: #ba7eff;
  font-weight: 800;
}
.no-of-days:not(.active) {
  background: transparent;
  font-weight: 400;
}
.total-staked {
  text-align: right;
}
.total-staked > h3 {
  font-size: 20px;
}
.card-base {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.card-month {
  display: flex;
  flex-direction: column;
  font-family: 'Coda', sans-serif;
  font-size: 18px;
  color: #fff;
}
.percentages {
  display: flex;
  align-items: center;
  gap: 20px;
}
.calulator-icon {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calulator-icon > img {
  width: 100%;
  height: 100%;
}
.connect-btn {
  width: 50%;
}
.connect-btn > button {
  width: 100%;
  background: linear-gradient(90deg, #cd82fd 0%, #9554f6 51%, #56a2fc 100%);
  font-family: 'Inter', sans-serif;
  font-size: 23px;
  font-weight: 800;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
}
</style>
