<script setup>
import DropdownMenu from '../DropdownMenu.vue'
import DropdownMenu2 from '../DropdownMenu2.vue'
import DropdownMenu3 from '../DropdownMenu3.vue'
import DropdownMenu4 from '../DropdownMenu4.vue'
</script>

<template>
  <div class="buy-coins">
    <div class="buy-coins-header">
      <h2>Buy Crypto</h2>
      <p>Buy crypto in just few clicks</p>
    </div>
    <div class="buy-coins-box">
      <div class="buy-coins-box-content">
        <div class="buy-coins-input">
          <div class="input-info">
            <input type="text" placeholder="e.g.: 150" value="150" />
            <div class="input-info-right">
              <div>
                <DropdownMenu />
              </div>
            </div>
          </div>
        </div>
        <div class="buy-coins-input">
          <div class="input-info">
            <input type="text" placeholder="e.g.: 150" value="0.23452" />
            <div class="input-info-right">
              <div>
                <DropdownMenu2 />
              </div>
            </div>
          </div>
        </div>
        <div class="buy-coins-input">
          <div class="input-info">
            <div class="third-input">
              <div class="input-img">
                <img src="@/assets/mercuryo.svg" alt="" />
              </div>
              <div class="third-input-text">
                <p>Mercuryo</p>
                <p>1BNB=$590.91</p>
              </div>
            </div>
            <div class="input-info-right">
              <div>
                <DropdownMenu3 />
              </div>
            </div>
          </div>
        </div>
        <div class="matic-btn">
          <button>
            <img src="@/assets/matic-btn.png" alt="" />
            <p>Matic Chain</p>
          </button>
        </div>
        <div class="buy-coins-input buy-coins-est">
          <div class="input-info">
            <div class="est-input">
              <h3>Est Total Fees:</h3>
              <p style="display: flex; align-items: center; gap: 5px">
                $2.98
                <img src="@/assets/alert-circle.svg" alt="" style="width: 20px; height: 20px" />
              </p>
            </div>
            <div class="input-info-right">
              <div>
                <DropdownMenu4 />
              </div>
            </div>
          </div>
        </div>
        <div class="connect-wallet-btn">
          <button>Connect Wallet</button>
        </div>
        <div class="terms">
          <div></div>
          <p>By continuing you agree to our terms of service</p>
          <div class="rotate">
            <img src="@/assets/rotate.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.buy-coins {
  padding: 30px 40px 0;
}
.buy-coins-header {
  color: #fff;
  font-family: 'Coda', sans-serif;
}
.buy-coins-header > h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.buy-coins-header > p {
  font-size: 20px;
  font-family: 'Inter', sans-serif;
}
.buy-coins-box {
  width: 95%;
  margin: 70px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(102, 102, 102, 0.148) 100%);
  box-shadow: 0px 2px 8.9px 0px #ffffff80 inset;
  border-radius: 30px;
  padding: 50px;
}
.buy-coins-box-content {
  width: 100%;
}
.buy-coins-input {
  background: #9065a533;
  border-radius: 10px;
  margin-bottom: 30px;
}
.buy-coins-est {
  border: 1px solid #827e7e;
}
.input-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.input-info > input {
  background: transparent;
  border: none;
  width: 100%;
  padding: 10px 0 10px 30px;
  border-right: 1px solid #fff;
  font-family: 'Coda', sans-serif;
  font-size: 16px;
  outline: none;
  color: white;
}
.third-input,
.est-input {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-right: 1px solid #fff;
  margin: 10px 0 10px 20px;
}
.third-input > div,
.est-input > div {
  width: 30px;
  height: 30px;
}
.third-input > div > img,
.est-input > div > img {
  width: 100%;
  height: 100%;
}
.est-input > p,
.est-input > h3,
.third-input-text > p {
  font-size: 13px;
  font-family: 'Coda', sans-serif;
  color: #fff;
}
.third-input-text > p {
  width: 100%;
}
.third-input-text > p:nth-child(3) {
  padding-left: 20px;
}
.matic-btn,
.connect-wallet-btn {
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.matic-btn > button,
.connect-wallet-btn > button {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 10px;
  background: #ba7eff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.connect-wallet-btn > button {
  width: 250px;
  font-size: 20px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  background: linear-gradient(90deg, #cd82fd 0%, #9554f6 51%, #56a2fc 100%);
}
.matic-btn > button > img {
  width: 30px;
  height: 30px;
}
.matic-btn > button > p {
  font-size: 18px;
  color: #fff;
}
.terms {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.terms > p {
  font-size: 16px;
  font-family: 'Coda', sans-serif;
  padding-left: 60px;
  color: #fff;
}
.rotate {
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  width: 50px;
  height: 50px;
}
.rotate > img {
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 760px) {
  .third-input-text > p {
    font-size: 18px;
    padding-left: 20px;
  }
  .est-input > p,
  .est-input > h3 {
    font-size: 18px;
  }
  .est-input > p:nth-child(2) {
    padding-left: 50px;
  }
  .third-input-text {
    display: flex;
    align-items: center;
    gap: 70px;
  }
}
@media screen and (min-width: 900px) {
  .third-input-text > p {
    padding-left: 50px;
  }
  .third-input-text {
    display: flex;
    align-items: center;
    gap: 100px;
  }
}
</style>
