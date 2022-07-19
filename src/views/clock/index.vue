<script lang="ts" setup>
import TimeControls from './components/time-controls.vue'
import NavBar from './components/nav-bar.vue'
import { SearchCircle, NavigateCircle } from '@vicons/ionicons5'
const router = useRouter()
function handleOpenNavigate(url) {
  router.push(url)
}
</script>

<template>
  <div class="clock-container">
    <nav-bar></nav-bar>
    <time-controls></time-controls>
    <div class="nav">
      <n-icon size="40" @click="handleOpenNavigate('/search')">
        <search-circle />
      </n-icon>
      <n-icon size="36" @click="handleOpenNavigate('/navigation')">
        <navigate-circle />
      </n-icon>
    </div>
  </div>
</template>

<style lang="scss">
.clock-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #69410c 0%, #89819a 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  box-sizing: border-box;
  overflow: hidden;
  .nav{
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
    .n-icon {
      cursor: pointer;
    }
    .n-icon + .n-icon {
      margin-left: 10px;
    }
  }
}
</style>

