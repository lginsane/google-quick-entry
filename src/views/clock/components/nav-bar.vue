<script lang="ts" setup>
import SvgIcon from '/@/components/SvgIcon/index.vue'
import type { NavList } from '../type'
// 导航栏列表
const options: NavList = [
  {
    text: '掘金',
    img: 'juejin',
    url: 'https://juejin.cn/user/1591748569336423'
  },
  {
    text: 'bilibili',
    img: 'bili',
    url: 'https://space.bilibili.com/526662411'
  },
  {
    text: 'Gitee',
    img: 'gitee',
    url: 'https://gitee.com/lginsane'
  },
  {
    text: 'Github',
    img: 'gitHub',
    url: 'https://github.com/lginsane'
  }
]
// 打开地址
function handleOpenUrl(url: string):void {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="nav-bar">
    <div class="nav-bar-item" v-for="(nav, index) in options" :key="index" @click="handleOpenUrl(nav.url)">
      <template v-if="nav.img">
        <SvgIcon :name="nav.img" size="100"></SvgIcon>
      </template>
      <span v-else>{{ nav.text }}</span>
    </div>
  </div>
</template>

<style>
.nav-bar {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
}
.nav-bar-item {
  margin: 0 10px;
  cursor: pointer;
}
</style>
