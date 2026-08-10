<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// const name = ref("Bong slnh oun la")
</script>

<template>
  <header>
    <div class="logo">
      <div class="logo-icon"></div>
      <div class="logo-text">WifeBanK</div>
    </div>
    <div class="wallet" v-if="route.name === 'home'">
      <div class="expenses">
        <div class="expenses-title">Expenses</div>
        <div class="expenses-value">-13$</div>
      </div>
      <div class="income">
        <div class="income-title">Income</div>
        <div class="income-value">+24.5$</div>
      </div>
      <div class="balance">
        <div class="balance-title">Balance</div>
        <div class="balance-value">+11.5$</div>
      </div>
    </div>
    <div v-else></div>
    <!-- <div class="saving-money"></div> -->
  </header>
</template>
<style scoped>
header {
  position: relative;
  width: 100%;

  /* position: absolute; */
  /* top: 0; */
  min-height: 217px;
  background-color: #171717;
}

.logo {
  position: absolute;
  width: 166px;
  height: 56px;
  left: 18px;
  top: 67px;
}

.logo-text {
  position: absolute;
  width: 95px;
  height: 25px;
  left: 71px;
  top: 28px;

  font-family: 'Kavoon';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */

  color: #FFFFFF;
}


.logo-icon {

  position: absolute;
  width: 64px;
  height: 56px;

  left: 0;
  top: 0;
  background-image: url('@/assets/fotor_2026-07-29_09-06-00-removebg-preview.png');
  background-size: 300% 250%;
  background-position: 50% 40%;
  background-color: transparent;
}

.wallet {
  position: absolute;
  top: 158px;
  width: 100%;
  /* left: 0px; */
  /* right: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* grid-template-columns: min-content min-content min-content; */
  gap: 60px;
}

.expenses .income .balance {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
}

.expenses-title {

  width: 64px;
  height: 17px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.6);
}

.expenses-value {

  width: 53px;
  height: 29px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #FF383C;
}

.income-title {

  width: 49px;
  height: 17px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.6);
}

.income-value {

  /* +24.5$ */

  width: 80px;
  height: 29px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #14D520;

}

.balance-title {

  /* Balance */

  width: 53px;
  height: 17px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.6);
}

.balance-value {

  /* +11.5$ */

  width: 74px;
  height: 29px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #14D520;
}
</style>
