declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: Record<string, any> | undefined;
    url?: string | undefined;
    data?: any[] | undefined;
    selectWidth?: string | undefined;
    optionVal?: string | undefined;
    optionLabel?: string | undefined;
    optionFilter?: (<T>(d: T[]) => T[]) | undefined;
    filterable?: boolean | undefined;
    disabled?: boolean | undefined;
    selectPlaceholder?: string | undefined;
    inputPlaceholder?: string | undefined;
}>, {
    modelValue: () => {
        key: null;
        val: null;
    };
    data: () => never[];
    selectWidth: string;
    optionVal: string;
    optionLabel: string;
    filterable: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: Record<string, any> | undefined;
    url?: string | undefined;
    data?: any[] | undefined;
    selectWidth?: string | undefined;
    optionVal?: string | undefined;
    optionLabel?: string | undefined;
    optionFilter?: (<T>(d: T[]) => T[]) | undefined;
    filterable?: boolean | undefined;
    disabled?: boolean | undefined;
    selectPlaceholder?: string | undefined;
    inputPlaceholder?: string | undefined;
}>, {
    modelValue: () => {
        key: null;
        val: null;
    };
    data: () => never[];
    selectWidth: string;
    optionVal: string;
    optionLabel: string;
    filterable: boolean;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Record<string, any>;
    disabled: boolean;
    data: any[];
    filterable: boolean;
    optionLabel: string;
    optionVal: string;
    selectWidth: string;
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
