<script lang="ts" setup>
interface Props {
  prefix?: string
  name: string,
  color?: string,
  size?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  name: '',
  color: '#333',
  size: 20
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" :width="size" :height="size">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
