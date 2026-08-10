<template>
  <Responsive class="chart-wrap">
    <template #main="{ width }">
      <Chart direction="circular" :size="{ width, height: 290 }" :data="data" :margin="{
        left: -Math.round((width / 10)),
        top: 0,
        right: 0,
        bottom: 0
      }" :config="{ controlHover: false }">
        <template #layers>
          <Pie class="chart-pie" :dataKeys="['name', 'pl']"
            :pie-style="{ innerRadius: 50, padAngle: 0.00, colors: ['#5E5E5E', '#273B4A', '#D6292F', '#151515', '#FF9900'] }" />
        </template>
        <template #widgets>
          <Tooltip :config="{
            name: {},
            avg: { hide: true },
            pl: { label: 'value' },
            inc: { hide: true }
          }" hideLine />
        </template>
      </Chart>
      <svg class="label-overlay" :width="width" :height="chartHeight">
        <text v-for="(s, i) in sliceLabels(width)" :key="i" :x="s.x" :y="s.y" text-anchor="middle"
          dominant-baseline="middle" fill="white" font-size="16">
          {{ s.label }}
        </text>
      </svg>
    </template>
  </Responsive>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Chart, Responsive, Pie, Tooltip } from 'vue3-charts'
import { plByMonth } from './data.ts'

export default defineComponent({
  name: 'PieChart',
  components: { Chart, Responsive, Pie, Tooltip },
  setup() {
    const data = ref(plByMonth)
    const chartHeight = 290

    function sliceLabels(width: number) {
      const left = -Math.round(width / 10)
      const axisSpaceX = 40          // library defaults for the empty axis groups
      const axisSpaceY = 20
      const canvasX = left + axisSpaceX
      const canvasHeight = chartHeight - axisSpaceY
      const size = Math.min(width - canvasX, canvasHeight / 2)
      const cx = size + canvasX
      const cy = size
      const sorted = [...data.value].sort((a, b) => b.pl - a.pl)
      const total = sorted.reduce((sum, d) => sum + d.pl, 0)
      let angle = 0
      return sorted.map((d) => {
        const span = (d.pl / total) * Math.PI * 2
        const mid = angle + span / 2
        angle += span
        const labelRadius = (size + 50) / 2
        return {
          x: cx + labelRadius * Math.sin(mid),
          y: cy - labelRadius * Math.cos(mid),
          label: Math.round((d.pl / total) * 100) + '%'
        }
      })
    }

    return { data, chartHeight, sliceLabels }
  }
})
</script>

<style>
.chart-wrap {
  position: relative;
}

.chart-pie[fill="#151515"] {
  filter: drop-shadow(-12px 4px 3px #151515);
}

.chart-pie[fill="#D6292F"] {
  filter: drop-shadow(0px -10px 3px rgba(214, 41, 47, 0.9));
}

.label-overlay {
  position: absolute;
  top: 10px;
  left: 0;
  pointer-events: none;
}
</style>
