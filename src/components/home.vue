<script setup lang="ts">
import { ref } from 'vue'
import AddButton from './add_button.vue'

interface Transection {
  id: number
  amount: string
  name: string
  profileColor?: string
}
const transections = ref<Transection[]>([

  { id: 246345132, amount: '+13$', name: 'Pich' },
  { id: 245367332, amount: '-10$', name: 'Tina' },
  { id: 245366132, amount: '+2$', name: 'Erorn' },
  { id: 225367132, amount: '+5.5$', name: 'Len' },
  { id: 265367132, amount: '-3$', name: 'Alex' },
  { id: 249367132, amount: '+4$', name: 'Thida' }
])
const profileColors = [
  '#5E5E5E', '#273B4A', '#D6292F', '#151515', '#FF9900'
]
transections.value = transections.value.map((item, index) => ({
  ...item,
  profileColor: profileColors[index % profileColors.length]

}))

</script>

<template>
  <main>
    <div class="transection-container">
      <div class="transection-item" v-for="(item, index) in transections" :key="item.id">
        <div class="profile" :style="{ backgroundColor: item.profileColor }">
          <h4>{{ item.name?.charAt(0) }}</h4>

        </div>
        <div class="transection-details">
          <h4 class="transection-id">ID {{ item.id }}</h4>
          <h4 class="transection-amount">{{ item.amount }}</h4>
          <h4 class="transection-name">{{ item.name }}</h4>
        </div>
      </div>

      <!-- <div class="transection-item">2</div> -->
      <!-- <div class="transection-item">3</div> -->
      <!-- <div class="transection-item">4</div> -->
    </div>
    <AddButton class="add-button"> </AddButton>
    <!-- <add_button /> -->


  </main>
</template>

<style scoped>
main {
  /* display: flex; */
  position: relative;
  flex: 1;
  /* min-height: 0; */
  padding-top: 66px;
  padding-left: 22px;
  padding-right: 30px;

  color: white;
  margin: 0;
}

.transection-container {
  display: flex;
  flex-direction: column;
  gap: 18px;
}


.transection-item {
  display: flex;
  flex-direction: row;
  height: 50px;
  gap: 18px;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 47px;
  height: 47px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 30px 15px #322F35;
}

.transection-details {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 50px;
  flex: 1;
  width: 100%;
}

.transection-amount {
  position: absolute;
  right: 0px;
  top: 17px;
}

.transection-id {
  position: absolute;
  top: 0px;
  left: 0px;
}

.transection-name {
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.add-button {
  position: absolute;
  bottom: 0;
  right: 0;

}

h4 {
  margin: 0;
}
</style>
