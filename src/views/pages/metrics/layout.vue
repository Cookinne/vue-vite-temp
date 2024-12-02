<template>
  <div class="pb-22">
    <div
      class="routeMetricsBgc flex h-0 items-center justify-center gap-4 pt-12 sm:h-25 sm:pb-6 sm:pt-0"
    ></div>
    <div class="mx-auto max-w-screen-2xl">
      <MetricsCmp />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import MetricsCmp from './index.vue';

  defineComponent({
    name: 'Metrics',
    components: {
      MetricsCmp
    }
  });
</script>

<style scoped lang="less">
  .routeMetricsBgc {
    background: linear-gradient(to bottom, #3c2341, #161617);
  }
</style>
