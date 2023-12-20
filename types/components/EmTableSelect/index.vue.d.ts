declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | any[];
    url?: string | undefined;
    searchForm?: any[] | undefined;
    columns?: any[] | undefined;
    pageSize?: number | undefined;
    width?: number | undefined;
    multiple?: boolean | undefined;
    valKey?: string | undefined;
    labelKey?: string | undefined;
    placeholder?: string | undefined;
    placement?: "top" | "right" | "left" | "auto" | "bottom" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | undefined;
    disabled?: boolean | undefined;
}>, {
    searchForm: () => never[];
    columns: () => never[];
    pageSize: number;
    width: number;
    multiple: boolean;
    valKey: string;
    labelKey: string;
    placeholder: any;
    placement: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | any[];
    url?: string | undefined;
    searchForm?: any[] | undefined;
    columns?: any[] | undefined;
    pageSize?: number | undefined;
    width?: number | undefined;
    multiple?: boolean | undefined;
    valKey?: string | undefined;
    labelKey?: string | undefined;
    placeholder?: string | undefined;
    placement?: "top" | "right" | "left" | "auto" | "bottom" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | undefined;
    disabled?: boolean | undefined;
}>, {
    searchForm: () => never[];
    columns: () => never[];
    pageSize: number;
    width: number;
    multiple: boolean;
    valKey: string;
    labelKey: string;
    placeholder: any;
    placement: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    width: number;
    placeholder: string;
    disabled: boolean;
    columns: any[];
    labelKey: string;
    multiple: boolean;
    pageSize: number;
    placement: "top" | "right" | "left" | "auto" | "bottom" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    searchForm: any[];
    valKey: string;
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
