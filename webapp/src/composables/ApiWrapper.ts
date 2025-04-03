import axios, { type AxiosResponse } from 'axios';

export class ApiWrapper {
  private static readonly BACKEND_URL = "http://91.214.112.195:3001/danubia_api";
// import.meta.env.VITE_BACKEND_URL

  private static async getStores() {
    const { useAdminStore } = await import('@/stores/admin');
    return useAdminStore();
  }

  public static async get<T = any>(route: string, data: any, headers = {}): Promise<AxiosResponse<T>> {
    const store = await this.getStores();
    return await this.request<T>('GET', route, data, headers, store);
  }

  public static async post<T = any>(route: string, data: any, headers = {}): Promise<AxiosResponse<T>> {
    const store = await this.getStores();
    return await this.request<T>('POST', route, data, headers, store);
  }

  public static async patch<T = any>(route: string, data: any, headers = {}): Promise<AxiosResponse<T>> {
    const store = await this.getStores();
    return await this.request<T>('PATCH', route, data, headers, store);
  }

  public static async put<T = any>(route: string, data: any, headers = {}): Promise<AxiosResponse<T>> {
    const store = await this.getStores();
    return await this.request<T>('PUT', route, data, headers, store);
  }

  public static async delete<T = any>(route: string, data: any, headers = {}): Promise<AxiosResponse<T>> {
    const store = await this.getStores();
    return await this.request<T>('DELETE', route, data, headers, store);
  }

  private static async request<T = any>(
    method: string,
    route: string,
    data: any,
    extraHeaders: object,
    store: any,
  ): Promise<AxiosResponse<T>> {
    const res = await axios.request({
      method,
      url: route,
      baseURL: ApiWrapper.BACKEND_URL,
      data,
      headers: store.loggedIn()
        ? {
            Authorization: `Bearer ${store.getJwt()}`,
            ...extraHeaders
          }
        : extraHeaders
    });

    return res;
  }
}
