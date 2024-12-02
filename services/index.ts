import ApiClient from '~/utils/api-client';

export const getMetrics = async () => {
  const resp = await ApiClient.get('/metrics');
  return resp.data;
};

export const login = async (payload: { username: string; password: string }) => {
  const resp = await ApiClient.post('/login', payload);
  return resp.data;
};
