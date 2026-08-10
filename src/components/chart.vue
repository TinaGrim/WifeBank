<script setup lang="ts">
import pieChart from './chart_component.vue'
</script>

<template>
  <main>
    <div class="chart">
      <div>
        Q<h3 class="chart-text">Category</h3>
      </div>
      <pieChart class="pie-chart" />
    </div>
  </main>
</template>

<style scoped>
main {
  /* display: flex; */
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 0; */
  padding-top: 10px;
  padding-left: 22px;
  padding-right: 30px;
}

.chart-text {

  color: white;
  text-align: center;
}

.pie-chart {
  display: flex;
  width: 290px;
  align-items: center;

}
</style>
