<script>
import StakingCard from '@/components/SimpleStaking/StakingCard.vue'
import CheckReward from '@/components/SimpleStaking/CheckReward.vue'
import ConnectWallet from '@/components/ConnectWallet/ConnectWallet.vue'

export default {
  name: 'SimpleStakingPage',
  components: {
    StakingCard,
    ConnectWallet,
    CheckReward
  },
  data() {
    return {
      connect: false,
      reward: false
    }
  }
}
</script>

<template>
  <div class="staking-page">
    <div class="staking-img-container">
      <div class="staking-page-img">
        <img src="@/assets/staking-page.png" alt="" />
      </div>
      <div class="staking-img-text">
        <div>
          <h1>Simple Staking</h1>
          <p>Empowers your coins, stake your future!</p>
        </div>
      </div>
    </div>
    <div class="staking-items-container">
      <StakingCard @update:parent="connect = $event" />
      <StakingCard @update:parent="connect = $event" />
      <StakingCard @update:parent="connect = $event" />
      <StakingCard @update:parent="connect = $event" />
      <StakingCard @update:parent="connect = $event" />
      <StakingCard @update:parent="connect = $event" />
      <StakingCard @update:parent="connect = $event" />
      <StakingCard @update:parent="connect = $event" />
    </div>
    <div class="benefits">
      <div class="benefits-header">
        <h3>Benefits of EGC</h3>
      </div>
      <div class="benefits-box">
        <div class="benefits-content">
          <div class="benefits-img">
            <img src="@/assets/benefits.png" alt="" />
          </div>
          <div class="benefits-text">
            <div>
              <h3>Earn EGC</h3>
              <div class="benefits-info">
                <div class="benefits-distributed">
                  <p>Total Distributed</p>
                  <p>27587.7 EGC</p>
                </div>
                <div class="benefits-perks">
                  <li>Monthly revenue sharing</li>
                  <li>Monthly EGC pool rewards</li>
                </div>
              </div>
            </div>
            <div class="reward-btn-desktop">
              <button @click="reward = true">Check Reward</button>
            </div>
          </div>
        </div>
        <div class="reward-btn-mobile">
          <button @click="reward = true">Check Reward</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="connect == true" class="connect">
    <ConnectWallet />
  </div>
  <div v-if="reward == true" class="reward">
    <CheckReward />
  </div>
</template>

<style scoped lang="css">
.staking-img-container {
  position: relative;
  width: 100%;
}
.staking-page-img img {
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  border: none;
}
.staking-img-text {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  color: #fff;
  background: #2a09567f;
}
.staking-img-text > div {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.staking-img-text > div > h1 {
  font-size: 35px;
  font-family: 'Coda', sans-serif;
  font-weight: 800;
}
.staking-img-text > div > p {
  font-size: 20px;
  font-family: 'Coda', sans-serif;
  font-weight: 400;
}
.staking-items-container {
  margin: 40px auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
.benefits {
  width: 85%;
  margin: 20px auto;
}
.benefits-header {
  font-family: 'Coda', sans-serif;
  font-size: 23px;
  color: #fff;
}
.benefits-box {
  margin-top: 20px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(102, 102, 102, 0.148) 100%);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(2.9px);
  -webkit-backdrop-filter: blur(6.9px);
  box-shadow:
    0 0 4px #ffffff50 inset,
    10px 15px 10px #23084775;
  position: relative;
}
.benefits-content {
  display: flex;
  align-items: center;
  justify-content: end;
}
.benefits-img {
  width: 250px;
  position: absolute;
  left: -20px;
}
.benefits-img > img {
  width: 100%;
  height: 100%;
}
.benefits-text {
  font-family: 'Coda', sans-serif;
  font-size: 20px;
  color: #fff;
  line-height: 50px;
  width: 60%;
}
.benefits-info {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.reward-btn-desktop {
  display: none;
}
.reward-btn-mobile {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reward-btn-mobile > button {
  width: 50%;
  background: linear-gradient(90deg, #cd82fd 0%, #9554f6 51%, #56a2fc 100%);
  border: none;
  padding: 15px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  border-radius: 30px;
}
@media screen and (min-width: 1000px) {
  .staking-img-text > div > h1 {
    font-size: 45px;
  }
  .staking-img-text > div > p {
    font-size: 27px;
  }
  .benefits-box {
    padding: 60px;
    margin-top: 50px;
  }
  .benefits-info {
    flex-direction: row;
    justify-content: space-between;
  }
  .reward-btn-mobile {
    display: none;
  }
  .reward-btn-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100%;
  }
  .reward-btn-desktop > button {
    width: 50%;
    background: linear-gradient(90deg, #cd82fd 0%, #9554f6 51%, #56a2fc 100%);
    border: none;
    padding: 15px;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    border-radius: 30px;
  }
  .benefits-img {
    width: 300px;
  }
}
@media screen and (min-width: 1101px) {
  .staking-items-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .benefits-img {
    width: 430px;
  }
}
</style>
