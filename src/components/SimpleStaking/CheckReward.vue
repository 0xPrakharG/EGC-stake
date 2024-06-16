<script setup>
const reload = () => {
  location.reload()
}
</script>

<template>
  <div class="reward">
    <div class="reward-container">
      <div class="close-btn">
        <button @click="reload">
          <img src="@/assets/cross.svg" alt="" />
        </button>
      </div>
      <div class="reward-content">
        <div class="reward-content-desk">
          <div class="reward-top">
            <div class="reward-header">
              <h3>SSAI Reward/Yield</h3>
              <p class="reward-subhead">EARN SSAI MONTHLY</p>
              <p class="reward-subsubhead">From SSAI pool rewards and revenue sharing!</p>
            </div>
            <div class="reward-img">
              <img src="@/assets/reward.png" alt="" />
            </div>
          </div>
          <div class="reward-info">
            <div class="my-egc">
              <p>MY EGC</p>
              <h5>0.00</h5>
            </div>
            <div class="info-summary">
              <div class="info-item">
                <p class="info-item-left">Your shares</p>
                <p class="info-item-right" style="font-weight: bold">0</p>
              </div>
              <div class="info-item">
                <p class="info-item-left">Next distribution</p>
                <p class="info-item-right" style="font-weight: bold">in 30 days</p>
              </div>
              <div class="info-item">
                <p class="info-item-left">Last distribution</p>
                <p class="info-item-right" style="font-weight: bold"></p>
              </div>
              <div class="info-item">
                <p class="info-item-left">APR</p>
                <p class="info-item-right">0.00%</p>
              </div>
              <div class="info-item-subhead">
                <h5>EGC POOL</h5>
              </div>
              <div class="info-item">
                <p class="info-item-left">Reward amount</p>
                <div class="info-item-right">
                  <p class="info-item-up">0 EGC</p>
                  <p class="info-item-down">(~0.0)</p>
                </div>
              </div>
              <div class="info-item-subhead">
                <h5>REVENUE SHARING</h5>
              </div>
              <div class="info-item">
                <p class="info-item-left">Reward amount</p>
                <div class="info-item-right">
                  <p class="info-item-up">0 EGC</p>
                  <p class="info-item-down">(~0.0)</p>
                </div>
              </div>
              <div class="info-item-subhead">
                <h5>TOTAL</h5>
              </div>
              <div class="info-item">
                <p class="info-item-left">Available for claiming</p>
                <div class="info-item-right">
                  <p class="info-item-up">0 EGC</p>
                  <p class="info-item-down">(~0.0)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btns">
          <a target="_blank" class="claim-btn">Claim ALL</a>
          <a target="_blank" class="learn-btn">
            <p>Learn how to connect</p>
            <div>
              <img src="@/assets/share.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reward {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* bottom: 0; */
  z-index: 100;
  height: 100%;
  background: rgba(13, 13, 13, 0.34);
  backdrop-filter: blur(10.2px);
  -webkit-backdrop-filter: blur(10.2px);
  overflow: auto;
}
.reward-container {
  background: #8a64a44d;
  position: relative;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  border-radius: 20px;
  box-shadow:
    0px 2px 8.9px 0px #ffffff80 inset,
    0px 4px 27.1px 17px #23084780;
  padding: 10px;
  margin-bottom: 100px;
}
.close-btn {
  width: 100%;
  display: flex;
  justify-content: end;
}
.close-btn > button {
  background: transparent;
  border: none;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.close-btn > button > img {
  width: 100%;
}
.reward-content {
  padding: 10px 10px 15px;
}
.reward-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
}
.reward-header {
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: 'Coda', sans-serif;
  color: #fff;
  align-self: flex-start;
  width: 60%;
}
.reward-header > h3 {
  font-size: 18px;
}
.reward-subhead {
  font-size: 16px;
}
.reward-subsubhead {
  font-size: 16px;
}
.reward-img {
  width: 110px;
  position: absolute;
  top: -50px;
  right: 20px;
}
.reward-img > img {
  width: 100%;
}
.reward-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
}
.my-egc {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: 'Inter', sans-serif;
  color: #fff;
  background: linear-gradient(90deg, #da71ff 0%, #2a83c3 103.79%);
  width: 100%;
  padding: 8px;
  border-radius: 5px;
}
.my-egc > p {
  font-size: 13px;
}
.my-egc > h5 {
  font-size: 20px;
}
.info-summary {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 15px;
  background: #141217;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  border-radius: 5px;
}
.info-item {
  display: flex;
  justify-content: space-between;
}
.info-item-left {
  text-decoration: underline;
  text-align: left;
}
.info-item-right {
  text-align: right;
}
.info-item-down {
  color: #b9b9b9;
  font-size: 12px;
}
.info-item-subhead {
  font-size: 16px;
}
.btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
}
.claim-btn {
  width: 80%;
  text-align: center;
  background: linear-gradient(90deg, #cd82fd 0%, #9554f6 51%, #56a2fc 100%);
  border-radius: 30px;
  padding: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
}
.learn-btn {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 30px;
  padding: 10px 20px;
  text-decoration: none;
}
.learn-btn > div {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.learn-btn > div > img {
  width: 100%;
}
@media screen and (min-width: 1001px) {
  .reward-content-desk {
    display: flex;
    justify-content: space-around;
  }
  .reward-container {
    top: 60%;
    margin-bottom: 150px;
  }
  .reward-top {
    flex-direction: column-reverse;
    width: 55%;
  }
  .reward-img {
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
  }
  .reward-header {
    width: 100%;
    padding-left: 50px;
  }
  .reward-header > h3 {
    font-size: 25px;
  }
  .reward-info {
    width: 40%;
    gap: 0;
    margin-top: 0;
  }
  .info-summary {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
