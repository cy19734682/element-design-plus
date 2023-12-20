declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    id?: string | undefined;
    className?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    config?: Record<string, any> | undefined;
}>, {
    id: string;
    className: string;
    width: string;
    height: string;
    config: () => {};
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    id?: string | undefined;
    className?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    config?: Record<string, any> | undefined;
}>, {
    id: string;
    className: string;
    width: string;
    height: string;
    config: () => {};
}>>>, {
    width: string;
    height: string;
    id: string;
    className: string;
    config: Record<string, any>;
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
