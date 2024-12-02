/* eslint-disable no-fallthrough */
/* eslint-disable no-param-reassign */
import axios, { Axios, AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Router } from 'vue-router';

let appRouter: Router | null = null;

export const setRouter = (router: Router) => {
  appRouter = router;
};

const getPathVersion = (path: string) => {
  switch (path) {
    default:
      return 'api';
  }
};

const methodsWithoutData = new Set(['get', 'delete', 'head', 'options']);

const onResponseSuccess = (response: AxiosResponse) => {
  return response;
};

const onResponseError = (err: AxiosError) => {
  if (err.response?.status === 401) {
    appRouter?.replace('/login');
  }

  throw err as any;
};

export const getBaseUrl = () => '/api';

export const ApisClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: 40000,
});

[axios, ApisClient].forEach((instance: AxiosInstance) => {
  instance.defaults.withCredentials = true;
  instance.interceptors.response.use(onResponseSuccess, onResponseError);
});

export class ApiClient extends Axios {
  public static instances: Record<string, AxiosInstance> = {
    api: ApisClient,
  };

  public static routeMethod =
    (method: 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch') =>
    async <T = string, R = AxiosResponse, D = any>(
      path: T,
      data?: D | AxiosRequestConfig<D> | undefined,
      config?: AxiosRequestConfig<D> | undefined,
    ): Promise<R> => {
      const version = getPathVersion(path as string);

      if (methodsWithoutData.has(method)) {
        return this.instances[version][method](path as string, data as D & AxiosRequestConfig<D>);
      }
      return this.instances[version][method](
        path as string,
        data as D & AxiosRequestConfig<D>,
        config,
      );
    };

  public static post = this.routeMethod('post');

  public static get = this.routeMethod('get');

  public static delete = this.routeMethod('delete');

  public static patch = this.routeMethod('patch');

  public static put = this.routeMethod('put');

  public static options = this.routeMethod('options');

  public static head = this.routeMethod('head');
}

export default ApiClient;
