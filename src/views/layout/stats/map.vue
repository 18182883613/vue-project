<template>
  <div class="charts">
    <div ref="map" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script>
import 'echarts/map/js/china'
export default {
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(this.$refs.map)
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '地图'
        },
        series: [{
          type: 'map',
          map: 'china',
          label: {
            show: true,
            color: 'blue'
          }
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
