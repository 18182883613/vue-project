<template>
  <div class="charts">
    <div ref="chart" style="width: 100%; height: 420px;"></div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(this.$refs.chart)
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '信息展示:'
        },
        tooltip: {},
        legend: {
          data: ['使用']
        },
        xAxis: {
          data: ['html', 'css', 'javascript', 'vue', 'react', 'node']
        },
        yAxis: {},
        series: [{
          name: '使用',
          type: this.type,
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
