<template>
  <div class="flex-container block w-full text-center">
    <div class="bg-gray-50 card rounded border border-gray-300 p-4">
      <h3 class="mb-8 font-bold text-light-100">同步时间</h3>
      <ul>
        <li class="mb-2 flex w-full justify-center">
          <span class="text-4xl text-light-18">{{ metricsData.stat_date }}</span>
        </li>
      </ul>
    </div>
    <div
      v-for="(card, cardIndex) in metricsData.data"
      :key="cardIndex"
      class="bg-gray-50 card rounded border border-gray-300 p-4"
    >
      <h3 class="mb-4 font-bold text-light-100">{{ card[0].group }}</h3>
      <ul>
        <li
          v-for="item in card"
          :key="item.id"
          class="mb-2 flex w-full items-center justify-between"
        >
          <!-- 左侧名称部分 -->
          <span class="w-1/2 pr-2 text-right">{{ item.name }}: </span>
          <!-- 右侧值部分 -->
          <span class="w-1/2 text-left text-light-18">{{ item.metric_value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { getMetrics } from '../../../services/index';

  export default defineComponent({
    name: 'MetricsCmp',
    setup() {
      const loading = ref<boolean>(false);
      const metricsData = ref<{ data: any[]; stat_date: string }>({ data: [], stat_date: '' });

      const fetchData = async () => {
        loading.value = true;
        try {
          const res = await getMetrics();
          console.info(res);
          metricsData.value = res;
        } finally {
          loading.value = false;
        }
      };

      onMounted(() => {
        fetchData();
      });

      return {
        loading,
        metricsData,
      };
    },
  });
</script>

<style lang="less">
  .flex-container {
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    gap: 16px; /* 卡片之间的间距 */
    justify-content: flex-start; /* 从左对齐 */
  }

  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    width: calc(25% - 20px); /* 每行4个卡片，减去间距 */
    height: 200px;
    // background-color: #f9f9f9;
    box-sizing: border-box;
  }

  .card h3 {
    font-size: 18px;
  }

  .card ul {
    list-style: none;
    padding: 0;
  }

  .card li {
    font-size: 14px;
    margin: 4px 0;
  }

  @media (max-width: 768px) {
    .card {
      width: calc(50% - 20px); /* 移动设备每行2个卡片 */
    }
  }

  @media (max-width: 480px) {
    .card {
      width: calc(100% - 20px); /* 小屏设备每行1个卡片 */
    }
  }
</style>
