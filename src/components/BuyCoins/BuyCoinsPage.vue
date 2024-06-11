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
@import url(./BuyCoinsPage.css);
</style>
