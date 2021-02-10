<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <Chart :type="'bar'" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      items: [
        require('@/assets/img/1.png'),
        require('@/assets/img/2.png'),
        require('@/assets/img/3.png'),
        require('@/assets/img/4.png'),
        require('@/assets/img/5.png')
      ]
    }
  },
  components: {
    Chart
  }
}
</script>
