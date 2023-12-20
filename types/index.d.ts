/**
 * @description 源代码入口文件
 */
import type { App } from 'vue';
import "./style/iconfont/iconfont";
export * from './components';
export * from './methods';
export { default as $request } from './methods/request';
export { exportTableToExcel, exportJsonToExcel } from './methods/export2Excel';
export { exportTxtToZip } from './methods/export2Zip';
export interface plugROption {
    notRegistryGlobal?: boolean;
    store?: any;
    useStore?: any;
    router?: Record<keyof any, any>;
    locale?: Record<keyof any, any>;
    i18n?: Record<keyof any, any>;
    [k: keyof any]: any;
}
declare const _default: {
    $request: {
        init(store: any, router: any): void;
        post(url: string, data?: import("./public").Collection | undefined, config?: import("./methods/request").RequestConfigR | undefined): Promise<void>;
        put(url: string, data?: import("./public").Collection | undefined, config?: import("./methods/request").RequestConfigR | undefined): Promise<void>;
        get(url: string, data?: import("./public").Collection | undefined, config?: import("./methods/request").RequestConfigR | undefined): Promise<void>;
        delete(url: string, data?: import("./public").Collection | undefined, config?: import("./methods/request").RequestConfigR | undefined): Promise<void>;
        all: typeof import("axios").all;
        spread: typeof import("axios").spread;
        config: import("./methods/request").ServiceR;
    };
    byteLength(str: string): number;
    cleanArray(actual: number[]): number[];
    param2Obj(url: string): Record<string, any>;
    html2Text(val: string): string;
    objectMerge(target: Record<string, any>, source: any[]): any[] | Record<string, any>;
    toggleClass(element: Element, className: string): void;
    uniqueArr(arr: any[]): any[];
    myTypeof(v: any): string;
    isValidVal(val: any): boolean;
    trimObj(obj: Record<string, any>): Record<string, any>;
    findPath({ group, condition, pathKey, childKey, path }: {
        group: import("./public").Collection;
        condition: (item: any) => boolean;
        pathKey?: any;
        childKey?: any;
        path?: string[] | undefined;
    }): (string | number)[];
    findCollection(group: import("./public").Collection, condition: (e: any) => boolean, getPath?: boolean): any;
    parseFloatFormat(str: string | number, dftVal: string | number, num: number, actNum: number, endStr: string): string | number;
    imageSplicing(path: string): string;
    locale: (l: Record<string | number | symbol, any>) => void;
    i18n: (initI18n: Record<string | number | symbol, any>) => void;
    install: (app: App<any>, options?: plugROption) => void;
};
export default _default;
