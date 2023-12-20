declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | File | undefined;
    uploadFetch?: boolean | undefined;
    url?: string | undefined;
    paramData?: Record<string, any> | undefined;
    headers?: Record<string, any> | undefined;
    fileName?: string | undefined;
    autoUpload?: boolean | undefined;
    multiple?: boolean | undefined;
    format?: string[] | undefined;
    maxSize?: number | undefined;
    length?: number | undefined;
    listType?: "text" | "picture" | "picture-card" | undefined;
    withCredentials?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    uploadFetch: boolean;
    url: string;
    paramData: () => {};
    headers: () => {};
    fileName: string;
    autoUpload: boolean;
    multiple: boolean;
    format: () => never[];
    maxSize: number;
    length: number;
    listType: string;
    withCredentials: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-name-change")[], "update:modelValue" | "on-name-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | File | undefined;
    uploadFetch?: boolean | undefined;
    url?: string | undefined;
    paramData?: Record<string, any> | undefined;
    headers?: Record<string, any> | undefined;
    fileName?: string | undefined;
    autoUpload?: boolean | undefined;
    multiple?: boolean | undefined;
    format?: string[] | undefined;
    maxSize?: number | undefined;
    length?: number | undefined;
    listType?: "text" | "picture" | "picture-card" | undefined;
    withCredentials?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    uploadFetch: boolean;
    url: string;
    paramData: () => {};
    headers: () => {};
    fileName: string;
    autoUpload: boolean;
    multiple: boolean;
    format: () => never[];
    maxSize: number;
    length: number;
    listType: string;
    withCredentials: boolean;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-name-change"?: ((...args: any[]) => any) | undefined;
}, {
    length: number;
    disabled: boolean;
    autoUpload: boolean;
    fileName: string;
    format: string[];
    headers: Record<string, any>;
    listType: "text" | "picture" | "picture-card";
    maxSize: number;
    multiple: boolean;
    paramData: Record<string, any>;
    url: string;
    withCredentials: boolean;
    uploadFetch: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
