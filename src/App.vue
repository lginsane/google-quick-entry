<script lang="ts" setup>
  import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#2080F0',
      primaryColorHover: '#4098fc',
      primaryColorPressed: '#4098fc'
    }
  }
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
  
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app,
body,
html,
.n-config-provider {
  height: 100%;
  overflow: auto;
}
</style>