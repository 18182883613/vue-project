<template>
    <div>
        <Chart :type="'line'" />
        <Map />
    </div>
</template>

<script>
import Chart from './chart.vue'
import Map from './map.vue'
export default {
  components: {
    Chart,
    Map
  }
}
</script>
