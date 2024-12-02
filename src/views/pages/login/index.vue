<template>
  <div class="mt-28 flex items-center justify-center">
    <div class="w-full max-w-md rounded bg-light-10 p-6 shadow-lg">
      <h2 class="mb-6 text-center text-2xl font-bold text-white">登录</h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- 用户名 -->
        <div>
          <label for="username" class="mb-1 block text-sm font-medium text-gray-700">
            用户名
          </label>
          <input
            id="username"
            type="username"
            v-model="username"
            class="focus:ring-blue-100 w-full rounded border border-gray-200 bg-gray-100 p-2 focus:outline-none focus:ring"
            placeholder="请输入用户名"
            required
          />
        </div>
        <!-- 密码 -->
        <div>
          <label for="password" class="mb-1 block text-sm font-medium text-gray-700"> 密码 </label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="focus:ring-blue-100 w-full rounded border border-gray-200 bg-gray-100 p-2 focus:outline-none focus:ring"
            placeholder="请输入密码"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full rounded bg-gray-100 py-2 text-white transition duration-200 hover:bg-dark-1"
          >
            登录
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { ElMessage } from 'element-plus';
  import { login } from '../../../services/index';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'LoginCmp',
    setup() {
      const username = ref<string>('');
      const password = ref<string>('');
      const router = useRouter();

      const handleLogin = async () => {
        try {
          const res = await login({ username: username.value, password: password.value });
          console.info(res);
          router.replace('/metrics');
        } catch (err: any) {
          ElMessage({
            message: err?.response?.data?.error,
            type: 'error',
          });
        }
      };

      return {
        username,
        password,
        handleLogin,
      };
    },
  });
</script>

<style lang="less">
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
</style>
