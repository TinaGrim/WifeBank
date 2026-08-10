<script setup lang="ts">
import { ref } from 'vue'

const creadit = ref("2026")
</script>

<template>
  <footer>
    <div class="buttons">
      <router-link to="/" class="button" v-slot="{ isActive }">
        <div class="home-icon" :class="{ active: isActive }"></div>
        <div class="home-text" :class="{ active: isActive }">Home</div>
      </router-link>
      <router-link to="/chart" class="button" v-slot="{ isActive }">
        <div class="chart-icon" :class="{ active: isActive }"></div>
        <div class="chart-text" :class="{ active: isActive }">Chart</div>
      </router-link>
      <router-link to="/wallet" class="button" v-slot="{ isActive }">
        <div class="wallet-icon" :class="{ active: isActive }"></div>
        <div class="wallet-text" :class="{ active: isActive }">Wallet</div>
      </router-link>
      <router-link to="/more" class="button" v-slot="{ isActive }">
        <div class="more-icon" :class="{ active: isActive }"></div>
        <div class="more-text" :class="{ active: isActive }">More</div>
      </router-link>
    </div>
  </footer>
</template>

<style scoped>
footer {
  /* position: relative; */
  margin-top: auto;
  width: 100%;
  min-height: 90px;
  display: flex;
  justify-content: center;
  background-color: #171717;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.button {
  position: relative;
  display: flex;
  width: 50px;
  height: 62px;
  flex-direction: column;
  /* background-color: gray; */
}

.home-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: white;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-mask-image: url('@/assets/home_icon.svg');
  mask-image: url('@/assets/home_icon.svg');

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}


.chart-icon {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: white;
  -webkit-mask-image: url('@/assets/chart_icon.svg');
  mask-image: url('@/assets/chart_icon.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.wallet-icon {
  position: absolute;
  top: 5px;
  width: 40px;
  height: 40px;

  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  -webkit-mask-image: url('@/assets/wallet_icon.svg');
  mask-image: url('@/assets/wallet_icon.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.more-icon {
  position: absolute;
  top: 3px;
  width: 40px;
  height: 40px;

  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  -webkit-mask-image: url('@/assets/more_icon.svg');
  mask-image: url('@/assets/more_icon.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.home-text,
.chart-text,
.wallet-text,
.more-text {
  position: absolute;
  bottom: 5px;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  /* height: 22px; */

}

.home-icon.active,
.chart-icon.active,
.wallet-icon.active,
.more-icon.active {
  background-color: #fae932;

}

.home-text.active,
.chart-text.active,
.wallet-text.active,
.more-text.active {
  color: #fae932;
}
</style>
