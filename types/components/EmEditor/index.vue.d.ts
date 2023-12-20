declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | undefined;
    toolbarConfig?: Record<string, any> | undefined;
    editorConfig?: Record<string, any> | undefined;
    mode?: "default" | "simple" | undefined;
    height?: string | number | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: string;
    toolbarConfig: () => {};
    editorConfig: () => {};
    mode: string;
    height: string;
    placeholder: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | undefined;
    toolbarConfig?: Record<string, any> | undefined;
    editorConfig?: Record<string, any> | undefined;
    mode?: "default" | "simple" | undefined;
    height?: string | number | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: string;
    toolbarConfig: () => {};
    editorConfig: () => {};
    mode: string;
    height: string;
    placeholder: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    height: string | number;
    placeholder: string;
    disabled: boolean;
    editorConfig: Record<string, any>;
    mode: "default" | "simple";
    toolbarConfig: Record<string, any>;
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
