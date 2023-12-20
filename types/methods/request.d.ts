import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { Collection } from '../public';
export interface ServiceR extends AxiosInstance {
    store?: any;
    router?: any;
}
export interface RequestConfigR extends AxiosRequestConfig {
    isShowLoading?: boolean;
}
declare const _default: {
    /**
     * @description 初始化该请求插件
     * @function
     * @param store 项目中vuex的store
     * @param router 项目中路由管理
     */
    init(store: any, router: any): void;
    /**
     * post 请求
     */
    post(url: string, data?: Collection, config?: RequestConfigR): Promise<void>;
    /**
       * put请求
       */
    put(url: string, data?: Collection, config?: RequestConfigR): Promise<void>;
    /**
       * get请求
       */
    get(url: string, data?: Collection, config?: RequestConfigR): Promise<void>;
    /**
       * delete 请求
       */
    delete(url: string, data?: Collection, config?: RequestConfigR): Promise<void>;
    /**
       * 并发请求
       */
    all: typeof import("axios").all; /**
     * 并发请求结果分离
     */
    spread: typeof import("axios").spread; /**
     * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
     */
    config: ServiceR;
};
export default _default;
