<template>
  <div class="breadcumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(v,i) in list" :key="i">
        <router-link :to="v.path">{{ v.meta.title }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    console.log(this.$route.matched)
    this.list = this.$route.matched
  },
  watch: {
    $route (to, from) {
      this.list = to.matched
    }
  }
}
</script>
