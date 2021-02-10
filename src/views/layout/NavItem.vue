<template>
  <div>
    <!-- 无子级 -->
    <el-menu-item :index="basePath" v-if="!item.child">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>
    <!-- 有子级 -->
    <el-submenu :index="basePath" v-else>
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </template>
      <NavItem v-for="child in item.child" :key="child.url" :item="child" :basePath="child.url" />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: ['item', 'basePath']
}
</script>
