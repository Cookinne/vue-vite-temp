<template>
  <div class="hidden sm:block">
    <footer
      :class="'z-20 flex h-16 w-full items-center justify-center border-t bg-base-10 px-4 sm:px-7.5 xl:px-10'"
    >
      <div class="flex items-center gap-2 text-xs">
        <span class="text-white/70">
          Powered by
          <a
            href="https://nexvault.com/en"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-primary"
          >
            NexVault
          </a></span
        >
        <Popper hover placement="top">
          <span
            class="flex h-4 cursor-pointer items-center gap-2 rounded-lg border-none px-2 text-center font-normal text-black"
            :style="{ background: 'rgba(70, 143, 206, 0.8)' }"
            >Beta</span
          >
          <template #content>
            <div class="rounded-md bg-skin-200 p-3 text-base-1">Version: {{ version }}</div>
          </template>
        </Popper>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import dayjs from 'dayjs';
  import Popper from 'vue3-popper';

  export default defineComponent({
    components: {
      Popper,
    },
    setup() {
      const version = dayjs(import.meta.env.__APP_VERSION__).toString();
      return { version };
    },
  });
</script>
