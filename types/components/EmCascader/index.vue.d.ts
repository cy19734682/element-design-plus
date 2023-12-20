declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | undefined;
    url?: string | undefined;
    data?: any[] | undefined;
    optionVal?: string | undefined;
    optionLabel?: string | undefined;
    optionFilter?: (<T>(d: T[]) => T[]) | undefined;
    showAllLevels?: boolean | undefined;
    separator?: string | undefined;
    size?: "default" | "small" | "large" | undefined;
    filterable?: boolean | undefined;
    checkStrictly?: boolean | undefined;
    multiple?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
}>, {
    data: () => never[];
    optionVal: string;
    optionLabel: string;
    showAllLevels: boolean;
    separator: string;
    size: string;
    filterable: boolean;
    checkStrictly: boolean;
    multiple: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-name-change")[], "update:modelValue" | "on-name-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | any[] | undefined;
    url?: string | undefined;
    data?: any[] | undefined;
    optionVal?: string | undefined;
    optionLabel?: string | undefined;
    optionFilter?: (<T>(d: T[]) => T[]) | undefined;
    showAllLevels?: boolean | undefined;
    separator?: string | undefined;
    size?: "default" | "small" | "large" | undefined;
    filterable?: boolean | undefined;
    checkStrictly?: boolean | undefined;
    multiple?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
}>, {
    data: () => never[];
    optionVal: string;
    optionLabel: string;
    showAllLevels: boolean;
    separator: string;
    size: string;
    filterable: boolean;
    checkStrictly: boolean;
    multiple: boolean;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-name-change"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    size: "default" | "small" | "large";
    data: any[];
    checkStrictly: boolean;
    filterable: boolean;
    multiple: boolean;
    optionLabel: string;
    optionVal: string;
    separator: string;
    showAllLevels: boolean;
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
