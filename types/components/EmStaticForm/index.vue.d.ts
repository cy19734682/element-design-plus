declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: Record<string, any> | undefined;
    formData?: any[] | undefined;
    labelWidth?: string | undefined;
    inline?: boolean | undefined;
    labelPosition?: "top" | "right" | "left" | undefined;
    size?: "default" | "small" | "large" | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => {};
    formData: () => never[];
    labelWidth: string;
    inline: boolean;
    labelPosition: string;
    size: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: Record<string, any> | undefined;
    formData?: any[] | undefined;
    labelWidth?: string | undefined;
    inline?: boolean | undefined;
    labelPosition?: "top" | "right" | "left" | undefined;
    size?: "default" | "small" | "large" | undefined;
    disabled?: boolean | undefined;
}>, {
    modelValue: () => {};
    formData: () => never[];
    labelWidth: string;
    inline: boolean;
    labelPosition: string;
    size: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Record<string, any>;
    disabled: boolean;
    size: "default" | "small" | "large";
    labelPosition: "top" | "right" | "left";
    labelWidth: string;
    inline: boolean;
    formData: any[];
}, {}>, Partial<Record<any, (_: {
    dataGroup: any;
}) => any>>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
