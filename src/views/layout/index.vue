<template>
  <div class="layout w-full overflow-y-auto overflow-x-hidden">
    <div class="layout-wrap -mb-10 min-h-screen">
      <appHeader />
      <router-view v-slot="{ Component }" class="mx-auto">
        <component :is="Component" />
      </router-view>
    </div>
    <appFooter />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import appHeader from './app-header.vue';
  import appFooter from './app-footer.vue';

  export default defineComponent({
    name: 'Layout',
    components: {
      appHeader,
      appFooter,
    },
    setup() {
      return {};
    },
  });
</script>
<style lang="less" scoped>
  .layout {
    position: relative;

    .layout-wrap {
      width: 100%;
      .container {
        position: relative;
        z-index: 2;
        margin: 24px auto;
      }
    }
  }
</style>
