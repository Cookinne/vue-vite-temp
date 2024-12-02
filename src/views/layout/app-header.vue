<template>
  <header class="z-10 flex h-14 items-center justify-center px-4 sm:h-18 sm:px-10">
    <div class="flex h-full items-center justify-center">
      <router-link to="/" class="flex h-full items-center justify-center border-gray-80 sm:mr-4">
        <span class="mr-6 text-4xl sm:flex">NexVault 运营数据监控</span>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AppHeader',
    components: {},
    setup() {},
    computed: {},
  });
</script>
<style lang="less" scoped>
  .active {
    color: rgb(51, 154, 240);
  }
  .head-page-link {
    &:hover {
      .active();
    }
  }
</style>
