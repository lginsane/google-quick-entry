<script lang="ts" setup>
import TimeControls from './components/time-controls.vue'
import NavBar from './components/nav-bar.vue'

</script>

<template>
  <div class="clock-container">
    <nav-bar></nav-bar>
    <time-controls></time-controls>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
}
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
}
</style>

