<script lang="ts" setup>
import { Ref } from 'vue'
import { useTimestamp } from '@vueuse/core'
import { dateUtil, formatToWeek } from '@/utils/dateUtil'

const timestamp: Ref<number> = useTimestamp({ offset: 0 })
// 日期
const curTime: Ref<string> = ref(dateUtil(timestamp.value).format('MM-DD'))
// 周
const curWeek: Ref<string> = ref(formatToWeek(timestamp.value))
// 时间
const curDate = computed(() => {
  return dateUtil(timestamp.value).format('HH:mm:ss')
})
</script>

<template>
  <div class="time-controls">
    <div class="date">{{ curTime }} 周{{ curWeek }}</div>
    <div class="timer">
      {{ curDate }}
    </div>
  </div>
</template>

<style>
.time-controls {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #ccc;
}
.date, .timer {
  font-size: 10vw;
  line-height: 1;
  margin-top: 60px;
}
.timer {
  font-size: 20vw;
  margin-top: 30px;
}
</style>
