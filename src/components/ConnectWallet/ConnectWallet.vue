<script setup>
const reload = () => {
  location.reload()
}
</script>

<template>
  <div v-on:click="updateConnect" class="connect-wallet">
    <div class="connect-wallet-container">
      <div class="close-btn">
        <button @click="reload">
          <img src="@/assets/cross.svg" alt="" />
        </button>
      </div>
      <div class="connect-wallet-content">
        <h3>Connect Your Wallet</h3>
        <div class="wallets-options">
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
          <div class="wallet-option optional">
            <div class="wallet-img">
              <img src="@/assets/metamask.png" alt="" />
            </div>
            <p>wallet name</p>
          </div>
        </div>
        <div class="not-have-wallet">
          <h3>Don&apos;t have a wallet yet?</h3>
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
.connect-wallet {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(13, 13, 13, 0.34);
  backdrop-filter: blur(10.2px);
  -webkit-backdrop-filter: blur(10.2px);
}
.connect-wallet-container {
  background: #8a64a44d;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  border-radius: 20px;
  box-shadow:
    0px 2px 8.9px 0px #ffffff80 inset,
    0px 4px 27.1px 17px #23084780;
  padding: 10px;
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
.connect-wallet-content {
  padding: 10px 10px 15px;
}
.connect-wallet-content > h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Coda', sans-serif;
  font-size: 18px;
  color: #fff;
}
.wallets-options {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.wallet-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.wallet-img {
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wallet-img > img {
  width: 100%;
}
.wallet-option > p {
  font-family: 'Coda', sans-serif;
  font-size: 16px;
  color: #fff;
}
.wallet-option:hover > p {
  font-family: 'Coda', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
}
.not-have-wallet {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.not-have-wallet > h3 {
  font-family: 'Coda', sans-serif;
  font-size: 18px;
  color: #fff;
}
.learn-btn {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #cd82fd 0%, #9554f6 51%, #56a2fc 100%);
  border-radius: 30px;
  padding: 10px 20px;
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
.optional {
  display: none;
}
@media screen and (min-width: 1101px) {
  .connect-wallet-container {
    width: 60%;
  }
  .connect-wallet-content > h3 {
    justify-content: flex-start;
    margin-left: 40px;
  }
  .wallets-options {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .optional {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
