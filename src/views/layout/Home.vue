<template>
  <div id="module">
    <el-container>
      <!-- 左侧导航 -->
      <Nav />
      <el-container>
        <!-- 头部内容 -->
        <el-header>
          <el-button type="primary" class="exit" @click="goBack()">退出</el-button>
          <Breadcumb />
        </el-header>
        <!-- 主体内容 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Breadcumb from './Breadcumb.vue'
export default {
  name: 'Home',
  components: {
    Nav,
    Breadcumb
  },
  methods: {
    goBack () {
      this.$router.push('/login')
      sessionStorage.removeItem('username')
    }
  }
}
</script>
