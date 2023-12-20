declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | undefined;
    data?: any[] | undefined;
    width?: number | undefined;
    trigger?: "contextmenu" | "focus" | "click" | "hover" | undefined;
    placeholder?: string | undefined;
    background?: string | undefined;
    color?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    width: number;
    trigger: string;
    background: string;
    color: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | undefined;
    data?: any[] | undefined;
    width?: number | undefined;
    trigger?: "contextmenu" | "focus" | "click" | "hover" | undefined;
    placeholder?: string | undefined;
    background?: string | undefined;
    color?: string | undefined;
    disabled?: boolean | undefined;
}>, {
    width: number;
    trigger: string;
    background: string;
    color: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    width: number;
    disabled: boolean;
    color: string;
    trigger: "contextmenu" | "focus" | "click" | "hover";
    background: string;
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
