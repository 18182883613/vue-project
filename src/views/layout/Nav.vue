<template>
  <el-aside width="200px" class="aside">
    <el-menu :default-active="$route.path" exact class="el-menu-vertical-demo" router>
      <NavItem v-for="v in items" :key="v.url" :item="v" :basePath="v.url" />
    </el-menu>
  </el-aside>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
  data () {
    return {
      items: [
        {
          name: '首页',
          icon: 'el-icon-menu',
          url: '/index'
        },
        {
          name: '数据统计',
          icon: 'el-icon-monitor',
          url: '/stats'
        },
        {
          name: '信息管理',
          url: '/info',
          icon: 'el-icon-location',
          child: [
            {
              name: '列表展示',
              url: '/info/list'
            }
          ]
        }
      ]
    }
  },
  components: {
    NavItem
  }
}
</script>
