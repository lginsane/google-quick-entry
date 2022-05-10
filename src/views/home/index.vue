<template>
    <n-button type="primary" @click="onClick">
      +1
    </n-button>
    <div>{{count}}</div>
</template>
<script lang="ts" setup>
const count = ref(0)
const onClick = () => {
    count.value++
}
</script>
